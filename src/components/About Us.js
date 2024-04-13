import lion from '../images/lion.jpeg';
import tiger from '../images/tiger.jpg';
import elephant2 from '../images/elephant2.jpg';
import Fox from '../images/Fox.jpg';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function ServicesFunc() {
  const productData = [
    {
      title: 'lion',
      description: 'good lion',
      photo: lion
    },
    {
      title: 'tiger',
      description: 'good tiger',
      photo: tiger
    },
    {
      title: 'elephant2',
      description: 'good elephant2',
      photo: elephant2
    },
    {
      title: 'Fox',
      description: 'good Fox',
      photo: Fox
    },
  ]

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/user-data/')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); // Empty dependency array to run only once when component mounts

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitData = {
      title: name,
      description: description
    };
    // Handle form submission logic
  }
  
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 10000);
    return () => clearTimeout(timer);
  }, [count]);
  
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const handleSubmitUser = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/user-register/', {
      name: username,
      email: email,
      phone: phone
    }).then(function (response) {
      // Handle successful registration
    }).catch(function (error) {
      console.error('Error registering user:', error);
    });
  }
  
  return (
    <>
      <div className="flex flex-wrap p-12">
        <div className='w-full'>
          <h1 className='text-gray-900 text-2xl'>Product</h1>
          <div className='flex flex-wrap'>
            {productData.map((data, index) => (
              <div key={index} className='w-1/4'>
                <div className='m-2 p-4 grid bg-gray-200 rounded-xl'>
                  <img src={data.photo} alt={data.title} className='w-full rounded-xl' />
                  <h1 className='text-2xl font-bold'>{data.title}</h1>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='w-full'>
          {userData.map((user, index) => (
            <div key={index}>{user.name} - {user.email} - {user.phone}</div>
            ))}
          <div className='w-1/3 pt-6 '>
            <h1>User Registration</h1>
            <form onSubmit={handleSubmitUser}>
              <label>Name</label>
              <input type="text" value={username} onChange={(event) => setUserName(event.target.value)} className="w-full p-2 border-2 border-green-800" />
              <label>Phone</label>
              <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} className="w-full p-2 border-2 border-green-800" />
              <label>Email</label>
              <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full p-2 border-2 border-green-800" />
              <input type="submit" value="Submit" className="bg-green-400 px-6 py-2 my-4" />
            <button type='button' className="w-40 bg-pink-500 rounded-full fixed mt-50 ml-[82%]"> Whatsapp Us</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesFunc;
