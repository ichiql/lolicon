import Icon, { IconProps } from '../Icon'

export function AlignRightIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='AlignRight'
      size={size}
      className={className}
      children={
        <path d='M7.5 11a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-16a1 1 0 0 1-1-1zM7.5 16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-16a1 1 0 0 1-1-1zM13.5 21c0-.552.414-1 .923-1h10.154c.51 0 .923.448.923 1s-.413 1-.923 1H14.423c-.51 0-.923-.448-.923-1z' />
      }
    />
  )
}
