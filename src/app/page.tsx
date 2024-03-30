import ThemeToggle from "@/components/themeToggle";
import Link from "next/link";
import Providers from "./Provider";

const Home = () => {
    return (
        <Providers>
            <div className="container mx-auto ">
                <ThemeToggle />
                <h1>Welcome home !</h1>
                <Link className="bg-[#1da1f2] text-white" href="/">Blog</Link>
                <Link href="/products">Products</Link>
                <Link href="/complex-dashboard">Dashboard</Link>
                <Link href="/photo-feed">Photos</Link>
            </div>
        </Providers>
    )
}

export default Home;