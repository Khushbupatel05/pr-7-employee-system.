import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddEmployee = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: '', salary: '', department: '',
    })
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const employeeData = { id: Date.now(), ...input }
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employeeData);

        localStorage.setItem("employees", JSON.stringify(employees))
        setInput({ name: '', salary: '', department: '' })
        navigate('/employees')
    }
    return (
        <div className="container mx-auto">
            <form onSubmit={handleSubmit} className=" max-w-sm mx-auto py-[60px] ">
                <div className="flex items-center justify-between ">
                    <h1 className="text-2xl text-center font-bold">Add Employee...</h1>
                </div>
                <div className="my-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee name</label>
                        <input type="text" id="name" onChange={handleChange} value={input.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                    </div>
                    <div className="my-5">
                        <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                        <input type="number" id="salary" onChange={handleChange} value={input.salary} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        " placeholder="10000" required />
                    </div>
                    <div>
                        <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                        <select id="department" onChange={handleChange} value={input.department} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Select Department</option>
                            <option value={1}>Development</option>
                            <option value={2}>Designing</option>
                            <option value={3}>Finanace</option>
                            <option value={4}>Marketing</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button onClick={() => navigate('/add-employee')} type="Submit" className="text-white bg-teal-700 hover:bg-teal-400 ring-slate-200 focus:ring-1 font-medium rounded-sm text-sm px-9 py-2 text-center transition-all duration-300">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddEmployee
