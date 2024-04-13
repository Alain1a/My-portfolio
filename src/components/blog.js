import React, { useState } from 'react';
import data from '../components/data';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Blog() {
  const [noOfElement, setNoOfElement] = useState(4);

  const showMore = () => {
    setNoOfElement(prevCount => prevCount + 4); 
  };

  const slicedData = data.carddata.slice(0, noOfElement);

  return (
    <>

      <div className="container mx-auto flex flex-wrap justify-center mt-8 mt-1" >
        {slicedData.map((item, index) => (
          <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4 mt-40">
            <img src={item.photo} alt={item.title} className="w-full h-56 object-cover" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
              <button type='button' className="w-40 bg-pink-500 rounded-full fixed mt-50 ml-[83%]"> Whatsapp Us</button>


            </div>
          </div>
        ))}

      </div>
      <button onClick={showMore} className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4 ml-20">
        Show More
      </button>
    </>
  );
}

export default Blog;
