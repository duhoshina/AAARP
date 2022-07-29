import styled from 'styled-components';
import img from '/assets/img/bkg-1.png';
import { deviceMinWidth } from '../../../styles';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Divider = styled.div`
  padding-top: 100px;
`;

export const TitleCTA = styled.div`
  color: var(--grayLight);
  font-weight: 600;
  text-align: center;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 26px;
  z-index: 1;

  margin-left: 50%;
  margin-top: 50vw;
  @media ${deviceMinWidth.tabletM} {
    font-size: 40px;
    margin-top: 20vw;
  }
  @media ${deviceMinWidth.desktopS} {
    margin-top: 10vw;
  }
`;

export const ContentButton = styled.div`
  text-align: center;
`;

export const TransitionContent = styled.div`
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: var(--grayLight);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: -60px;
  width: 80vw;
  height: 250px;
  overflow-y: scroll;
`;

export const SecondContainer = styled.div`
  background-color: var(--grayLight);
  height: 100vh;
  width: 100vw;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  @media ${deviceMinWidth.tabletL} {
    margin: 0 150px;
  }
  @media ${deviceMinWidth.desktopS} {
    margin: 0 150px;
  }
`;

export const Col = styled.div`
  h1 {
    font-size: 12px;
    margin-bottom: 10px;
    @media ${deviceMinWidth.tabletL} {
      font-size: 20px;
    }
    @media ${deviceMinWidth.desktopS} {
      font-size: 30px;
    }
  }
  h1:before {
    content: '>> ';
    color: var(--brownDark);
    font-size: 16px;
  }
  p {
    font-size: 10px;
    @media ${deviceMinWidth.tabletL} {
      font-size: 15px;
    }
    @media ${deviceMinWidth.desktopS} {
      font-size: 20px;
    }
  }

  max-width: 500px;
  padding: 30px;
`;
