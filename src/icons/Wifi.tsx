import Icon, { IconProps } from '../Icon'

export function WifiIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Wifi'
      size={size}
      className={className}
      children={
        <g>
          <path d='M17.314 23a2 2 0 1 0-2.828-2.828A2 2 0 0 0 17.314 23z' />
          <path d='M5.293 13.808a1 1 0 0 1 0-1.415c5.858-5.857 15.355-5.857 21.213 0a1 1 0 0 1-1.414 1.415c-5.077-5.077-13.308-5.077-18.385 0a1 1 0 0 1-1.414 0z' />
          <path d='M9.536 18.05a1 1 0 0 1 0-1.414 9 9 0 0 1 12.728 0 1 1 0 0 1-1.415 1.414 7 7 0 0 0-9.9 0 1 1 0 0 1-1.413 0z' />
        </g>
      }
    />
  )
}
