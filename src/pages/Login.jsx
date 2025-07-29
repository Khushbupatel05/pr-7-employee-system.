import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({setIsLoggedIn}) => { 
  const [input, setInput] = useState({ email: "", password: "" });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(input.email == "admin@gmail.com" && input.password == "admin@123"){
      setIsLoggedIn(true)
      localStorage.setItem("isLoggedin", JSON.stringify(true));
      toast.success("Admin Logged In Successfully.")
      Navigate('/employees')
    }else{
      toast.error("Invalid UserName Or Password...")
    }
  }

  return (
   <section  className="">
      <div className=" justify-center min-h-screen bg-[#dcf3f0] flex items-center  md:h-[90vh]  p-3">
        <div className="w-full bg-white rounded-xl shadow-md sm:max-w-md p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">sign in to your account</h1>
          <form  className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-900"> Username or email </label>
              <input onChange={handleChange}  type="email" name="email" id="email"  placeholder="Username or email" className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-sm block w-full p-2 focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-900"> Password </label>
              <input onChange={handleChange}  type="password" name="password" id="password" placeholder="Password" className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-sm block w-full p-2 focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <button type="submit"  className="w-full bg-[#1ca593] hover:bg-[#32756c] text-white text-sm font-semibold py-3 rounded-sm transition-all duration-300" >
              Log In
            </button >
          </form>
        </div>
      </div>
    </section>
  );
};


export default Login