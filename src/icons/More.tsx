import Icon, { IconProps } from '../Icon'

export function MoreIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='More'
      size={size}
      className={className}
      children={
        <path d='M17 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 17 18zM11 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 11 18zM23 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 23 18z' />
      }
    />
  )
}
