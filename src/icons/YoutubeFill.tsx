import Icon, { IconProps } from '../Icon'

export function YoutubeFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='YoutubeFill'
      size={size}
      className={className}
      children={
        <path d='M28 16C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12zm-14.473 3.127l6.48-3.36-6.485-3.383.005 6.742z' />
      }
    />
  )
}
