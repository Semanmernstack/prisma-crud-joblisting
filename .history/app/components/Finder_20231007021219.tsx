import { Product } from '@prisma/client'
import React from 'react'
interface R {
    jobs: Product[]

}

function Finder({ jobs }: R) {
  return (
    <div className="bg-zinc-950 text-white">
         <h1>Welcome to your job listing site</h1>
         <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 p-2'>
            {jobs.map((m) => (
                <div className='flex p-3 flex-col items-center cursor-pointer hover:opacity-2 shadow-2xl  border decoration-slate-200' key={m.id}>
                    <div className="flex text-blue-500 items-center gap-40">
                        
                            <h1 className=" ">{m.value}</h1>
                        
                       
                            <h2 className="">{m.location}</h2> 
                       
                       
                    </div>
                    <div>
                        <h1>{m.title}</h1>
                        <h2>{m.company}</h2>
                        <h2 className="bg-green-500 text-sm w-fit text-black  shadow-md"> <span className='mr-1'>$</span>{m.salary}</h2>

                    </div >
                    <div className="flex self-end  gap-1 text-sm">
                        <p>Delete</p>
                        <p>View</p>
                    </div>

                </div>
                

            ))}
         </div>
    </div>
  )
}

export default Finder