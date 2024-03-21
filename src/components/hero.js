import React from "react"
import styled from "@emotion/styled"
import HeroVideo from "../videos/ProMechanicalLTD.mp4"
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
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: white;
        a {
            text-decoration: none;
            color: black;
            font-weight: 500;
            font-size: 16px;
            background-color: white;
            padding: 16px 34px 10px 34px;
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
    bottom: 80px;
    z-index: 200;
    left: -82px;
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