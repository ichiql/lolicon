import Icon, { IconProps } from '../Icon'

export function MehIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Meh'
      size={size}
      className={className}
      children={
        <g>
          <path d='M26 15.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-17.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM23 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
          <path d='M11 20c0-.552.414-1 .923-1h8.154c.51 0 .923.448.923 1s-.413 1-.923 1h-8.154c-.51 0-.923-.448-.923-1z' />
        </g>
      }
    />
  )
}
