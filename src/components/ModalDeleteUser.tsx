import React from "react";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";

interface Props {
  userName: string
  activator: React.ReactNode
  modal: boolean
  onCloseModal: () => void
  onClickConfirm: () => void
}

export default function ModalDeleteUser (props: Props) {
  return (
    <>
      {props.activator}

      <Modal
        isOpen={props.modal}
        isDismissable={false}
        onClose={props.onCloseModal}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader>
                <p>Delete User</p>
              </ModalHeader>

              <ModalBody>
                <p className='text-center'>
                  Are you sure want to delete user {props.userName}?
                </p>
              </ModalBody>

              <ModalFooter>
                <Button
                  color='primary'
                  variant='bordered'
                  onClick={props.onClickConfirm}
                >
                  Confirm
                </Button>
                <Button
                  color='primary'
                  onClick={props.onCloseModal}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}