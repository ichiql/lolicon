import Icon, { IconProps } from '../Icon'

export function ListIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='List'
      size={size}
      className={className}
      children={
        <path d='M10 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM25 10c0 .552-.392 1-.875 1h-11.25c-.483 0-.875-.448-.875-1s.392-1 .875-1h11.25c.483 0 .875.448.875 1zM10 16a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM25 16c0 .552-.392 1-.875 1h-11.25c-.483 0-.875-.448-.875-1s.392-1 .875-1h11.25c.483 0 .875.448.875 1zM10 22a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM25 22c0 .552-.392 1-.875 1h-11.25c-.483 0-.875-.448-.875-1s.392-1 .875-1h11.25c.483 0 .875.448.875 1z' />
      }
    />
  )
}
