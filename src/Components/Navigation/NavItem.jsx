import styled from 'styled-components/macro'

export default function NavItem({ handleMouseEnter, title, children }) {
    return (
        <Item onMouseEnter={handleMouseEnter}>
            <a href="/">{title}</a>
            {children}
        </Item>
    )
}

const Item = styled.li`
    position: relative;
    padding: var(--size-m) var(--size-xl);
    width: 7rem;
    text-align: center;

    a {
        color: inherit;
        text-decoration: none;
    }

    :hover {
        background-color: var(--color-bg);
        filter: brightness(120%);
    }
`
