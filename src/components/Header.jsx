import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handlelogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", JSON.stringify(false))
        navigate('/')
    }

    return (
        <>
            <header className='shadow-sm bg-[#f9ffff] absolute w-full'>
                <div className='container mx-auto px-4 border border-none '>
                    <nav className="flex items-center justify-between py-4">
                        <Link to={'/'}>
                            <img src="img/logo.png" alt="logo" className="w-[130px]" />
                        </Link>

                        <ul className="hidden md:flex items-center space-x-8">
                            <li>
                                <Link to={'/'} className={`${pathname == "/" ? "text-teal-600 font-semibold" : "text-gray-800 hover:text-teal-600"} transition-all duration-200`}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/Services'} className={`${pathname == "/Services" ? "text-teal-600 font-semibold" : "text-gray-800 hover:text-teal-600"} transition-all duration-200`}>Services</Link>
                            </li>
                            <li>
                                <Link to={'/Contact'} className={`${pathname == "/Contact" ? "text-teal-600 font-semibold" : "text-gray-800 hover:text-teal-600"} transition-all duration-200`}>Contact</Link>
                            </li>
                            {
                                isLoggedIn &&
                                <li>
                                    <Link to={'/employees'} className={`${pathname == "/employees" || pathname == '/add-employee' || pathname.includes("/edit-employee") ? "text-teal-600 font-semibold" : "text-gray-800 hover:text-teal-600"} transition-all duration-200`}>Employees</Link>
                                </li>
                            }
                        </ul>

                        {
                            isLoggedIn
                                ? <button onClick={handlelogout} type="button" className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium px-6 py-2 rounded-md transition-all duration-300">Logout</button>
                                : <button onClick={() => navigate("/login")} type="button" className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium px-6 py-2 rounded-md transition-all duration-300">Login</button>
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
