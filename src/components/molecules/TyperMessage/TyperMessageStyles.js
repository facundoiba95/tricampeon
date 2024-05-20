import styled from "styled-components";

export const TyperMessageContainerStyles = styled.div`
width: 100%;
height: 90px;
`

export const BoxTyperMessageStyles = styled.span`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
padding-right:15px;
gap: 0px;

.btnAddComment {
    padding: 5px;
    background-color: #38b000;
    position: relative;
    color: white;
    font-weight: 500;
    border: none;
    border-radius:2px;
    cursor: pointer;
    height: 100%;
}

textarea {
    width: 100%;
    height: 70px;
    padding: 10px;
    resize: none;
    overflow-y: scroll;
}

::placeholder{
    color:white;
}

@media (max-width: 490px) {
    gap: 0px;
    /* padding-left: 10px; */

    .btnAddComment {
        padding: 5px;
    }
}

`