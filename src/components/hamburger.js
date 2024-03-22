import React, {useState} from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: none;
margin: 0 20px;
// background-color: yellow;
height: 40px;
z-index: 200;
box-sizing: border-box;
  .burger {
    display: flex;
    outline: none;
    height: 40px;
    width: 30px;
    border: 0px;
    padding: 0px;
    background: transparent;
    transition: all 250ms ease-out;
    cursor: pointer;
  }
  
  .burger:before, .burger:after {
    box-sizing: border-box;
    top: 40;
    content: '';
    width: 30px;
    height: 3px;
    border-radius: 40px;
    position: absolute;
    // background: #1a1a1a;
    background: white;
    transition: all 250ms ease-out;
    will-change: transform;
  }
  .active {
    filter: invert(1005%);
  }
  .burger:before {
    transform: translateY(13px);
  }
  
  .burger:after {
    transform: translateY(27px);
  }
  
  // line transition
  
  .active.burger:before {
    transform: translateY(20px) rotate(45deg);
  }
  
  .active.burger:after {
    transform: translateY(20px) rotate(-45deg);
  } 
@media(max-width: 1420px){
  display: block;
}
`

export default function Hamburger({setActive, active}){
    // const [active, setActive] = useState(false)
    return(
        <Wrapper onClick={(active) => setActive(!active)}>
            <button aria-label="Mobile Menu" class={active? "burger active" : "burger"}  ></button>
        </Wrapper>
    )
}
