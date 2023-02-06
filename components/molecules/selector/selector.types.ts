export type CTSelector = {
  options: Array<{
    active: boolean
    disabled?: boolean
    label: string
    value: string
  }>
  onOption: (value: string) => void
}
