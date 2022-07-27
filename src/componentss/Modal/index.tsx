import { ReactNode } from 'react'
import ReactModal from 'react-modal'

type Props = {
  isOpen: boolean
  children: ReactNode
  className?: string
}

export function Modal({ isOpen, children, ...rest }: Props) {
  return (
    <ReactModal isOpen={isOpen} {...rest}>
      {children}
    </ReactModal>
  )
}
