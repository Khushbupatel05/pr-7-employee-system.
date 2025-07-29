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

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 " >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                            return <tr key={employee.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {idx + 1}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {employee.name}
                                </th>
                                <td className="px-6 py-4">
                                    ₹ {employee.salary}
                                </td>
                                <td className="px-6 py-4">
                                    {getDepartment(Number(employee.department))}
                                </td>

                                <td className="px-6 py-4 flex gap-6">
                                    <Link to={`/edit-employee/${employee.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    <Link onClick={() => handleDelete(employee.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
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
