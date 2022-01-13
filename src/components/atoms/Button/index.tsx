import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface ButtonProps {
  variant: 'primary' | 'secondary'
  backgroundColor?: string
  size?: 'small' | 'large'
  label: string
}

const ButtonClass = styled.button(({ variant, size }: ButtonProps) => [
  tw`
    rounded-full
    focus:outline-none
    focus:ring
    text-white
  `,
  variant === 'primary' &&
    tw`bg-blue-500 hover:bg-blue-400 active:bg-blue-600 focus:ring-blue-300`,
  variant === 'secondary' &&
    tw`bg-gray-500 hover:bg-gray-400 active:bg-gray-600 focus:ring-gray-300`,
  size === 'small'
    ? tw`text-xs px-2 py-1`
    : size === 'large'
    ? tw`text-lg px-4 py-3`
    : tw`text-sm px-3 py-2`,
])

export function Button({ variant, size, label, backgroundColor }: ButtonProps) {
  return (
    <ButtonClass
      variant={variant}
      size={size}
      className={`btn btn-${variant} btn-${size}`}
      style={{ backgroundColor }}
    >
      {label}
    </ButtonClass>
  )
}
