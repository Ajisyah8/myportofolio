import "./globals.css";
import Navbar from "./components/Navbar";
import { seo } from "@/data/data";
import Footer from "./components/Footer";

export const metadata = {
    title: `${seo.title}`,
    icons: {
        icon: [{ url: "/favicon.ico" }],
    },
    description: `${seo.description}`,
    keywords: `${seo.keywords}`,
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            data-theme="light"
            data-scroll-behavior="smooth"
            suppressHydrationWarning
        >
            <head>
                <link rel="icon" href="/favicon.ico" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (() => {
                                const savedTheme = localStorage.getItem("theme");
                                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                                const theme = savedTheme || (prefersDark ? "dark" : "light");
                                document.documentElement.setAttribute("data-theme", theme);
                            })();
                        `,
                    }}
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body className={`antialiased overflow-auto`}>
                <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
