import { about } from "../../data/data";

export default function About() {
    return (
        <section className="mt-10 scroll-mt-14" id="about">
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                <h2 className="text-xl font-medium before:mr-1 before:content-['>']">
                    About
                </h2>
                <span className="text-xs uppercase tracking-[0.2em] text-base-content/45">
                    Short version
                </span>
            </div>

            <div className="soft-card mt-4 grid gap-4 rounded-[1.75rem] border border-base-content/10 bg-base-100 p-4 sm:grid-cols-[1.3fr_0.7fr] sm:p-5">
                <div className="space-y-3">
                    <p className="text-base leading-7 text-base-content/80">
                        {about.about}
                    </p>
                    <p className="text-base leading-7 text-base-content/75">
                        I care about readable interfaces, clear product decisions,
                        and building sites that feel considered instead of
                        overloaded.
                    </p>
                </div>

                <div className="rounded-[1.25rem] bg-base-200/70 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-base-content/45">
                        Contact
                    </p>
                    <p className="mt-3 text-sm leading-6 text-base-content/70">
                        I am currently open to new job opportunities. If you
                        are hiring for a product, frontend, or full-stack role,
                        feel free to reach out by email.
                    </p>
                    <a
                        href={`mailto:${about.email}`}
                        className="mt-4 inline-flex rounded-full border border-base-content/15 px-4 py-2 text-sm font-medium transition hover:border-base-content/35 hover:bg-base-100"
                    >
                        {about.email}
                    </a>
                </div>
            </div>
        </section>
    );
}
