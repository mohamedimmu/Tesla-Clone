import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import LanguageIcon from '@material-ui/icons/Language';

function Header() {
  const [menuOpts, setMenuOpts] = useState(false);

  return (
    <Container>
      <LogoWrapper>
      <Link to="/">
        <Logo src="/images/logo.svg" />
      </Link>
      </LogoWrapper>
     

      <Menu>
        <StyledLink to="/">Model S</StyledLink>
        <StyledLink to="/">Model 3</StyledLink>
        <StyledLink to="/">Model X</StyledLink>
        <StyledLink to="/">Model Y</StyledLink>
        <StyledLink to="/">Solar Roof</StyledLink>
        <StyledLink to="/">Solar Roofs</StyledLink>
      </Menu>

      <SideMenu>
        <StyledLink className="desktop" to="/">Shop</StyledLink>
        <StyledLink className="desktop" to="/login">Tesla Account</StyledLink>
        <StyledLink
          to="/"
          onClick={() => {
            setMenuOpts(true);
          }}
        >
          Menu
        </StyledLink>
      </SideMenu>

    
      <MenuWrapper show={menuOpts}>
        {menuOpts && (
        <MenuOpts >
          <CloseWrap
            onClick={() => {
              setMenuOpts(false);
            }}
          >
            <Close />
          </CloseWrap>

          <li>
            <StyledLink to="/">Existing Inventory</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Used Inventory</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Trade-in</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Test Drive</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Roadster</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Semi</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Charging</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Powerwall</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Commercial Energy</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Utilities</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Find Us</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Support</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Investor Relations</StyledLink>
          </li>
          <li>
            <LocationWrap>
                <LanguageIcon />
                <div>
                    <StyledLink to="/">United States</StyledLink>
                    <Link className="lang" to="/">English</Link>
                </div>
            </LocationWrap>
          </li>
        </MenuOpts>
        )}
      </MenuWrapper>
      
      {menuOpts && <Backdrop></Backdrop>}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  /* padding: 25px;
  padding-top: 15px; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  min-block-size: 56px;

   
`;

const LogoWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding-inline-start: 32px;
  display: flex;
  
  @media (max-width: 768px){
        padding-inline-start: 8px;
        flex-grow: 0;
    }

   a{
      padding: 0 16px;
    }

`

const Logo = styled.img`
  object-fit: contain;
  width: 90px;
  
  
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  padding-inline-start: 8px;
  padding-inline-end: 8px;
  

    a{
      letter-spacing: 0.5px;
    }

    @media (max-width:768px){
      display: none;
    }
    
`;

const SideMenu = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: flex-end;
  padding-inline-end: 32px;

  @media (max-width: 768px){
        padding-inline-end: 8px;
        flex-grow:0;
       
        a{
          background-color: #0000000d;
          backdrop-filter: blur(16px);
          border-radius: 12px;
        }

        .desktop{
          display: none;
        }
    }

   
`
const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;

  overflow-y: scroll;
  z-index: 999;
  /* -ms-overflow-style: none;
  scrollbar-width: none;
    
    &::-webkit-scrollbar{
        display: none;
    } */

  
`

const MenuOpts = styled.div`
  background-color: #fff;
  width: 300px;
  padding: 0 20px 200px;

  display: flex;
  flex-direction: column;
  text-align: start;
  list-style: none;
  
    li{
        padding: 12px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        font-weight: 600;

        a{
            width:100%;
            display: inline-block;
            padding-top: 8px;
            padding-bottom: 8px;
           
        }

    }
`;


const LocationWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 15px;
    
    &:hover{
        border-radius: 10px;
        background-color: rgb(100, 100, 100, 0.1);
    }
    
    div{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        
        a{
          padding: 0;
        }

        .lang{
          font-size: 12px;
          text-decoration: none;
          width: max-content;
          border-bottom: 2px solid transparent;
          

          &:visited,
          &:link{
            color: #5c5e62;
          }

          &:hover,
          &:active{
            color: #5c5e62;
            border-bottom: 2px solid #000;
            
          }
        }


    }
`

const CloseWrap = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: end;
  position: sticky;
  right: 0px;
  top: 0px;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  height: 70px;
  padding-top: 25px;
`

const Close = styled(CloseIcon)`
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: #000;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.5s;
  padding: 6px 15px;

    &:hover{
        border-radius: 10px;
        background-color: rgb(100, 100, 100, 0.1);
    }

`;


const Backdrop = styled.div`
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  height: 100vh; 
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);

`
