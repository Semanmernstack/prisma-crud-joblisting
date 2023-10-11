import { Product } from '@prisma/client'
import React from 'react'
interface R {
    jobs: Product[]

}

function Finder({ jobs }: R) {
  return (
    <div>
         <h1>Welcome to your job listing site</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs.map((m) => (
                <div key={m.id}>
                    <h1>{m.location}</h1>

                </div>
                

            ))}
         </div>
    </div>
  )
}

export default Finder