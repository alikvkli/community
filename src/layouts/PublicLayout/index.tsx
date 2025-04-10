import Navbar from "@/components/Navbar/Navbar";
import TopBar from "@/components/TopBar/TopBar";


export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <TopBar />
            {children}
            <Navbar />
        </main>
    )

}