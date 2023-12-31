import Icon, { IconProps } from '../Icon'

export function FigmaFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='FigmaFill'
      size={size}
      className={className}
      children={
        <g>
          <path d='M16.774 14.114c-.5.5-.78 1.179-.78 1.886v-2.667h2.666c-.707 0-1.386.281-1.886.781z' />
          <path d='M27.986 15.968c0 11-1 12-12 12s-12-1-12-12 1-12 12-12 12 1 12 12zm-9.326-2.635A2.667 2.667 0 1115.993 16v5.333a2.667 2.667 0 11-2.666-2.666 2.667 2.667 0 010-5.334 2.666 2.666 0 110-5.333h5.333a2.667 2.667 0 110 5.333z' />
        </g>
      }
    />
  )
}
