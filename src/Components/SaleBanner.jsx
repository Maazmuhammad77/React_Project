import Maaz from "../Images/Maaz.jpg"
import { FaShopLock } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import React from "react";
import { ShoppingBag, Truck, CreditCard, Tag } from "lucide-react";



export default function SaleBanner(){
    return (
        // <div className="container w-full h-[550px] mt-28">
        //     <div className="flex justify-center gap-10">
        //          {/* ImageDiv */}
        //          <div className=" bg-orange-600 ">
        //            <img src={Maaz} className="w-32 h-32"/>
        //          </div>
        //          {/* ContentDiv */}
        //          <div>
        //              <h1>Winter Sale upto 50% Off</h1>
        //              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consectetur</p>
        //              <div>
        //                 <div  className="flex">
        //                     <FaShopLock /> <h1>Quality Products</h1>
        //                 </div>
        //                 <div className="flex">
        //                     <MdFastfood /> <h1>Fast Delivery</h1>
        //                 </div>
        //                 <div className="flex">
        //                       <FaBabyCarriage />   <h1>Easy Payment method</h1>
        //                 </div>
        //              </div>
        //          </div>
        //     </div>
        // </div>
        <>
        <div className="flex flex-col md:flex-row gap-10 p-7 bg-white mt-10">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={Maaz} // Replace with your actual image path
          alt="Winter Sale"
          className="rounded-lg max-w-xs"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Winter Sale upto 50% Off
        </h2>
        <p className="text-sm text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          reiciendis inventore iste ratione ex alias quis magni at optio
        </p>

        <div className="space-y-4">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <div className="bg-purple-200 p-2 rounded-full">
              <ShoppingBag className="text-purple-700" size={20} />
            </div>
            <span className="text-gray-700 text-sm">Quality Products</span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Truck className="text-yellow-600" size={20} />
            </div>
            <span className="text-gray-700 text-sm">Fast Delivery</span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <CreditCard className="text-green-600" size={20} />
            </div>
            <span className="text-gray-700 text-sm">Easy Payment method</span>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-200 p-2 rounded-full">
              <Tag className="text-yellow-700" size={20} />
            </div>
            <span className="text-gray-700 text-sm">Get Offers</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-[165px] bg-orange-600 ">
          <div className="container py-10 place-items-center ">
            <div className="space-y-6">
              <h1 className="text-white text-2xl">Get Notified About New Products</h1>
              <input placeholder="Enter your Product ID" className="w-80 p-2" />
            </div>
          </div>
    </div>
    </>
  );
    
}