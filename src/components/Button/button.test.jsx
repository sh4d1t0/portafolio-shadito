import React from 'react'
import { Primary, Secondary, Small, Large, CustomColor } from './Button.stories'
import { render, screen } from '@testing-library/react'

describe('Button render with props', () => {
  it('should render primary button', () => {
    render(<Primary {...Primary.args} />)
    expect(screen.getByRole('button')).toHaveTextContent(/primary/i)
    expect(screen.getByRole('button')).toHaveClass('btn-primary')
  })
  it('should render secondary button', () => {
    render(<Secondary {...Secondary.args} />)
    expect(screen.getByRole('button')).toHaveTextContent(/secondary/i)
    expect(screen.getByRole('button')).toHaveClass('btn-secondary')
  })
  it('should render small button', () => {
    render(<Small {...Small.args} />)
    expect(screen.getByRole('button')).toHaveTextContent(/small/i)
    expect(screen.getByRole('button')).toHaveClass('btn-small')
  })
  it('should render large button', () => {
    render(<Large {...Large.args} />)
    expect(screen.getByRole('button')).toHaveTextContent(/large/i)
    expect(screen.getByRole('button')).toHaveClass('btn-large')
  })
  it('should render a custom color button', () => {
    render(<CustomColor {...CustomColor.args} />)
    expect(screen.getByRole('button')).toHaveTextContent(/custom/i)
    expect(screen.getByRole('button')).toHaveStyle(
      `background-color: ${CustomColor.args.backgroundColor}`
    )
  })
})
