import styled from 'styled-components';

export const VideoPlayerContainerStyles = styled.section`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 15px;
position: relative;
padding: 10px;
box-shadow: -1px 2px 71px 1px rgba(0,0,0,0.75);
-webkit-box-shadow: -1px 2px 71px 1px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 2px 71px 1px rgba(0,0,0,0.75);

::-webkit-scrollbar {
    display: none;
}

@media (max-width: 480px) {
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
}
`

export const VideoPlayerStyles = styled.iframe`
width: 100%;
height: auto;
display: flex;
aspect-ratio: 16/9;
border: none;

@media (max-width: 480px) {
    /* height: 300px; */
}

`

export const SelectChannelsButtonContainerStyles = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap:10px;


`
export const ContainerButtonsChannelStyles = styled.div`
width: 100%;
height: 100%;
display: flex;
gap: 10px;
z-index:1000;
`
export const ImgChannelStyles = styled.img`
width: 120px;
object-fit: contain;
height: 40px;
border: none;
/* background-color: white; */
border-radius: 5px;
cursor: pointer;
transition: all 0.2s ease-in-out;
margin-bottom: 5px;
border: 1px solid #80808080;

:hover {
    transform: scale(1.05);
}
`
