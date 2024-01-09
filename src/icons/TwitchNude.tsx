import Icon, { IconProps } from '../Icon'

export function TwitchNudeIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='TwitchNude'
      size={size}
      className={className}
      children={
        <g>
          <path d='M10 4 5.714 8.286v15.429h5.143v4.286l4.286-4.286h3.428L26.286 16V4H10Zm14.572 11.143-3.428 3.428h-3.428l-3 3v-3h-3.857V5.715h13.715v9.429Z' />
          <path d='M20.286 8.715h1.715v5.143h-1.715zM15.572 8.715h1.715v5.143h-1.715z' />
        </g>
      }
    />
  )
}
