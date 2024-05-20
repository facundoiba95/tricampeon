import styled from "styled-components";

export const ContainerNavMatchStyles = styled.section`
width: 100%;
height: 40px;
font-family: "Red Hat Display";
display: flex;
justify-content: center;
align-items: center;
margin-top: 0.5rem;
`

export const NavStyles = styled.nav`
width: auto;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`

export const ItemNavMatchdayStyles = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
font-size: 1.1rem;
font-weight: ${props => props.dateMatch ? '700' : '300'};
cursor: pointer;
background-color: ${props => props.dateMatch ? 'crimson' : 'none'};
padding: 5px;
border-radius: 50px;
transition: all 0.1s ease-out;
`