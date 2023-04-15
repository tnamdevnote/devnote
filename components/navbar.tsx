import Link from "next/link";

function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/tag">Tag</Link>
                <Link href="/blog">Blog</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar