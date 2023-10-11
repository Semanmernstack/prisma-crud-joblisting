import React from 'react'
import { prisma } from "@/prisma/prismadb"

async function page({params}: {params: {id:string}}) {
    const jobs = await prisma.product.findUnique({
        where: {
            id: params.id
        }
    }) 
  return (

    <div>
        <div>
            <h1>{jobs?.title}</h1>
            <p>lorem 300</p>
        </div>
       
    </div>
  )
}

export default page