import { Product } from '@prisma/client'
import React from 'react'
interface R {
    jobs: Product[]

}

function Finder({ jobs }: R) {
  return (
    <div className="bg-zinc-950 text-white">
         <h1>Welcome to your job listing site</h1>
         <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2'>
            {jobs.map((m) => (
                <div className='flex border decoration-slate-200' key={m.id}>
                    <div>
                        <h1>{m.value}</h1>
                        <h2>{m.location}</h2>
                    </div>
                    <div>
                        <h1>{m.title}</h1>
                        <h2>{m.company}</h2>
                        <h2>{m.salary}</h2>

                    </div>
                    <p>Delete</p>
                    <p>View job</p>

                </div>
                

            ))}
         </div>
    </div>
  )
}

export default Finder