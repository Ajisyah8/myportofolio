import Marquee from "./Marquee";
import { skills } from "@/data/data";

export default function TechLists() {
    return (
        <section className="mt-10">
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                    <h2 className="text-xl font-medium before:mr-1 before:content-['>']">
                        Toolbox
                    </h2>
                    <p className="mt-1 text-sm text-base-content/55">
                        Tools I reach for when speed and maintainability both matter.
                    </p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-base-content/45">
                    Core stack
                </span>
            </div>

            <div className="mt-5 rounded-[1.75rem] border border-base-content/10 bg-base-100 p-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="rounded-[1.25rem] border border-base-content/8 bg-base-200/60 p-4 transition hover:-translate-y-0.5 hover:border-base-content/20"
                        >
                            <div className="flex items-center gap-3">
                                {skill.icon ? (
                                    <div className="shrink-0 rounded-xl bg-base-100 p-2 shadow-sm dark:bg-base-content">
                                        <img
                                            src={skill.icon}
                                            className="h-8 w-8"
                                            alt={skill.alt || skill.name}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-content text-xs font-semibold uppercase tracking-[0.14em] text-base-100 shadow-sm">
                                        {skill.name.slice(0, 2)}
                                    </div>
                                )}
                                <div className="min-w-0">
                                    <p className="text-sm font-medium">
                                        {skill.name}
                                    </p>
                                    <p className="text-xs uppercase tracking-[0.18em] text-base-content/45">
                                        {skill.group}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 overflow-hidden border-t border-base-content/8 pt-4">
                    <Marquee duration="14s">
                        <div className="flex gap-3">
                            {[...skills, ...skills].map((skill, index) => (
                                <span
                                    key={`${skill.name}-${index}`}
                                    className="rounded-full border border-base-content/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-base-content/55"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
