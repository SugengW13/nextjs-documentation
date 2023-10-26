'use client'

import {Link} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-[600] mb-10'>
        Next.js Documentation
      </h1>

      <Link className='cursor-pointer' onClick={() => router.push('/users')}>
        To Page Users
      </Link>
    </div>
  )
}
