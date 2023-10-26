'use client'

import {Link} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import CustomTable from "@/components/CustomTable";

export default function PageUsers () {
  const router = useRouter()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-[600] mb-10'>
        Page Users
      </h1>

      <Link className='cursor-pointer mb-10' onClick={() => router.back()}>
        Back
      </Link>

      <div className='w-1/3'>
        <CustomTable/>
      </div>
    </div>
  )
}