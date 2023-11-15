'use client'

import {
  Input,
  Button
} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import CustomTable from "@/components/CustomTable";
import ModalFormUser from "@/components/ModalFormUser";
import {useState} from "react";

export default function PageUsers () {
  const router = useRouter()

  const [modalCreateUser, setModalCreateUser] = useState<boolean>(false)

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center'>
      <div className='w-1/3'>
        <div className='flex justify-center relative mb-10'>
          <h1 className='text-4xl font-bold'>
            Page Users
          </h1>

          <Button
            color='danger'
            variant='bordered'
            className='absolute right-0'
            onClick={() => router.back()}
          >
            Logout
          </Button>
        </div>

        <div className='mb-5 flex flex-col gap-5'>
          <Input label='Search' />
          <ModalFormUser
            title='Create User'
            modal={modalCreateUser}
            onCloseModal={() => setModalCreateUser(false)}
            onClickConfirm={() => setModalCreateUser(false)}
            activator={(
              <Button
                size='lg'
                color='primary'
                onClick={() => setModalCreateUser(true)}
              >
                Add User
              </Button>
            )}
          />
        </div>
        <CustomTable/>
      </div>
    </div>
  )
}