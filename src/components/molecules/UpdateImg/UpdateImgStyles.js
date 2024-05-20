import styled from "styled-components";

export const ContainerBackdropFilterStyles = styled.div`
width: ${ props => props.hidden ? '100vw' : '100%' };
height: 100vh;
backdrop-filter: blur(20px);
/* background-color: red; */
position: absolute;
top: 70px;
left: 0;
display: ${ props => !props.hidden ? 'none' : 'block' };
visibility: ${ props => !props.hidden ? 'hidden' : 'visible' };
opacity: ${ props => !props.hidden ? '0' : '1' };
z-index: 1000;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const FormUpdateImgStyles = styled.form`
width: 100%;
max-width: 400px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;

img {
    width: 300px;
    height: 300px;
    border: 1px solid #808080;
    border-radius: 5px;
    object-fit: cover;
}

button {
    width: 150px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: blueviolet;
    color: white;
    font-weight: 600;
    cursor: pointer;
}

.closeWindow {
    position: absolute;
    top: 10px;
    background-color: crimson;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}
`