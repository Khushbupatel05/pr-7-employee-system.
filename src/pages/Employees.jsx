import { useNavigate } from 'react-router-dom'
import EmployeeTable from '../components/EmployeeTable';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Employees = () => {
    const [employees, setEmployees] = useState([])
    
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
    }, []);

    const deleteEmployee = (id) => {
    const updatedEmployee = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmployee);
    localStorage.setItem("employees", JSON.stringify(updatedEmployee));
    toast.success("Employee Deleted Successfully");
}

    return (
        <>
            <section className="pt-[93px] bg-[#f9fafb] min-h-screen" >
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-3xl font-semibold text-teal-800 my-5'>Emplyees Data</h1>
                        <button onClick={() => navigate('/add-employee')} type="button" className="text-white bg-teal-700 hover:bg-teal-400 ring-slate-200 focus:ring-1 font-medium rounded-sm text-sm px-9 py-2 text-center transition-all duration-300">+ Add Employee</button>
                    </div>
                    <div>
                        <EmployeeTable  employees={employees} deleteEmployee={deleteEmployee}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Employees