import Icon, { IconProps } from '../Icon'

export function AdminBadgeIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='AdminBadge'
      size={size}
      className={className}
      children={
        <path d='M16.437 11.023a1 1 0 0 1 .785.977v2.2H18a1 1 0 0 1 .907 1.42l-2.222 4.8a1 1 0 0 1-1.907-.42v-2.2H14a1 1 0 0 1-.908-1.42l2.223-4.8a1 1 0 0 1 1.122-.557z' />
      }
    />
  )
}
