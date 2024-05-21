import Link from "next/link";

export default function Product(){
    return(
        <div>
        <h1>Product List</h1>
        <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
        </ul>
        <Link href="/about"> Navigate to the ABOUT Page</Link>
        </div>
    )
}