import React from "react"
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";


export default function Navbar(){
    let Options=[{id:1,name:"Clothes",},{id:2,name:"Women Shoes",},{id:3,name:"Women Fashion",},{id:4,name:"Boutic",}]
    let DropDown=[{id:1,name:"Hitiyat Shoes",},{id:2,name:"Trending Shoes",},{id:3,name:"Rdx Model SHirts",},{id:4,name:"Tronomous Shoes",}]
    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white z-30">
            {/* Upper Navbar */}
            <div className="bg-primary/70 py-2">
                <div className="container flex justify-between items-center">
                     <div>
                        <a href="" className="font-bold text-2xl"> 
                            {/* <img src="" alt="" /> */}
                        Shopify
                        </a>
                     </div>
                     <div className="flex justify-between gap-4">
                         <div className="relative ">
                          <input type="text" placeholder="Enter" className="w-[200px] sm:w-[200px] rounded-full hover-group:w-[600px] transition-all duration-300 px-2 py-1 border border-blue-400 focus:outline-none focus:border-1 focus:border-primary" />
                          <IoSearchSharp className="text-gray-500 absolute top-3 right-3"/>
                         </div>
                        <button className="bg-orange-600 py-1 px-2 rounded-full transition-all duration-300 group">
                            <span className="group-hover:block transition-all duration-300">Order</span>
                        </button>
                     </div>
                </div>
            </div>
            {/* Lower Navbar */}
            <div className="container">
               
                  <ul className="flex justify-center gap-4">
                    
                    {Options.map((data)=>(
                      <li key={data.id}>{data.name}</li>
                    ))}

                    <li className="group relative">
                        <a href="" className="flex">
                        Trending <span className="py-[3px]"><FaCaretDown /></span>
                        </a>
                        <div className="absolute top-6 right-3 hidden group-hover:block rounded-md bg-white w-44">
                            <ul>
                              {DropDown.map((data)=>(<li key={data.id}><a className="hover:bg-primary/40 rounded-md p-[8px]"> {data.name}</a></li>))}
                            </ul>
                        </div>
                           
                            
                            
                    </li>
                    {/* <div className="relative">
                        <li>Fashionista</li>
                        <div className="group-hover:block hidden absolute top-5 "><li>Fashionista1</li>
                        <li>Fashionista2</li>
                        <li>Fashionista3</li>
                        <li>Fashionista4</li></div>
                    </div> */}
                  </ul>
                
            </div>

        </div>
    )
}