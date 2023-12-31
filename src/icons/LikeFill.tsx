import Icon, { IconProps } from '../Icon'

export function LikeFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='LikeFill'
      size={size}
      className={className}
      children={
        <path
          d='M25.982 9.75c-2-2-6-3-10 1-4-4-8-3-10-1-8 8 7 17 10 17s18-9 10-17z'
          fillRule='nonzero'
        />
      }
    />
  )
}
