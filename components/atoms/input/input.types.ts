import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

export type TCInputOption = {
  label: string
  value: string
}

export type TCInput = {
  fill?: boolean
  icon?: string
  label?: string
  name?: string
  onChange: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >['onChange']
  onKeyDown?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >['onKeyDown']
  placeholder: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >['placeholder']
  type?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >['type']
  value: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >['value']
}
