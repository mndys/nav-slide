import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavItem from '../Components/Navigation/NavItem'

describe('NavItem Component', function () {
    it('renders children', function () {
        const child = `<h1>'hello world'</h1>`
        render(<NavItem>{child}</NavItem>)
        expect(screen.getByText(/hello world/gi)).toBeInTheDocument()
    })

    it('handles a mouseenter event', function () {
        const handleMouseEnter = jest.fn()
        render(<NavItem {...{ handleMouseEnter }} />)
        userEvent.hover(screen.getByRole('listitem'))
        expect(handleMouseEnter).toBeCalledTimes(1)
    })

    it('handles a mouseleave event', function () {
        const handleMouseLeave = jest.fn()
        render(<NavItem {...{ handleMouseLeave }} />)
        userEvent.unhover(screen.getByRole('listitem'))
        expect(handleMouseLeave).toBeCalledTimes(1)
    })
})
