import Icon, { IconProps } from '../Icon'

export function TwitchNudeIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='TwitchNude'
      size={size}
      className={className}
      children={
        <g>
          <path d='M8.25.5 2.714 6.036v19.929h6.643v5.536l5.536-5.536h4.428L29.286 16V.5H8.25Zm18.822 14.393-4.428 4.428h-4.428l-3.875 3.875v-3.875H9.359V2.715h17.715v12.179Z' />
          <path d='M21.537 6.59h2.215v6.643h-2.215zM15.447 6.59h2.215v6.643h-2.215z' />
        </g>
      }
    />
  )
}
