import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@nextui-org/react";
import ModalFormUser from "@/components/ModalFormUser";
import ModalDeleteUser from "@/components/ModalDeleteUser";
import {useState} from "react";

export default function CustomTable () {
  const [modalUpdateUser, setModalUpdateUser] = useState<boolean[]>([])
  const [modalDeleteUser, setModalDeleteUser] = useState<boolean[]>([])

  const users = [
    { name: 'Sugeng', age: 22 },
    { name: 'Warsito', age: 22 },
    { name: 'Eivor', age: 29 }
  ]

  const setStateModalUpdate = (index: number, isOpen: boolean) => {
    const modalStates = [...modalUpdateUser]
    modalStates[index] = isOpen
    setModalUpdateUser([...modalStates])
  }

  const setStateModalDelete = (index: number, isOpen: boolean) => {
    const modalStates = [...modalDeleteUser]
    modalStates[index] = isOpen
    setModalDeleteUser([...modalStates])
  }

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Age</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody>
        {(
          users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age} Years Old</TableCell>
              <TableCell>
                <div className='flex gap-3'>
                  <ModalFormUser
                    title='Update User'
                    modal={modalUpdateUser[index]}
                    onClickConfirm={() => setStateModalUpdate(index, false)}
                    onCloseModal={() => setStateModalUpdate(index, false)}
                    activator={(
                      <Button
                        color='primary'
                        onClick={() => setStateModalUpdate(index, true)}
                      >
                        Update
                      </Button>
                    )}
                  />
                  <ModalDeleteUser
                    userName={user.name}
                    modal={modalDeleteUser[index]}
                    onClickConfirm={() => setStateModalDelete(index, false)}
                    onCloseModal={() => setStateModalDelete(index, false)}
                    activator={(
                      <Button
                        color='danger'
                        onClick={() => setStateModalDelete(index, true)}
                      >
                        Delete
                      </Button>
                    )}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}