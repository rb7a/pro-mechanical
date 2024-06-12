import React from "react"
import styled from "@emotion/styled"
import HeroVideo from "../videos/ProMechanical.mp4"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
display: grid;
height: 100vh;
justify-content: center;
align-items: center;
// overflow: clip;
width: 100%;
max-width: 100vw;
// background-color: black;
color: black;
justify-content: center;
align-items: center;
.background-video {
    width: 100%;
    grid-area: 1/1;
    display: grid;
    height: 100vh;
    :before {
        content: "";
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.4) 100%);
    }
}
.center-content {
    z-index: 100;
    display: grid
    position: relative;
    grid-area: 1/1;
    width: 100%;
    .content {
        bottom: 0;
        position: absolute;
        // border-bottom: 5px solid black;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        width: 100%;
        // height: 0px;
        height: 86px;
        display: flex;
        justify-content: center;
        background-color: white;
        a {
            box-sizing: border-box;
            height: 100%;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            font-weight: 500;
            font-size: 16px;
            background-color: white;
            padding: 16px 34px 10px 34px;
            :hover {
                cursor: pointer;
            }
        }
        .bobcat {
            background-color: #FF3600;
            color: white;
        }
    }
   
}
.scroll-section {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    // bottom: 80px;
    bottom: 121px;
    z-index: 100;
    // left: -82px;
    left: -73px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    transform: rotate(90deg);
    .img {
        margin-left: 20px;
        margin-top: 2px;
        height: 100%;
        // padding-left: 10px;
    }
}
@media(max-width: 1395px){
    .scroll-section {
        bottom: 100px;
    }
}
@media(max-width: 825px){
    .scroll-section {
        bottom: 120px;
    }
}
@media(max-width: 745px){
    .scroll-section {
        bottom: 140px;
    }
    a {
        text-align: center;
    }
}
@media(max-width: 600px){
    .scroll-section {
        display:none;
    }
    .center-content {
        display: none;
    }
}
`

export default function Hero(){
    return(
        <Wrapper >
            <div className="center-content">
                <div className="content">
                    <a>24/7 BREAKDOWN SUPPORT & MAINTENANCE CENTER</a>
                    <a className="bobcat">APPROVED WAIKATO BOBCAT SUPPLIER</a>
                    <a target="_blank" href="https://www.google.com/maps/place/7%2F30+Earthmover+Crescent,+Burbush+3200/@-37.7392913,175.2158767,17z/data=!3m1!4b1!4m5!3m4!1s0x6d6d2310da9709bb:0x7834ff1f95eea3e1!8m2!3d-37.7392956!4d175.2184516?entry=ttu">7/30 EARTHMOVER CRESENT, BARBUSH, HAMILTON 3288 </a>
                </div>
            </div>
            <div className="background-video">
                <video
                    disablePictureInPicture
                    id="BgVideo"
                    title="Pro Mechanical LTD Highlight Video"
                    height="100%"
                    width="100%"
                    loop
                    muted
                    autoPlay={true}
                    playsInline 
                    preload="auto"
                    type="video/mp4"
                    poster=""
                    style={{objectFit:"cover"}}
                >
                    <source 
                        src={HeroVideo}
                        type="video/mp4"
                    />
                </video>
                </div>
                <div className="scroll-section">
                    <p>SCROLL DOWN<StaticImage src="../images/Arrow.png" alt="arrow" class="img"/></p>
                </div>
        </Wrapper>
    )
}