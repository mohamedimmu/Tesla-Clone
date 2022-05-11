import React from 'react'
import styled from 'styled-components';


function Section( {title , description, bgImg, leftBtn, rightBtn} ) {
  return (
    <Wrap bgImage={bgImg}>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <Btns>
          <BtnGroup>
              <LeftBtn>{leftBtn}</LeftBtn>
              {rightBtn && <RightBtn>{rightBtn}</RightBtn>}
          </BtnGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Btns>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => `url(${props.bgImage})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    scroll-snap-align: center;
    scroll-snap-stop: normal;
    scroll-margin: 10px;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const Btns = styled.div`
`

const BtnGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px){
    flex-direction: column;
  }
  
`

const LeftBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  opacity: 0.85;
  cursor: pointer;
  margin: 8px;
  font-size: 12px;
`

const RightBtn = styled(LeftBtn)`
  background-color: rgba(255, 255, 255, 0.65 );
  color: black;
`

const DownArrow = styled.img`
  margin-bottom: 15px;
  height: 40px;
  filter: invert(1);
  animation: animateDown infinite 1.5s;
`