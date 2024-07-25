import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: .1; }
  30% { opacity: .8; }
  100% { opacity: .1; }
`;

export const MainFaderFootballStyles = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 3000;
  top: 0;
  left: 0px;
  display: ${props => props.isActive ? "block" : "none"};
`;

export const LoaderFootballStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    height: 300px;
    display: block;
    margin: 0 auto;
    
    path {
      animation-duration: 1s;
      animation-name: ${pulse};
      animation-iteration-count: infinite;
      color: #26a380;

      &.path-7 {
        animation-delay: -1s;
      }
      &.path-6 {
        animation-delay: -.875s;
      }
      &.path-5 {
        animation-delay: -.75s;
      }
      &.path-4 {
        animation-delay: -.625s;
      }
      &.path-3 {
        animation-delay: -.5s;
      }
      &.path-2 {
        animation-delay: -.375s;
      }
      &.path-1 {
        animation-delay: -.25s;
      }
      &.path-0 {
        animation-delay: -.125s;
      }
    }
  }
`;