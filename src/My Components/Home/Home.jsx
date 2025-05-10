import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const Home = () => {

   
  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem("user"));
    if (storedName) {
      setName(storedName.name);
      setLogi(true)
      
   

    }
  }, []);

  const navg = useNavigate()
  const goHome = () =>{

 Login?  navg('/chapters'):navg('/login')

  }

  return (
    <div className="min-h-screen font-serif  text-white flex flex-col items-center justify-center text-center p-8 animate-fade-in bg-[url('./assets/Profile.jpg')] bg-cover bg-center dark:bg-black ">
      <h1 className="text-4xl font-bold mb-4">
        Welcome {}Student to the Student Buddy
      </h1>
      {  2>3? '':( <h3 className='text-red-700 font-bold'>Dear Student, Please Login</h3> ) }
      <p className="mb-6 text-lg max-w-xl ">
        The Success is not One Day Reward ,its a result of long Journey
      </p>
      <button className="px-6 py-3 bg-orange-500 rounded-xl text-lg hover:scale-105 transition-transform" onClick={goHome}>
        Begin Journey
      </button>
    </div>
  );
};

export default Home;
