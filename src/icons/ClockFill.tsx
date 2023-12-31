import Icon, { IconProps } from '../Icon'

export function ClockFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='ClockFill'
      size={size}
      className={className}
      children={
        <path d='M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zm-13.34.201a.997.997 0 0 1-.02-.201V9a1 1 0 0 1 2 0v6.425l4.696 2.711a1 1 0 0 1-1 1.732l-5.196-3a.998.998 0 0 1-.48-.667z' />
      }
    />
  )
}
