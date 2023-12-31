import Icon, { IconProps } from '../Icon'

export function ForbiddenIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Forbidden'
      size={size}
      className={className}
      children={
        <g>
          <path d='M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z' />
          <path d='M7.515 24.485c-.39-.39-.43-.984-.089-1.326L23.16 7.426c.341-.341.935-.302 1.325.089.39.39.43.984.089 1.326L8.84 24.574c-.342.341-.936.302-1.326-.089z' />
        </g>
      }
    />
  )
}
