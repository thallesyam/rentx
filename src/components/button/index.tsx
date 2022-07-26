import { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function Button(props: Props) {
  const { children } = props

  return <button {...props}>{children}</button>
}
