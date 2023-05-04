import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styels'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  intent?: 'primary' | 'secondary',
  size?: 'sm' | 'md' | 'lg'
}

export const Button = ({ children, intent, size, ...props }: ButtonProps) => {
  return (
    <button className={S.button({ intent, size })} {...props}>
      {children}
    </button>
  )
}