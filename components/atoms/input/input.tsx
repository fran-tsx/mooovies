import { FC } from 'react'
import { Box, Icon, StyledInput, Value } from './input.styles'
import { TCInput } from './input.types'

export const Input: FC<TCInput> = ({
  fill,
  icon,
  label,
  name,
  onChange,
  onKeyDown,
  placeholder,
  type = 'text',
  value,
}) => (
  <StyledInput $fill={fill}>
    {label}
    <Box>
      <Icon alt='Input icon' aria-hidden src={icon} />
      <Value
        name={name || label}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </Box>
  </StyledInput>
)
