import React from 'react'
import { prisma } from "@/prisma/prismadb"


async function idComp({params}: {params: {id:string}}) {
    const jobs = await prisma.product.findUnique({
        where: {
            id: params.id
        }
    })
  return (
    
    <div>
        <h2>hh</h2>

    </div>
  )
}

export default idComp