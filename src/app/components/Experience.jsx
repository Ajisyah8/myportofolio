import { experience } from "../../data/data";

export default function Experience() {
    return (
        <section className="mt-10 scroll-mt-14" id="experience">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                Work Experience
            </h2>
            <div className="mt-6">
                <ol className="relative mt-4 space-y-8 py-2 before:absolute before:left-1 before:top-0 before:h-full before:w-0.5 before:rounded-full before:bg-base-content/15">
                    {experience.map((item, index) => (
                        <li
                            key={index}
                            className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-4"
                        >
                            <div className="relative -ml-3 flex h-full items-start justify-center">
                                <span className="mt-1 block size-3 shrink-0 rounded-full bg-base-content"></span>
                            </div>

                            <div className="-mt-2">
                                <time className="text-xs font-medium text-base-content/80">
                                    {item.date}
                                </time>

                                <h3 className="text-lg font-semibold text-base-content">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-sm text-base-content/80">
                                    {item.description}
                                </p>

                                {item.details?.length ? (
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-base-content/75">
                                        {item.details.map((detail) => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
