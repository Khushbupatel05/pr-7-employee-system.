import { useNavigate } from 'react-router-dom'
import EmployeeTable from '../components/EmployeeTable';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Employees = () => {
    const [employees, setEmployees] = useState([])
    const [allEmployees, setAllEmployees] = useState([]); // ✅ To store original data
    const [search, setSearch] = useState({ name: "", department: "" });

    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
        setAllEmployees(data); // ✅ Keep original data for search
    }, []);

    const deleteEmployee = (id) => {
        const updatedEmployee = employees.filter(emp => emp.id !== id);
        setEmployees(updatedEmployee);
        setAllEmployees(updatedEmployee);
        localStorage.setItem("employees", JSON.stringify(updatedEmployee));
        toast.success("Employee Deleted Successfully");
    }

    const handleSearch = (e) => {
        const value = e.target.value;
        const key = e.target.id;
        const newSearch = { ...search, [key]: value };
        setSearch(newSearch);

        const filtered = allEmployees.filter((emp) => {
            const matchesName = emp.name.toLowerCase().includes(newSearch.name.toLowerCase());
            const matchesDept = newSearch.department === "" || emp.department === newSearch.department;
            return matchesName && matchesDept;
        });

        setEmployees(filtered);
    }

    return (
        <>
            <section className="pt-[93px] bg-[#f9fafb] min-h-screen" >
                <div className='container mx-auto'>
                    <div className='flex justify-between '>
                        <h1 className='text-3xl font-semibold text-teal-800 my-5'>Emplyees Data</h1>
                        <div className='flex items-center  gap-3 flex-wrap'>

                            <select onChange={handleSearch} value={search.department} id="department"
                                className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-teal-500 focus:border-teal-500 px-4 py-2">
                                <option value="">All Departments</option>
                                <option value="1">Development</option>
                                <option value="2">Designing</option>
                                <option value="3">Finance</option>
                                <option value="4">Marketing</option>
                            </select>

                            <input type="text" placeholder="Search Name" value={search.name}
                                id="name" onChange={handleSearch} className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-teal-500 focus:border-teal-500 px-4 py-2 w-full md:w-[200px]" />

                            <button onClick={() => navigate('/add-employee')} type="button" className="text-white bg-teal-700 hover:bg-teal-400 ring-slate-200 focus:ring-1 font-medium rounded-sm text-sm px-9 py-2 text-center transition-all duration-300">+ Add Employee</button>
                        </div>

                    </div>
                        {
                            employees.length !== 0
                                ? <EmployeeTable employees={employees} setEmployees={setEmployees} deleteEmployee={deleteEmployee} />
                                : <div className='items-center flex justify-center'>
                                    <img src="/img/noData.webp" alt="no-data" className="w-[700px]" />
                                </div>
                        }

                </div>
            </section>
        </>
    )
}

export default Employees
