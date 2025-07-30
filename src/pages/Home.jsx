import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#dcf3f0] flex items-center ">
      <div className="container mx-auto px-6 py-11 mt-11  flex flex-col-reverse lg:flex-row items-center gap-8">  
        <div className="lg:w-[48%] space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Get Creative & <br />
            Modern With <span className="text-teal-600">Upcover</span>
          </h1>
          <p className="text-gray-500 text-lg">
            This is just a simple text made for this unique and awesome template,
            you can replace it with any text.
          </p>
          <div>
            <button
              onClick={() => navigate('/contact')}
              className="bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium px-6 py-3 rounded-md transition-all"
            >
              Contact Us →
            </button>
          </div>
        </div>

        <div className="lg:w-[52%]">
          <img src='img/hero-img.svg'  alt="Hero Illustration"  className="w-full max-w-[550px] mx-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Home;
