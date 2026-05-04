import ProjectsList from "./components/ProjectsList";
import TechLists from "./components/TechLists";
import About from "./components/About";
import Profile from "./components/Profile";
import Experience from "./components/Experience";

export default function Home() {
    return (
        <>
            <div>
                <main className="mt-4 px-4 py-3 sm:mt-5 sm:p-4">
                    <div className="soft-enter">
                        <Profile />
                    </div>
                    <div className="soft-enter soft-enter-delay-1">
                        <About />
                    </div>
                    <div className="soft-enter soft-enter-delay-2">
                        <ProjectsList />
                    </div>
                    <div className="soft-enter soft-enter-delay-3">
                        <TechLists />
                    </div>
                    <div className="soft-enter soft-enter-delay-4">
                        <Experience />
                    </div>
                </main>
            </div>
        </>
    );
}
