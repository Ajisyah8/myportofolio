import { projects } from "@/data/data";

export default function ProjectsList() {
    const projectItems = [...projects.pinProjects, ...projects.otherProjects];

    return (
        <section className="mt-10 scroll-mt-14" id="projects">
            <div>
                <div className="max-w-2xl">
                    <h2 className="text-xl font-medium before:mr-1 before:content-['>']">
                        Projects
                    </h2>
                    <p className="mt-1 text-sm text-base-content/55">
                        A selection of products, platforms, and business websites I have built and contributed to.
                    </p>
                </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {projectItems.map((item, index) => (
                    <a
                        href={item.link}
                        key={item.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soft-card group rounded-[1.5rem] border border-base-content/10 bg-base-100 p-4 text-base-content transition duration-200 hover:-translate-y-1 hover:border-base-content hover:bg-base-content hover:text-base-100 sm:p-5"
                    >
                        <div className="flex h-full flex-col gap-4">
                            <div className="flex flex-col justify-between gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-base-content/45 transition group-hover:text-base-100/55">
                                        Project {index + 1}
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={`${item.title}-${tag}`}
                                            className="rounded-full bg-base-200 px-3 py-1 text-xs text-base-content/65 transition group-hover:border group-hover:border-base-100/15 group-hover:bg-base-100/10 group-hover:text-base-100/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col justify-between gap-4">
                                <p className="text-sm leading-7 text-base-content/72 transition group-hover:text-base-100/80 sm:text-base">
                                    {item.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-sm font-medium">
                                    Visit site
                                    <span className="transition group-hover:translate-x-1">
                                        {"->"}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
