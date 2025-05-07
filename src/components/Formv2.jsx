"use client"
import { useState } from "react";

export default function Formv2() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    name: "",
    email: "",
    phone: "",
    CV: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const existingData = JSON.parse(localStorage.getItem("employees")) || [];
    existingData.map((employees, index) => {
      console.log(employees.first_name);
    });
    console.log(existingData[0].phone = data);
    existingData.push(formData);
    localStorage.setItem("employees", JSON.stringify(existingData));
  };



  return (
    <div className="flex flex-col w-[45%] mt-[5%] isolate mx-auto p-6 bg-white/10 rounded-xl shadow-lg ring-1 ">
      <h2 className="flex justify-center text-[#c2cc33] text-3xl font-bold mb-6">
        Apply for this job
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex flex-row justify-between space-x-4 w-full">
          <div className="w-full">
            <label htmlFor="first_name" className="text-xl font-medium">
              <span>First Name</span><span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="w-full">
            <label htmlFor="last_name" className="text-xl font-medium">
              <span>Last Name</span><span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-xl font-medium">
            Email
          </label>
          <label className="text-red-500 font-medium">*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* <div>
          <label htmlFor="password" className="text-xl font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div> */}

        <div>
          <label htmlFor="phone" className="text-xl font-medium">
            Phone
          </label>
          <label htmlFor="phone" className="text-xl font-medium text-red-500">
            *
          </label>
          <input type="tel" id="phone" name="phone" placeholder="01*********" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required />
        </div>

        <div>
          <label htmlFor="CV" className="text-xl font-medium">
            Resume/CV (Manually)
          </label>
          <label htmlFor="CV" className="text-xl font-medium text-red-500">
            *
          </label>
          <textarea
            id="CV"
            name="CV"
            rows="4"
            value={formData.CV}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="Education" className="text-xl font-medium">Education</label>
          {/* EDUCTAION -> Degree*/}
          <div className="mt-2 flex flex-row w-full justify-between gap-4">
            <div className="w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <label className="block text-sm font-medium">
                <span className="font-bold">Degree</span><span className="text-red-500">*</span>
              </label>
              <select
                className="w-full block focus:outline-none"
              >
                <option value="" >Select...</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            {/* EDUCTAION -> Date */}
            <div className="w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <label className="block text-sm font-medium">
                <span className="font-bold">Start date year</span><span className="text-red-500">*</span>
              </label>
              <input type="number" min={1950} max={2025} required className="w-full block focus:outline-none" placeholder="1960" />
            </div>
          </div>
          <div className="mt-2"></div>
          <a href="" className=" text-blue-500 underline">Add another</a>
        </div>

        <div className="w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          <label className="block text-sm font-medium">
            <span className="font-bold">Source (ZipRecruiter, Indeed, LinkedIn etc.)</span><span className="text-red-500">*</span>
          </label>
          <input type="text" className="w-full block focus:outline-none" />
        </div>

        <div className="w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          <label className="block text-sm font-medium">
            <span className="font-bold">LinkedIn profile link</span>
          </label>
          <input type="text" className="w-full block focus:outline-none" />
        </div>

        <div className="w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
          <label className="block text-sm font-medium">
            <span className="font-bold">Have you learned or worked with at least two programming languages?</span><span className="text-red-500">*</span>
          </label>
          <select className="w-full block focus:outline-none">
            <option name="ProLang">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>


        <div>
          <button
            type="submit"
            className="w-50 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-500 hover:bg-[#c2cc33] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Application
          </button>
        </div>

      </form>
    </div>
  );
}