import Icon, { IconProps } from '../Icon'

export function DocsFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='DocsFill'
      size={size}
      className={className}
      children={
        <path d='M26 16c0-11-.833-12-10-12S6 5 6 16s.833 12 10 12 10-1 10-12zm-15.5-6a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2h-11zm-1 6a1 1 0 0 1 1-1h11a1 1 0 0 1 0 2h-11a1 1 0 0 1-1-1zm1 4a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-8z' />
      }
    />
  )
}
