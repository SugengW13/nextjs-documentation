import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@nextui-org/react";

export default function CustomTable () {
  const users = [
    { name: 'Sugeng', age: 22 },
    { name: 'Warsito', age: 22 },
    { name: 'Eivor', age: 29 }
  ]

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
              <TableCell >
                <div className='flex gap-3'>
                  <Button color='success'>Update</Button>
                  <Button color='danger'>Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}