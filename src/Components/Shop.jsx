import Maaz from "../Images/Maaz.jpg"
import { FaStar } from "react-icons/fa";

export default function Shop(){
    return (
    <div className="container ">
        <div>
                <div  className="mb-11">
                     <p className="text-orange-600"> Top Selling Products for you</p>
                     <h1 className="text-3xl font-bold ">Products</h1>
                     <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex justify-between">
                
            <div className="bg-white hover:bg-black shadow-2xl w-[300px] h-[300px] place-items-center text-center relative group rounded-lg p-5 overflow-hidden">
                <img src={Maaz} className="w-32 h-36 rounded-lg absolute bottom-44 right-20  group-hover:-translate-y-2"/>
                <div className="flex text-yellow-500 pt-36">
                    <FaStar /> <FaStar /> <FaStar /> 
                </div>
                <h1 className="group-hover:text-white">Shirt</h1>
                <p className="group-hover:text-white">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                <button className="p-1 px-2 rounded-full bg-orange-600 text-white group-hover:bg-white group-hover:text-orange-600">Order Now</button>
            </div>
            <div className="bg-white hover:bg-black shadow-2xl w-[300px] h-[300px] place-items-center text-center relative group rounded-lg p-5">
                <img src={Maaz} className="w-32 h-36 rounded-lg absolute bottom-44 right-20 group-hover:scale-110 "/>
                <div className="flex text-yellow-500 pt-36">
                    <FaStar /> <FaStar /> <FaStar /> 
                </div>
                <h1 className="group-hover:text-white">Shirt</h1>
                <p className="group-hover:text-white">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                <button className="p-1 px-2 rounded-full bg-orange-600 text-white group-hover:bg-white group-hover:text-orange-600">Order Now</button>
            </div>
            <div className="bg-white hover:bg-black shadow-2xl w-[300px] h-[300px] place-items-center text-center relative group rounded-lg p-5">
                <img src={Maaz} className="w-32 h-36 rounded-lg absolute bottom-44 right-20 group-hover:scale-110 "/>
                <div className="flex text-yellow-500 pt-36">
                    <FaStar /> <FaStar /> <FaStar /> 
                </div>
                <h1 className="group-hover:text-white">Shirt</h1>
                <p className="group-hover:text-white">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                <button className="py-1 px-2 rounded-full bg-orange-600 text-white group-hover:bg-white group-hover:text-orange-600">Order Now</button>
            </div>

                </div>
        </div> 
     </div>
    )
}