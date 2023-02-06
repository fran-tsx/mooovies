import { FC } from 'react'
import { StyledButton } from './button.styles'
import { CTButton } from './button.types'
import Link, { LinkProps } from 'next/link'

export const Button: FC<CTButton> = ({
  children,
  disabled = false,
  fill = false,
  fourth,
  link,
  onClick,
  rel,
  secondary,
  styles,
  target,
  tertiary,
  type = 'button',
  ...props
}) => {
  if (link) {
    return (
      <Link
        {...link}
        href={disabled ? '' : typeof link === 'string' ? link : link.href}
        passHref
      >
        <StyledButton
          as='a'
          disabled={disabled}
          $fill={fill}
          fourth={fourth}
          onClick={onClick}
          rel={rel || '_self'}
          secondary={secondary}
          styles={styles}
          target={target}
          tertiary={tertiary}
          {...props}
        >
          {children}
        </StyledButton>
      </Link>
    )
  } else {
    return (
      <StyledButton
        disabled={disabled}
        $fill={fill}
        fourth={fourth}
        onClick={onClick}
        secondary={secondary}
        styles={styles}
        tertiary={tertiary}
        type={type}
        {...props}
      >
        {children}
      </StyledButton>
    )
  }
}
