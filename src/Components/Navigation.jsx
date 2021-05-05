import styled from "styled-components"

export default function Navigation() {
    return (
        <Nav>
           <li>Home</li> 
           <li>About</li> 
           <li>Downloads</li> 
           <li>Contact</li> 
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0 2rem;
    background-color: #000;
    width: 100vw;
    top: 0;
    left: 0;
    height: 4em;

    li {
        text-decoration: none;
        color: inherit;
        background-color: #333;

        :first-of-type{
            flex: 1;
        }
    }
`
