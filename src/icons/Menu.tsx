import Icon, { IconProps } from '../Icon'

export function MenuIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Menu'
      size={size}
      className={className}
      children={
        <g>
          <path d='M9,10c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z' />
          <path d='M9,15c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z' />
          <path d='M9,20c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z' />
        </g>
      }
    />
  )
}
