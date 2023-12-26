import Navbar from "@/components/navigation/Navbar";
import {UserProvider} from "@/context/UserContext";

export default function Home() {
    return (
        <UserProvider>
            <Navbar />
        </UserProvider>
    )
}
