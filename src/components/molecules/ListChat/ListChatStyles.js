import styled from "styled-components";

export const ListChatContainerStyles = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    overflow-y: scroll;
    max-height: 500px;
    padding-bottom: 20px;
    padding: 5px;

    ::-webkit-scrollbar {
        background-color: white;
        width: 8px;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #808080;
        border-radius: 5px;
    }
`;

export const MessageItemStyles = styled.li`
    width: auto;
    height: auto;
    padding: 5px;
    border-radius: 5px;
    background-color: ${props =>  props.type == 'joinChat' ? 'yellow' : props.thisUser ? 'black' : ''};
    background-image: ${props => props.type == 'joinChat' ? 'yellow' : props.thisUser ? '' : 'linear-gradient(to right top, #1b2ba2, #1d37ad, #1f42b8, #214dc3, #2458ce, #1065d3, #0071d7, #007dda, #0089d1, #0090bd, #0094a5, #02968d)'};
    align-self: ${props => props.thisUser ? 'flex-start' : 'flex-end'}; /* Alineación izquierda o derecha */

    display: flex;
    flex-direction: column;

    color: ${ props => props.type == 'message' ? 'white' : props.type == 'joinChat' ? 'black' : ''};
    
    pre {
        font-weight: ${ props => props.type == 'message' ? '100' : props.type == 'joinChat' ? '800' : ''};
        width: 100%;
        max-width: 350px;
        word-wrap: break-word;
    }

    h5 {
        color: white;
        font-weight: 900;
    }
`;

export const MemberItemStyles = styled.li`
    width: auto;
    height: auto;
    padding: 5px;
    border-radius: 5px;
    background-color: ${props => props.thisUser ? 'black' : ''};
    background-image: ${props => props.thisUser ? '' : 'linear-gradient(to right top, #1b2ba2, #1d37ad, #1f42b8, #214dc3, #2458ce, #1065d3, #0071d7, #007dda, #0089d1, #0090bd, #0094a5, #02968d)'};
    
    p {
        font-weight: 300;
        width: 100%;
        max-width: 350px;
        word-wrap: break-word;
    }

    h5 {
        color: white;
    }
`