import { FC } from 'react'
import { StyledSkeleton } from './skeleton.styles'
import { CTSkeleton } from './skeleton.types'

export const Skeleton: FC<CTSkeleton> = ({ height, width }) => (
  <StyledSkeleton height={height} width={width} />
)
