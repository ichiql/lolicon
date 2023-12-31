import Icon, { IconProps } from '../Icon'

export function ImportantFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='ImportantFill'
      size={size}
      className={className}
      children={
        <g>
          <path d='M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zm-12 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2-11.5c0 2.5-.5 7.5-2 7.5s-2-5-2-7.5c0-1.5.5-2.5 2-2.5s2 1 2 2.5z' />
        </g>
      }
    />
  )
}
