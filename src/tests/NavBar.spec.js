import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavBar from '../Components/Navigation/NavBar'

describe('NavBar Component', function () {
    beforeEach(() => {
        render(<NavBar />)
    })

    it('is visible in the DOM', function () {
        expect(screen.getByRole('navigation')).toBeVisible()
    })

    it('renders a navigation with 4 items', function () {
        expect(screen.getAllByText(/link/gi).length).toEqual(4)
    })

    it('renders a dropdown menu with second level links when hovering over a nav item', function () {
        userEvent.hover(screen.getByText(/link 3/gi))
        expect(screen.getByText(/link 3.1/gi)).toBeInTheDocument()
    })
})
