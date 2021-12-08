import styled from "styled-components";
import {LinkContainer} from "react-router-bootstrap";
import {CardImgOverlay} from "reactstrap";
import {Card} from "react-bootstrap";

export const StyledLinkContainer = styled(LinkContainer)`
  cursor: pointer;
  transition: color 0.2s;
  box-shadow: #bbbbbb 2px 2px 7px;
  transition: .3s ease;

  &:hover {
    color: #4286fa;
    transition: color 0.2s;
    box-shadow: #bbbbbb -1px 1px 6px;
    transition: .3s ease;
  }
`

export const SubHeaderCopy = styled.h5`
  font-size: 20px !important;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16.8px !important;
    line-height: 1.3 !important;
  }
  
`

export const HoverOverlay = styled(CardImgOverlay)`
    //border-radius: 15px;
    background: rgba(0,0,0,0.7);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;

    &:hover {
      opacity: 1;
    }
`

export const HoverOverlayContent = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  
  &:hover {
    top: 50%;
    left: 50%;
    opacity: 1;
  }

`

export const StyledCard = styled(Card)`
  margin: 10px 10px;
  width: 18rem;
  @media (max-width: 768px) {
    width: 20rem;
  }
`

export const StyledCardTitle =styled(Card.Title)`
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const UnstyledLink = styled.a`
  text-decoration: none;
`
