import Icon, { IconProps } from '../Icon'

export function SortDescIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='SortDesc'
      size={size}
      className={className}
      children={
        <g>
          <path d='M17.85,20h6.65c.6,0,1,.4,1,1s-.4,1-1,1h-6.65c-.6,0-1-.4-1-1s.4-1,1-1Z' />
          <path d='M17.85,15h6.65c.6,0,1,.4,1,1s-.4,1-1,1h-6.65c-.6,0-1-.4-1-1s.4-1,1-1Z' />
          <path d='M17.75,10h1.7c.5,0,.9.4.9,1s-.4,1-.9,1h-1.7c-.5,0-.9-.4-.9-1s.4-1,.9-1Z' />
          <path d='M15.2,19.7c.4-.4.4-1,0-1.4s-1-.4-1.4,0l-1.3,1.3v-9.6c0-.6-.4-1-1-1s-1,.4-1,1v9.6l-1.3-1.3c-.4-.4-1-.4-1.4,0-.4.4-.4,1,0,1.4l3,3c.4.4,1,.4,1.4,0l3-3Z' />
        </g>
      }
    />
  )
}
