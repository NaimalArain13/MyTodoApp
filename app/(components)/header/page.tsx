import Link from "next/link";

function Header(){
    const links = [
      {href:"/product/123" , name :"ProductID"},
      {href:'/about' , name :"About"},
      {href:'/blog' , name :"Blog"},
      {href:'/todoapp' , name :"TodoApp"},
      {href:'/product' , name :"Product"},
      {href:'/dashboard' , name :"DashBoard"},
    ];
    return(
        <div>
            <ul className="flex space-x-2">
                {links.map((link)=>{
                    return(
                    <li key={link.name}>
                        <Link href={link.href} 
                        replace={true} className="text-blue-500 cursor-pointer hover:focus-visible:">{link.name}</Link>
                    </li>
                )})}
            </ul>
        </div>
    
    )
    }

    export default Header;
