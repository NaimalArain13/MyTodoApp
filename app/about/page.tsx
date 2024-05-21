"use client";

import { useState } from "react";

export default function About(){
    let [count , setCount] = useState(0)
    return (
        <div>
            <h1>About Page</h1>
            <input 
            type="text"
            title="input"
            value={count}
            onChange={(e)=>{+e.target.value}}
             />
        <br />
        <button type="button" className="border-2 text-blue-900 rounded-md cursor-pointer" 
        onClick={()=> {setCount(count++)}}>Increase Value
        </button>
        <br />
        <button type="button" className="border-2 text-blue-900 rounded-md cursor-pointer"
        onClick={()=> {setCount(count--)}}>Decrease Value
        </button>
        </div>
    )
}