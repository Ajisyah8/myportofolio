import Image from "next/image";
import { about, socials } from "@/data/data";
import profilePhoto from "../assets/DSC07339.JPG.jpeg";

const socialItems = [
    {
        key: "linkedin",
        href: socials.linkedin,
        label: "LinkedIn",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        key: "github",
        href: socials.github,
        label: "GitHub",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.3 0 6.8-2 6.8-7A5.4 5.4 0 0 0 19.2 4 5 5 0 0 0 19.1.8S17.9.4 15 2.3a13.4 13.4 0 0 0-6 0C6.1.4 4.9.8 4.9.8A5 5 0 0 0 4.8 4 5.4 5.4 0 0 0 3.2 7.8c0 5 3.5 7 6.8 7a4.8 4.8 0 0 0-1 3.2v4" />
                <path d="M9 18c-4.5 2-5-2-7-2" />
            </svg>
        ),
    },
    {
        key: "email",
        href: socials.email,
        label: "Email",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        key: "phone",
        href: socials.phone,
        label: "Phone",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
].filter((item) => item.href);

export default function Profile() {
    return (
        <section className="pt-2">
            <Image
                src={profilePhoto}
                width={70}
                height={70}
                className="h-[64px] w-[64px] rounded-[50%] object-cover object-center sm:h-[70px] sm:w-[70px]"
                alt={`${about.name}'s profile`}
            />
            <div className="mt-2 flex items-start gap-[5px] sm:items-center">
                <h1 className="text-xl font-semibold leading-tight sm:text-2xl">
                    {about.name}
                </h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                >
                    <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                </svg>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-1 gap-y-0.5 text-sm sm:text-base">
                <p className="text-base-content/60">{about.role} //</p>
                <p className="cursor-pointer underline text-base-content/90">
                    {about.location}
                </p>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
                {socialItems.map((item) => (
                    <a
                        key={item.key}
                        href={item.href}
                        aria-label={item.label}
                        className="cursor-pointer"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </section>
    );
}
