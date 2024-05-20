import styled from "styled-components";

export const EmptyChatModalContainerStyles = styled.div`
width: 100%;
height: 100%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h2 {
    font-weight: 500;
}

@media (max-width: 480px) {
    h2 {
        padding: 0 10px;
        font-size: 1.7rem;
    }
}
`