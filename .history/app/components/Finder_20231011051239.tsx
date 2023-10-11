"use client"
import { Product } from '@prisma/client'


import { useRouter } from 'next/navigation'
import React from 'react'
import { DeleteButton } from './DeleteJob'

import deleteJob from '../action/delete'
interface R {
    jobs: Product[]

}

function Finder({ jobs }: R) {
    const router = useRouter()
  return (
    <div className="bg-zinc-950  text-white">
         <h1 className='flex items-center justify-center'>Welcome to your job listing site</h1>
         <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 p-2'>
            {jobs.map((m) => (
                <div className='flex p-3 flex-col items-center cursor-pointer hover:opacity-2 shadow-2xl  border decoration-slate-200' key={m.id}>
                    <div className="flex text-blue-500 items-center flex-row mx-24">
                        
                            <h1 className="self-start ">{m.value}</h1>
                        
                       
                            <h2 className="self-end">{m.location}</h2> 
                       
                       
                    </div>
                    <div>
                        <h1>{m.title}</h1>
                        <h2>{m.company}</h2>
                        <h2 className="bg-green-500 text-sm w-fit p-1 rounded-lg text-black  shadow-md"> <span className='mr-1'>$</span>{m.salary}</h2>

                    </div >
                    <div className="flex self-end  gap-1 text-sm">
                        <form action={async(formData) => {await deleteJob(formData)}}>
                            <input type="hidden" name="jobId" value={m.id} id='jobId' />
                            <DeleteButton />
                        </form>
                        
                        <button onClick={() => router.push(`/jobs/${m.id}`)}>View</button>
                       
                    </div>

                </div>
                

            ))}
         </div>
    </div>
  )
}

export default Finder