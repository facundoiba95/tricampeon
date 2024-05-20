import styled from 'styled-components';

export const ListEventsContainerStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Red Hat Display';

h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.titleOtherEvent {
    text-align: center;
}

@media (max-width: 480px) {
    h2 {
        font-size:2rem;
    }
}
`