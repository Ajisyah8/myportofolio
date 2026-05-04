import React from "react";
import { seo } from "@/data/data";
import ContactForm from "./ContactForm";

export const metadata = {
    title: `Contact Me | ${seo.title}`,
    description: "Get in touch with me to discuss projects, collaborations, or just to say hello.",
    keywords: "contact, get in touch, collaboration, email, message, web developer"
};

function Contact() {
    return (
        <>
            <div className="mt-5 w-full p-4">
                <main className="flex flex-col gap-2">
                    <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                        Contact Me
                    </h1>
                    <div className="p-1">
                        <ContactForm />
                    </div>
                </main>
            </div>
        </>
    );
}

export default Contact;
