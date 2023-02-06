import { theme } from 'configs/theme'
import { FC } from 'react'

export const Schedule: FC<{ active: boolean }> = ({ active }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='17'
    fill='none'
    viewBox='0 0 16 17'
  >
    <path
      fill={active ? theme.color.accent.normal : theme.color.gray.normal}
      d='M10.1 11.35c.1.1.217.15.35.15a.51.51 0 00.367-.167.559.559 0 00.175-.383.45.45 0 00-.159-.367L8.55 8.3V5.433a.486.486 0 00-.5-.483.486.486 0 00-.5.5V8.5a.49.49 0 00.033.183.664.664 0 00.1.167l2.417 2.5zM8 15.167a6.45 6.45 0 01-2.583-.525 6.761 6.761 0 01-2.125-1.434 6.761 6.761 0 01-1.434-2.125A6.45 6.45 0 011.333 8.5c0-.911.175-1.772.525-2.583.35-.811.828-1.52 1.434-2.125a6.762 6.762 0 012.125-1.434A6.45 6.45 0 018 1.833a6.45 6.45 0 012.583.525c.812.35 1.52.828 2.125 1.434a6.763 6.763 0 011.434 2.125 6.45 6.45 0 01.525 2.583 6.45 6.45 0 01-.525 2.583 6.762 6.762 0 01-1.434 2.125 6.762 6.762 0 01-2.125 1.434A6.45 6.45 0 018 15.167zm0-1c1.556 0 2.889-.556 4-1.667 1.111-1.111 1.667-2.444 1.667-4S13.11 5.611 12 4.5c-1.111-1.111-2.444-1.667-4-1.667S5.111 3.39 4 4.5c-1.111 1.111-1.667 2.444-1.667 4s.556 2.889 1.667 4c1.111 1.111 2.444 1.667 4 1.667z'
    ></path>
  </svg>
)
