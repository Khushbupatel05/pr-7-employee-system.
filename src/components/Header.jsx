
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
            <header className=' '>
                <div className='container mx-auto px-4 '>
                    <nav className="">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <Link to={'/'}>
                                <img src="img/logo.png" alt="logo" />
                            </Link>

                            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <Link to={'/'} className={`${pathname =="/" ? "text-teal-700" : "text-gray-900 hover:text-teal-700"}`} >Home</Link>
                                    </li>

                                    <li>
                                        <Link to={'/Services'} className={`${pathname =="/" ? "text-teal-700" : "text-gray-900 hover:text-teal-700"}`} >Services</Link>
                                    </li>

                                    <li>
                                        <Link to={'/Contact'} className={`${pathname =="/" ? "text-teal-700" : "text-gray-900 hover:text-teal-700"}`} >Contact</Link>
                                    </li>
                                    {
                                        isLoggedIn && <Link to={'/employees'} className={`${pathname =="/employees" || pathname == '/add-employee' || pathname.includes("/edit-employee") ? "text-teal-700" : "text-gray-900 hover:text-teal-700"}`} >Employees</Link>
                                    }
                                </ul>
                            </div>
                            {
                                isLoggedIn ? <button onClick={handlelogout} type="button" className="text-white bg-teal-700 hover:bg-teal-400 ring-slate-200 focus:ring-1 font-medium rounded-sm text-sm px-9 py-2 text-center transition-all duration-300">Logout</button>
                                    : <button onClick={() => {
                                        navigate("/login")
                                    }} type="button" className="text-white bg-teal-700 hover:bg-teal-400 ring-slate-200 focus:ring-1 font-medium rounded-sm text-sm px-9 py-2 text-center transition-all duration-300">Login</button>
                            }
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header