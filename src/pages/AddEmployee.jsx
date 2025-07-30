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
        <div className="min-h-screen bg-[#dcf3f0] flex items-center justify-center px-4">
            <div className="w-full max-w-5xl bg-white rounded-lg flex flex-col lg:flex-row items-center p-6 gap-8">
                <div className="w-full lg:w-1/2">
                    <img src="/img/add.svg" alt="Add Employee" className="w-full h-auto object-contain" />
                </div>
                <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-5">
                    <h1 className="text-3xl text-teal-700 font-bold ">Add Employee...</h1>
                    
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Employee name</label>
                        <input type="text" id="name" onChange={handleChange} value={input.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="John" required />
                    </div>

                    <div>
                        <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900">Salary</label>
                        <input type="number" id="salary" onChange={handleChange} value={input.salary} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="10000" required />
                    </div>

                    <div>
                        <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                        <select id="department" onChange={handleChange} value={input.department} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" required>
                            <option value="">Select Department</option>
                            <option value={1}>Development</option>
                            <option value={2}>Designing</option>
                            <option value={3}>Finance</option>
                            <option value={4}>Marketing</option>
                        </select>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="text-white bg-teal-700 hover:bg-teal-600 focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 font-medium rounded text-sm px-9 py-2 transition-all duration-300 w-full ">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEmployee
