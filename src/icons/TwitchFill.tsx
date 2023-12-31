import Icon, { IconProps } from '../Icon'

export function TwitchFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='TwitchFill'
      size={size}
      className={className}
      children={
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M27.986 15.968c0 11-1 12-12 12s-12-1-12-12 1-12 12-12 12 1 12 12zM9.313 11.432L10.225 9h12.462v8.512l-3.648 3.647h-2.735l-1.823 1.825h-1.825v-1.825H9.313v-9.727zm12.158-1.217h-10.03v8.817h2.736v1.822L16 19.032h3.343l2.128-2.129v-6.688zM16 16.296h-1.216V12.65H16v3.647zm3.343 0h-1.216V12.65h1.216v3.647z'
        />
      }
    />
  )
}
