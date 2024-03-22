import React, {useState} from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "../components/hamburger"

const Wrapper = styled.div`
width: 100%;
position: fixed;
padding-top: 5px;
// overflow-x: hidden;
z-index: 200;
.active {
    filter: invert(100%);
}
.navbar {
    top: 0;
    left: 0;
    right: 0;
    z-index: 300;
    position: static;
    color: white;
    display: flex;
    // width: 100vw;
    justify-content: space-between;
    z-index: 200;
    min-height: 80px;
    // height: 100vh;
    // padding: 0 250px;
    align-items: center;
    box-sizing: border-box;
    .logo {
        transition: .3s;
        margin-left: 40px;
        z-index: 200;
        margin-right: 100px;
        text-align: center;
        width: 340px;
        img {
            object-fit: contain!important;
        }
        text-decoration: none;
        color: black;
        font-size: 24px;
    }
    .right-content {
        margin-right: 30px;
        a {
            padding: 10px;
            margin: 0 20px;
            color: white;
            text-decoration: none;
            font-size: 20px;
            font-weight: 700;
            span {
                padding-left: 2px;
                bottom: -2px;
                position: relative;
                font-size: 14px;
            }
        }
    }
}
.sidedrawer {
 display: none;   
 span {
    padding-left: 2px;
    bottom: -2px;
    position: relative;
    font-size: 16px;
}
}
@media(max-width: 1420px){
    .navbar {
        position: fixed;
        justify-content: flex-end;
        width: 100vw;
        z-index: 400;
        .right-content {
            margin-right: 0;
            a {
                display: none;
            }
            .call {
                display: block;
                transition: .3s;
            }
            
        }
        .logo {
            z-index: 200;
            margin-right: auto;
            // margin: 0 20px;
        }
    }
    .drawertoggle {
        transform: translateX(100%);
        box-shadow: unset!important;
    }
    .sidedrawer {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: .3s;
        position: fixed;
        width: 50vw;
        height: 100vh;
        z-index: 300;
        background-color: white;
        top: 0px;
        right: 0;
        display: flex;
        flex-direction: column;
        padding: 200px 40px;
        box-sizing: border-box;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        // box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
        a {
            font-weight: 700;
            font-size: 30px;
            padding: 10px;
            color: #222;
            text-decoration: none;
        }
    }
}
@media(max-width: 767px){
    .sidedrawer {
        width: 90vw;
    }
    .active-logo {
        opacity: 0;
    }
}
@media(max-width: 650px){
.right-content {
    display: none;
}
}
`



export default function Nav(){
    const [active, setActive] = useState(false)
    return(
        <Wrapper id="top">
            <div className="navbar">
                <Link to="/#home" className={active? "active-logo logo" : "logo"}>
                    <StaticImage src="../images/ProMechanicalLogo.png" alt="thoughtfulHQ" />
                    {/* ORDINARY DIGITAL &copy; */}
                </Link>
                <div className="right-content">
                    <Link to="/#products">Bobcat<span>®</span> Products</Link>
                    <Link to="/#services">Our Services</Link>
                    <Link to="/#company">Company</Link>
                    <Link to="/#careers">Careers</Link>
                    <a className={active? "active call" : "call"} href="tel:07-957-2695">+07 957 2695</a>
                </div>
                <Hamburger setActive={() => setActive(!active)} active={active}/>
            </div>
            <div className={active? "sidedrawer" : "sidedrawer drawertoggle"}>
                <Link to="/#top" onClick={() => setActive(!active)}>Home</Link>
                <Link to="/projects">Bobcat<span>®</span> Products</Link>
                <Link to="/#services" onClick={() => setActive(!active)}>Our Services</Link>
                <Link to="/frequently-asked-questions">Compay</Link>
                <Link to="/frequently-asked-questions">Careers</Link>
                <Link to="/#contact" onClick={() => setActive(!active)}>Contact</Link>
            </div>
        </Wrapper>
    )
}