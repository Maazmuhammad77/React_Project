
import Maaz from "../Images/Maaz.jpg"
import { FaStar } from "react-icons/fa";

let imageList = [
    {  id:1,
      title: "Mountain View",
      img:{Maaz},
      color: "Yellow", // Sky Blue
      rating: 4.8,
    },
    {  id:2,
      title: "City Lights",
      img: {Maaz},
      color: "Blue", // Golden
      rating: 4.5,
    },
    {  id:3,
      title: "Forest Trail",
      img: {Maaz},
      color: "Green", // Forest Green
      rating: 4.7,
    },
    {   id:4,
        title: "Forest Trail",
        img: {Maaz},
        color: "Green", // Forest Green
        rating: 4.7,
      },
      {  id:5,
        title: "Forest Trail",
        img: {Maaz},
        color: "Green", // Forest Green
        rating: 4.7,
      },
  ];
  
export default function Products(){
    return (
        <div className="mt-12 mb-36">
            <div>
                {/* UpperSection */}
                <div className="text-center pb-7">
                     <p className="text-orange-600"> Top Selling Products for you</p>
                     <h1 className="text-3xl font-bold ">Products</h1>
                     <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                    {/* Body */}

                <div className="container grid grid-cols-1 sm:grid-cols-5 place-items-center -gap-6  ">
                    {imageList.map((data)=>(
                     <div className="" key={data.id}>
                         <img src={Maaz} className="w-36 h-56 rounded-lg" />
                         <h1 className="text-xl font-semibold">{data.title}</h1>
                         <h1>{data.color}</h1>
                         <div className="flex">
                             <FaStar className="text-yellow-500"/> <span>{data.rating}</span>
                         </div>
                     </div>
                    ))}
                     
                </div>
            </div>
        </div >
    )
}