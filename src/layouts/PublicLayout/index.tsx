import Navbar from "@/components/Navbar/Navbar";
import TopBar from "@/components/TopBar/TopBar";
import { useAppSelector } from "@/hooks";


export default function PublicLayout({ children }: { children: React.ReactNode }) {
    const { login } = useAppSelector(state => state.app)
    return (
        <main>
            <TopBar />
            {children}
            {login && <Navbar />}
        </main>
    )

}