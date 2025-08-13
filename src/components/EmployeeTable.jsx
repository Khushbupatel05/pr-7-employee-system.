import React from 'react'
import Employees from '../pages/Employees'
import { Link } from 'react-router-dom'

const EmployeeTable = ({ employees , deleteEmployee}) => {

    const getDepartment = (id) => {
        switch (id) {
            case 1:
                return "Development"
            case 2:
                return "Designing"
            case 3:
                return "Finanace"
            case 4:
                return "Marketing"
        }
    }

    const handleDelete = (id) => {
        deleteEmployee(id)
    }

    return (
        <div className="relative overflow-x-auto shadow-lg rounded-2xl ring-1  ring-gray-200 bg-white">
            <table className="w-full text-sm text-left text-gray-700 ">
                <thead className="text-sm text-gray-800 uppercase bg-gray-100 border-b border-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Employee Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Employee Salary
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Department
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, idx) => {
                            return <tr key={employee.id} className="hover:bg-teal-50 border-b border-gray-100 transition-all duration-300">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {idx + 1}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {employee.name}
                                </th>
                                <td className="px-6 py-4">
                                    ₹{Number(employee.salary).toLocaleString()}
                                </td>
                                <td className="px-6 py-4">
                                    {getDepartment(Number(employee.department))}
                                </td>
                                <td className="px-6 py-4 flex gap-6">
                                    <Link to={`/edit-employee/${employee.id}`} className="text-sm font-semibold text-teal-600 hover:text-teal-800 hover:underline">Edit</Link>
                                    <Link onClick={() => handleDelete(employee.id)} className="text-sm font-semibold text-rose-600 hover:text-rose-800 hover:underline">Delete</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable
