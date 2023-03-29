"use client";

import styles from "./page.module.css";
import { Ubuntu } from "next/font/google";
import { ThemeProvider } from "next-themes";
import IntroComponent from "@/components/IntroComponent/IntroComponent";
import TopNavbarComponent from "@/components/TopNavbarComponent/TopNavbarComponent";

const ubuntu = Ubuntu({
    weight: '300',
    subsets: ['latin']
});

export default function Home() {
    return (
        <ThemeProvider attribute="class">
            <main className={`w-screen ${ubuntu.className}`}>
                <TopNavbarComponent />
                <IntroComponent />
            </main>
        </ThemeProvider>
    );
}
