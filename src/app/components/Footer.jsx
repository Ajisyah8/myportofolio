const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="mt-16 px-4 pb-4 pt-2 sm:mt-20">
            <div className="rounded-[1.75rem] border border-base-content/10 bg-base-100 px-4 py-4 sm:px-5">
                <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    <p className="text-sm leading-6 text-base-content/70">
                        Copyright {year}. Crafted to reflect clarity, function,
                        and thoughtful product work.
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-base-content/40">
                        Minimal, but not generic
                    </p>
                </div>
            </div>
        </footer>
    );
}
