import Icon, { IconProps } from '../Icon'

export function MessageSimpleFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='MessageSimpleFill'
      size={size}
      className={className}
      children={
        <path d='M16.5 24C27.042 24 28 22.5 28 16s-.958-8-11.5-8S5 9.5 5 16c0 4.401.439 6.51 3.996 7.413.002.001.004.003.004.005v2.713a1 1 0 0 0 1.555.833l4.461-2.974.002-.001c.472.007.965.011 1.482.011z' />
      }
    />
  )
}
