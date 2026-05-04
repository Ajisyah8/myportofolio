"use client";

import { useState } from "react";

const initialForm = {
    name: "",
    email: "",
    message: "",
};

export default function ContactForm() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({
        type: "idle",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "idle", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to send the message."
                );
            }

            setStatus({
                type: "success",
                message: data.message,
            });
            setForm(initialForm);
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error.message ||
                    "Failed to send the message. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col rounded-[1.5rem] border border-base-content/10 bg-base-100 p-5"
        >
            <div>
                <div>
                    <span className="text-sm font-bold uppercase text-base-content/80">
                        Full Name
                    </span>
                    <input
                        className="mt-1 w-full rounded-lg border border-base-content/15 bg-base-200/40 p-3 text-base-content placeholder:text-base-content/40 focus:border-base-content/30 focus:outline-none"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mt-3">
                    <span className="text-sm font-bold uppercase text-base-content/80">
                        Email
                    </span>
                    <input
                        className="mt-1 w-full rounded-lg border border-base-content/15 bg-base-200/40 p-3 text-base-content placeholder:text-base-content/40 focus:border-base-content/30 focus:outline-none"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mt-3">
                    <span className="text-sm font-bold uppercase text-base-content/80">
                        Message
                    </span>
                    <textarea
                        className="mt-1 min-h-32 w-full rounded-lg border border-base-content/15 bg-base-200/40 p-3 text-base-content placeholder:text-base-content/40 focus:border-base-content/30 focus:outline-none"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                {status.type !== "idle" ? (
                    <p
                        className={`mt-3 text-sm ${
                            status.type === "success"
                                ? "text-green-600"
                                : "text-red-500"
                        }`}
                    >
                        {status.message}
                    </p>
                ) : null}
                <div className="mt-3">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full cursor-pointer rounded-lg bg-base-content p-3 text-sm font-bold uppercase tracking-wide text-base-100 transition hover:bg-base-content/95 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </div>
        </form>
    );
}
