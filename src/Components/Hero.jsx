import Maaz from "../Images/Maaz.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Fix: Remove curly braces around `Maaz` inside `image`
let imageList = [
  {
    title: "Mountain View",
    description: "A beautiful view of the mountains during sunrise.",
    image: Maaz,
  },
  {
    title: "City Lights",
    description: "Skyscrapers glowing in the night with vibrant city life.",
    image: Maaz,
  },
  {
    title: "Forest Trail",
    description: "A peaceful trail surrounded by tall green trees.",
    image: Maaz,
  },
];

export default function Hero() {
  const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
  };
  

  return (
    <div className="w-full h-screen bg-slate-400 min-h-[550px] relative pt-5 -z-10 overflow-hidden">
      <div className="absolute bg-primary/70 w-[650px] h-[650px] rounded-3xl rotate-45 bottom-[250px] left-[650px]">

      </div>
      <div className="container ">
        <Slider {...settings}>
        {imageList.map((item, index) => (
          <div key={index} className="w-full h-screen">
            <div className="flex flex-col md:flex-row w-full h-full p-8 gap-8">
              
              {/* Right Side - Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10">
                <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                <p className="text-lg mb-6">{item.description}</p>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-2xl hover:bg-orange-500 text-lg">
                  Order Now
                </button>
              </div>

              {/* Left Side - Image */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[400px] h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}
