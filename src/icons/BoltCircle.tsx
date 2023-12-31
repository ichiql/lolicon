import Icon, { IconProps } from '../Icon'

export function BoltCircleIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='BoltCircle'
      size={size}
      className={className}
      children={
        <g>
          <path d='M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z' />
          <path d='M16.75 7.532a1 1 0 0 1 .75.968v5h3a1 1 0 0 1 .874 1.486l-5 9A1 1 0 0 1 14.5 23.5v-5h-3a1 1 0 0 1-.874-1.486l5-9a1 1 0 0 1 1.125-.482zM13.2 16.5h2.3a1 1 0 0 1 1 1v2.14l2.3-4.14h-2.3a1 1 0 0 1-1-1v-2.14l-2.3 4.14z' />
        </g>
      }
    />
  )
}
