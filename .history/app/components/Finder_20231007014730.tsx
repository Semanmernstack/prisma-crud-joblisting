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
                <div className='flex flex-col items-center  border decoration-slate-200' key={m.id}>
                    <div className="flex p-3 items-center justify-around">
                        <h1>{m.value}</h1>
                        <h2>{m.location}</h2>
                    </div>
                    <div>
                        <h1>{m.title}</h1>
                        <h2>{m.company}</h2>
                        <h2>{m.salary}</h2>

                    </div >
                    <div className="flex left-2">
                        <p>Delete</p>
                        <p>View job</p>
                    </div>

                </div>
                

            ))}
         </div>
    </div>
  )
}

export default Finder