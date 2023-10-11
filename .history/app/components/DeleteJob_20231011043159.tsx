'use client'


 
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
 
export function DeleteButton() {
  const { pending } = useFormStatus()
 
  return (
    <button type="submit" aria-disabled={pending} >
      Delete
    </button>
  )
}