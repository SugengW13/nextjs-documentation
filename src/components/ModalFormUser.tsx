'use client'

import {
  Input,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@nextui-org/react";
import React from "react";

interface Props {
  title: string
  activator: React.ReactNode
  modal: boolean
  onCloseModal: () => void
  onClickConfirm: () => void
}

export default function ModalFormUser (props: Props) {
  return (
    <>
      { props.activator }

      <Modal
        isOpen={props.modal}
        isDismissable={false}
        onClose={props.onCloseModal}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader>
                <p>{props.title}</p>
              </ModalHeader>

              <ModalBody>
                <Input type='text' label='Name' />
                <Input type='number' label='Age' />
              </ModalBody>

              <ModalFooter>
                <Button
                  color='primary'
                  onClick={props.onClickConfirm}
                >
                  Confirm
                </Button>
                <Button
                  color='primary'
                  variant='bordered'
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