import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: '', salary: '', department: '',
    })

    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const empData = employees.find((emp) => emp.id == id);

        if (empData) {
            setInput(empData)
        } else {
            toast.error("No employee Found with This ID");
            navigate("/employees");
        }

    }, [id]);

    const handleChange = (e) => {       
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (input.name.trim() === "" || input.salary.trim() === "" || input.department === "") {
        toast.error("Please fill all fields correctly");
        return;
        }

        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const updatedEmployee = employees.map((emp) => {
            return emp.id == id ? {
                ...emp, ...input
            } : emp;
        });

        localStorage.setItem("employees", JSON.stringify(updatedEmployee));
        toast.success("Emplyee data Uppdated Successfully")
        setInput({ name: '', salary: '', department: '', })
        navigate('/employees');
    }


   return (
    <div className="min-h-screen bg-[#dcf3f0] flex items-center justify-center">
        <form onSubmit={handleUpdate} className="w-full max-w-lg bg-white shadow-md rounded-md p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-center text-teal-700">Edit Employee</h1>
            </div>
            <div className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">Employee Name</label>
                    <input type="text" id="name" onChange={handleChange} value={input.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-teal-500 focus:border-teal-500 block w-full p-3" placeholder="John" required />
                </div>
                <div>
                    <label htmlFor="salary" className="block mb-2 text-sm font-semibold text-gray-700">Salary</label>
                    <input type="number" id="salary" onChange={handleChange} value={input.salary} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-teal-500 focus:border-teal-500 block w-full p-3" placeholder="10000" required />
                </div>
                <div>
                    <label htmlFor="department" className="block mb-2 text-sm font-semibold text-gray-700">Department</label>
                    <select id="department" onChange={handleChange} value={input.department} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-teal-500 focus:border-teal-500 block w-full p-3">
                        <option value="">Select Department</option>
                        <option value={1}>Development</option>
                        <option value={2}>Designing</option>
                        <option value={3}>Finanace</option>
                        <option value={4}>Marketing</option>
                    </select>
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <button type="submit" className="text-white bg-teal-700 hover:bg-teal-500 focus:ring-2 focus:ring-teal-300 font-medium rounded-md text-sm px-8 py-2 transition duration-200">Update</button>
            </div>
        </form>
    </div>
);

}

export default EditEmployee