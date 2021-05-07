import { useState } from 'react'
import styled from 'styled-components/macro'
import NavItem from './NavItem'
import { ReactComponent as ReactLogo } from '../../img/react.svg'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(null)

    function toggleOpen(e) {
        setIsOpen(e.currentTarget.textContent)
    }

    return (
        <Nav>
            <ReactLogo style={{ height: '2rem' }} />
            <ul>
                <NavItem
                    title="Link 1"
                    handleMouseEnter={(e) => toggleOpen(e)}
                    handleMouseLeave={() => setIsOpen(null)}
                >
                    {isOpen === 'Link 1' && (
                        <Dropdown>
                            <ul>
                                <DropdownItem>Link 1.1</DropdownItem>
                                <DropdownItem>Link 1.2</DropdownItem>
                                <DropdownItem>Link 1.3</DropdownItem>
                                <DropdownItem>Link 1.4</DropdownItem>
                            </ul>
                        </Dropdown>
                    )}
                </NavItem>
                <NavItem
                    title="Link 2"
                    handleMouseEnter={(e) => toggleOpen(e)}
                    handleMouseLeave={() => setIsOpen(null)}
                >
                    {isOpen === 'Link 2' && (
                        <Dropdown>
                            <ul>
                                <DropdownItem>Link 2.1</DropdownItem>
                                <DropdownItem>Link 2.2</DropdownItem>
                                <DropdownItem>Link 2.3</DropdownItem>
                                <DropdownItem>Link 2.4</DropdownItem>
                            </ul>
                        </Dropdown>
                    )}
                </NavItem>

                <NavItem
                    title="Link 3"
                    handleMouseEnter={(e) => toggleOpen(e)}
                    handleMouseLeave={() => setIsOpen(null)}
                >
                    {isOpen === 'Link 3' && (
                        <Dropdown>
                            <ul>
                                <DropdownItem>Link 3.1</DropdownItem>
                                <DropdownItem>Link 3.2</DropdownItem>
                                <DropdownItem>Link 3.3</DropdownItem>
                                <DropdownItem>Link 3.4</DropdownItem>
                            </ul>
                        </Dropdown>
                    )}
                </NavItem>

                <NavItem
                    title="Link 4"
                    handleMouseEnter={(e) => toggleOpen(e)}
                    handleMouseLeave={() => setIsOpen(null)}
                >
                    {isOpen === 'Link 4' && (
                        <Dropdown>
                            <ul>
                                <DropdownItem>Link 4.1</DropdownItem>
                                <DropdownItem>Link 4.2</DropdownItem>
                                <DropdownItem>Link 4.3</DropdownItem>
                                <DropdownItem>Link 4.4</DropdownItem>
                            </ul>
                        </Dropdown>
                    )}
                </NavItem>
            </ul>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: var(--color-primary);
    padding: 0 2rem;

    ul {
        list-style: none;
        margin: 0;
        display: flex;
        justify-content: end;
        gap: 0 2em;
        width: 100%;
        height: 100%;
    }
`

const Dropdown = styled.div`
    position: absolute;
    top: 2.4em;
    right: 0;
    background-color: var(--color-bg);

    ul {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 1em 0;
        padding: 0;
    }
`

const DropdownItem = styled(NavItem)``
