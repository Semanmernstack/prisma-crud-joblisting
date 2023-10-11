"use client"
import React, { useState } from 'react'
import  { SubmitButton } from './ButtonClick'

import Select from "react-select";
import { Product } from '@prisma/client';


 


function JobPage() {
    const options = [
        { value: "full time", label: "full time" },
        { value: "part time", label: "part time" },
        { value: "remote", label: "remote" },
        
         
    ]
    const [salary, setSalary] = useState("")
    const [location, setLocation ] = useState("")
    const [value, setValue] = useState("")
    const [company, setCompany] = useState("")
    const [title, setTitle ] = useState("")

    const onChange = (e: any) => {
        
        setValue(value)
    }
    

  return (
    <div>
        <form action={async(formData) => {
            await 

        }} className=' flex justify-between gap-4 cursor-pointer'>
            <div>
            
                <Select options={options} onChange={onChange} autoFocus={true}/>
               
           </div>
               
            <div className="flex w-full flex-col gap-2">
            <   input onChange={(e) => setTitle(e.target.value)} value={title} name='title' className=' p-1 border-none outline-none  bg-slate-600 hover:bg-gray-900  text-white' type="text" placeholder='title' />
                <input onChange={(e) => setCompany(e.target.value)} value={company} name='company' className=' p-1 border-none outline-none bg-teal-600 hover:bg-gray-900 text-white '  type="text" placeholder='company' />

                <input onChange={(e) => setSalary(e.target.value)} value={salary} name='salary' className=' p-1 border-none outline-none  bg-slate-600 hover:bg-gray-900  text-white' type="text" placeholder='salary' />
                <input onChange={(e) => setLocation(e.target.value)} value={location} name='location' className=' p-1 border-none outline-none bg-teal-600 hover:bg-gray-900 text-white '  type="text" placeholder='location' />
            </div>
            <SubmitButton/>
        </form> 
    </div>
  )
}

export default JobPage