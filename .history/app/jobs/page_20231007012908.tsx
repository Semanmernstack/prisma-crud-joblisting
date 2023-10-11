import React from 'react'
import JobPage from '../components/JobPage'
import { prisma } from "@/prisma/prismadb"
import Finder from '../components/Finder'


async function page() {
    const findJob = await prisma.product.findMany({})
  return (
    <div className="mx-auto max-w-5xl ">
       
        <Finder jobs= {findJob}/>
    </div>
  )
}

export default page