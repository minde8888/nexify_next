import Link from "next/link";

const Home = () => {
    return (
        <div className="container mx-auto ">
            <h1>Welcome home !</h1>
            <Link className="bg-[#1da1f2] text-white" href="/">Blog</Link>
            <Link href="/products">Products</Link>
            <Link href="/complex-dashboard">Dashboard</Link>
            <Link href="/photo-feed">Photos</Link>
        </div>
    )
}

export default Home;