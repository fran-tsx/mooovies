import { Button } from '@atoms/button/button'
import { FC } from 'react'
import { customStyledButton, StyledSelector } from './selector.styles'
import { CTSelector } from './selector.types'

export const Selector: FC<CTSelector> = ({ options, onOption }) => (
  <StyledSelector>
    {options.map(({ active, disabled, label, value }) => (
      <Button
        disabled={disabled}
        fourth
        key={value}
        onClick={() => onOption(value)}
        styles={customStyledButton(active)}
      >
        {label}
      </Button>
    ))}
  </StyledSelector>
)
