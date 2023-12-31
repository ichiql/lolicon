import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type IconProps = {
  size?: number | string
  className?: string
}

type Props<T> = {
  is?: Function | T | string
  label: string
  size?: number | string
  className?: string
  children: ReactNode
}

export function Icon<T extends ElementType = 'svg'>({
  as: Component = 'svg',
  size = 32,
  label,
  children,
  ...props
}: Props<T> & ComponentPropsWithoutRef<T>) {
  return (
    <Component
      fillRule='evenodd'
      clipRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='1.414'
      xmlns='http://www.w3.org/2000/svg'
      aria-label={label}
      viewBox='0 0 32 32'
      preserveAspectRatio='xMidYMid meet'
      fill='currentColor'
      width={size}
      height={size}
      children={children}
      {...props}
    />
  )
}

export default Icon
