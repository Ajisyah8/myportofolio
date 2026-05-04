"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [hideOnMobile, setHideOnMobile] = useState(true);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDark(prefersDark);
            document.documentElement.setAttribute(
                "data-theme",
                prefersDark ? "dark" : "light"
            );
        }
    }, []);

    const handleThemeChange = (checked) => {
        const newTheme = checked ? "dark" : "light";
        setIsDark(checked);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <>
            <div className="sticky top-2 z-10 flex w-full justify-center px-3 sm:px-4">
                <div className="relative flex w-full max-w-full items-center justify-center rounded-3xl border border-base-content/10 bg-base-100/80 px-4 py-4 text-base-content shadow-sm backdrop-blur-md sm:max-w-4xl sm:px-5 sm:py-4 md:px-6 md:py-4 lg:max-w-3xl lg:py-3">
                    <button
                        className="absolute left-4 flex shrink-0 text-base-content sm:left-5 sm:hidden"
                        onClick={() => {
                            setHideOnMobile(!hideOnMobile);
                        }}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <div className="flex min-w-0 items-center justify-center gap-4 sm:gap-6 md:gap-8">
                        <div className="flex items-center gap-4">
                            <ul
                                className={`fixed left-3 right-3 top-20 z-20 mx-auto flex flex-col items-center gap-3 rounded-2xl border border-base-content/10 bg-base-200 p-4 text-sm shadow-lg backdrop-blur-sm sm:static sm:w-full sm:flex-row sm:gap-4 sm:border-transparent sm:bg-transparent sm:p-0 sm:text-base sm:shadow-none ${
                                             hideOnMobile ? "hidden" : "flex"
                                         } sm:flex`}
                            >
                                <li>
                                    <Link
                                        href="/#about"
                                        className="text-base-content transition hover:underline"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#projects"
                                        className="text-base-content transition hover:underline"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#experience"
                                        className="text-base-content transition hover:underline"
                                    >
                                        Experience
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-base-content transition hover:underline"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <label className="toggle absolute right-4 text-base-content toggle-sm sm:right-5 md:right-6">
                        <input
                            type="checkbox"
                            checked={isDark}
                            onChange={(e) =>
                                handleThemeChange(e.target.checked)
                            }
                            className="theme-controller"
                        />

                        <svg
                            aria-label="sun"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2"></path>
                                <path d="M12 20v2"></path>
                                <path d="m4.93 4.93 1.41 1.41"></path>
                                <path d="m17.66 17.66 1.41 1.41"></path>
                                <path d="M2 12h2"></path>
                                <path d="M20 12h2"></path>
                                <path d="m6.34 17.66-1.41 1.41"></path>
                                <path d="m19.07 4.93-1.41 1.41"></path>
                            </g>
                        </svg>

                        <svg
                            aria-label="moon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </g>
                        </svg>
                    </label>
                </div>
            </div>
        </>
    );
}
