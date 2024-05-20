import styled from "styled-components";

export const FormContainerStyle = styled.form`
width:100%;
max-width:500px;
min-width:350px;
height: ${props => props.isChat ? 'auto' : '100vh'};
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:15px;
margin:0 auto;
font-family:'Red Hat Display';
    
h2 {
    display: ${props => props.isChat ? 'none' : 'block'};
}
    input{
        width: 70%;
        height:40px;
        border:none;
        border-radius:3px;
        padding-left:5px;
    }
    
    .imgContainer{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:10px;
     

        img{
        width:200px;
        height:200px;
        margin:0 auto;
        object-fit:contain;
        border-radius:3px;
    }
    }


.passwordContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    gap: 10px;

    .showPasswordIcon {
        font-size: 1.4rem;
        cursor: pointer;
        text-align: start;
    }
}

a {
    color: white;
    font-style: italic;
    font-weight: 700;
}
`