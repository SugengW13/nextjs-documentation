'use client'

import {
  Input,
  Button
} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <div className='w-1/3'>
        <h1 className='text-center text-4xl font-bold mb-10'>
          NextJs Documentation
        </h1>

        <h2 className='text-center text-2xl font-semibold mb-5'>
          Login
        </h2>

        <div className='w-full flex flex-col gap-5'>
          <Input
            type='email'
            label='Email'
            variant='bordered'
          />

          <Input
            type='password'
            label='Password'
            variant='bordered'
          />

          <Button
            size='lg'
            color='primary'
            onClick={() => router.push('/users')}
          >
            Login
          </Button>

          <Button
            size='lg'
            color='primary'
            variant='bordered'
            onClick={() => router.push('/register')}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  )
}
