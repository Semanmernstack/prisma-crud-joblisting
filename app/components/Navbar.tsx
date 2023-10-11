import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="flex cursor-pointer xs:flex-col gap-3 justify-around text-white items-center opacity-2 shadow-2xl p-10 bg-gray-800">
      <Link href={'/'}>
        <p>SemanJob</p>
      </Link>
       
      <Link href={'/jobPost'}>
        <p>Post a job</p>
      </Link>
      </div>
    </div>
  )
}

export default Navbar