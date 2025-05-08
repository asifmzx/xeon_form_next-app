"use client";

import { useEffect, useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";

const EmployeeGrid = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("employees");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setEmployees(parsedData);
        }
    }, []);

    const handleDelete = (index) => {
        const updatedEmployees = employees.filter((_, i) => i !== index);
        setEmployees(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }

    return (
        <div className="w-full px-3">
            {employees.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {employees.map((employee, index) => (
                        <div key={employee.phone} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                            <div className="grid grid-cols-2 gap-2 mb-3">
                                <div className="font-semibold">First Name:</div>
                                <div>{employee.first_name}</div>

                                <div className="font-semibold">Last Name:</div>
                                <div>{employee.last_name}</div>

                                <div className="font-semibold">Email:</div>
                                <div className="break-all">{employee.email}</div>

                                <div className="font-semibold">Phone:</div>
                                <div>{employee.phone}</div>

                                <div className="font-semibold">Degree:</div>
                                <div>{employee.degree}</div>

                                <div className="font-semibold">Start Year:</div>
                                <div>{employee.start_year}</div>

                                <div className="font-semibold">LinkedIn:</div>
                                <div className="break-all">{employee.linkedin}</div>

                                <div className="font-semibold">Source:</div>
                                <div>{employee.source}</div>

                                <div className="font-semibold">Programming Language:</div>
                                <div>{employee.prolang}</div>

                                <div className="font-semibold">CV:</div>
                                <div className="text-xs break-all">{employee.CV}</div>
                            </div>

                            <div className="flex justify-end gap-3 mt-2">
                                <button className="text-blue-500 hover:text-blue-700">
                                    <FaRegEdit size={18} />
                                </button>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDelete(index)}
                                >
                                    <FaTrash size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-4xl text-red-500 py-10">
                    No Job Applied Request found
                </div>
            )}
        </div>
    );
};

export default EmployeeGrid;