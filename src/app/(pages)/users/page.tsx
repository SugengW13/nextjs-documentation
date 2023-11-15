'use client'

import {
  Input,
  Button, Skeleton
} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import CustomTable from "@/components/CustomTable";
import ModalFormUser from "@/components/ModalFormUser";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hook";
import {getItems} from "@/store/feature/user/user-slice";

export default function PageUsers () {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const userState = useAppSelector((state) => state.user)
  const users = userState.items
  const isLoading = userState.isLoading

  const [modalCreateUser, setModalCreateUser] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getItems())
  }, [])

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

        {
          isLoading
            ? <Skeleton className="rounded-xl">
                <div className="h-32"></div>
              </Skeleton>
            : <CustomTable items={users}/>
        }
      </div>
    </div>
  )
}