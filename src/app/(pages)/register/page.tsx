'use client'

import {
  Input,
  Button
} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function PageRegister () {
  const router = useRouter()

  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <div className='w-1/3'>
        <h1 className='text-center text-4xl font-bold mb-10'>
          NextJs Documentation
        </h1>

        <h2 className='text-center text-2xl font-semibold mb-5'>
          Register
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

          <Input
            type='password'
            label='Confirm Password'
            variant='bordered'
          />

          <Button
            size='lg'
            color='primary'
            onClick={() => router.push('/users')}
          >
            Register
          </Button>

          <Button
            size='lg'
            color='primary'
            variant='bordered'
            onClick={() => router.push('/')}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}
