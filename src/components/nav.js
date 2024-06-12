import React, {useState} from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "../components/hamburger"

const Wrapper = styled.div`
width: 100%;
position: absolute;
padding-top: 15px;
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
    position: relative;
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
    .nav-bobcat-products {
    margin-top: 80px!important;
    }
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

.close-btn {
position: absolute;
// right: 5vw;
right: 0;
box-sizing: border-box;
padding: 15px 20px;
height: 50px;
width: calc(0.333 * 90vw);
// max-width: 500px;
text-align: right;
border-radius: 0 10px 0 0;
:hover {
    background-color: rgba(0,0,0,0.04);
    cursor: pointer;
    // color: #ff3600;
}
}
.nav-bobcat-products {
position: absolute;
left: 5%;
z-index: 200!important;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: auto;
width: 90vw;
height: auto;
background-color: rgba(255,255,255,0.98);
border-radius: 10px;
transition: .3s;
opacity: 1;
.products-link {
    text-decoration: none;
    color: black;
    // max-width: 500px;
    width: 33.3%;
    text-align: center;
    :hover {
     background-color: rgba(0,0,0,0.04)
    }
   
}
}
.nav-row {
    display: flex;
    :first-of-type {
    margin-top: 50px;}
}
.nav-item {
    align-items: center;
    box-sizing: border-box;
    // max-width: 500px;
    width: 33.3%;
    display: flex;
    padding: 10px 20px;
    transition: .3s;
    :hover {
     // background-color: #B00E23;
    // background-color: #f1f1f1;
    background-color: rgba(0,0,0,0.04);
    // mix-blend-mode: multiply;
    // background-color: #ff3600;
    // color:white;
    cursor: pointer;
    }
}
.item-image {
    img {
    object-fit: contain!important;
    }
    div {
    height: 100%;
    }
}
.item-content {
    // width: 50%;
    height: fit-content;
    h2 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 20px;
    }
    p {
    // width: 250px;
    
    font-size: 14px;
    margin: 10px 0;
    }
    a {
    font-weight: 600;
    }
    padding: 10px;
}
.nav-fade {
    opacity: 0!important;
    display: none;
}
.nav-none {
    display: none;
}
.bg-dim {
z-index: 100;
position: fixed;
top: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.7);
animation: appear 1s;
}
.bg-dim-off {
display: none;
opacity: 0;
}
@keyframes appear {from {opacity: 0}to {opacity: 1;}}

.nav-fade {

}
//services section css
.nav-services {
position: absolute;
top: 95px;
left: 40%;
z-index: 200!important;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: auto;
width: auto;
height: auto;
background-color: rgba(255,255,255,0.98);
border-radius: 10px;
transition: .3s;
opacity: 1;
.nav-item {
    padding: 2px;
    position: relative;
    
    h2 {
        margin-top: 0;
        color: white;
        font-size: 16px;
        width: 90%;
        text-align: center;
        z-index: 200;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    :hover {
        .item-image {
            filter: brightness(0.6);
        }
    }
}
.products-link {
    text-decoration: none;
    color: black;
    // max-width: 500px;
    width: 364px;
    text-align: center;
    :hover {
     background-color: rgba(0,0,0,0.04);
    }
}
.close-btn {
width: 368px!important;
}
.nav-row {
    padding: 0 2px;
    // margin: 0;
}
.item-image {
    transition: .3s;
    height: 180px;
    filter: brightness(0.3);
}
}
//company section css
.nav-company {
    position: absolute;
    top: 95px;
    left: 40%;
    z-index: 200!important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: auto;
    height: auto;
    background-color: rgba(255,255,255,0.98);
    border-radius: 10px;
    transition: .3s;
    opacity: 1;
    .close-btn {
        width: 190px;
        color: white;
        z-index: 200;
    }
    .nav-wrapper {
        display: flex;
        flex-direction: row;
    }
    .item-image {
        border-radius: 0 10px 10px 0;
        filter: brightness(0.8);
        height: 372px;
        margin: 4px 4px 4px 0;
    }
    .nav-column {
        display: flex;
        flex-direction: column;
        height: 380px;
        width: 400px;
    }
    .company-item {
        width: 400px;
        flex-direction: column;
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        transition: .3s;
        :hover {
            background-color: rgba(0,0,0,0.04);
            cursor: pointer;
        }
        :last-of-type {
            margin-top: auto;
        }
        h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }
        p{
            font-size: 14px;
            margin: 0;
        }
    }
}
`



export default function Nav(){
    const [active, setActive] = useState(false)
    const [menu, setMenu] = useState()
    return(
        <Wrapper id="top">
            <div className="navbar">
                <Link to="/#home" className={active? "active-logo logo" : "logo"}>
                    <StaticImage src="../images/ProMechanicalLogo.png" alt="thoughtfulHQ" />
                    {/* ORDINARY DIGITAL &copy; */}
                </Link>
                <div className="right-content">
                    <Link to="/#products" onMouseEnter={() => setMenu("products")}>Bobcat<span>®</span> Products</Link>
                    <Link to="/#services" onMouseEnter={() => setMenu("services")}>Our Services</Link>
                    <Link to="/#company"  onMouseEnter={() => setMenu("company")}>Company</Link>
                    <Link to="/#careers"  onMouseEnter={() => setMenu("careers")}>Careers</Link>
                    <a className={active? "active call" : "call"} onMouseEnter={() => setMenu("")} href="tel:07-957-2695">+07 957 2695</a>
                </div>
                <Hamburger setActive={() => setActive(!active)} active={active}/>
            </div>
            <div className={menu === "products" || menu === "services" || menu === "company" || menu === "careers"? "bg-dim" : "bg-dim bg-dim-off"} onClick={() => setMenu("")}/>
            <div className={menu == "products"? "nav-bobcat-products":"nav-fade"}>
                <div className="close-btn" onClick={() => setMenu("")}>Close</div>
                <div className="nav-wrapper">
                    <div className="nav-row">
                        <div className="nav-item">
                            <StaticImage className="item-image" src="../images/nav-images/products/Loader2.png" alt="thoughtfulHQ" />
                            <div className="item-content">
                                <h2>Loaders</h2>
                                <p>Skid-Steer, Compact Track, Compact Wheel, Backhoe - we have a large range of Bobcat loaders to suit the needs of your job.</p>
                                <a>View Loaders</a>
                            </div>
                        </div>
                        <div className="nav-item">
                            <StaticImage className="item-image" src="../images/nav-images/products/MiniExcavator2.png" alt="thoughtfulHQ" />
                            <div className="item-content">
                                <h2>Mini Excavators</h2>
                                <p>Skid-Steer, Compact Track, Compact Wheel, Backhoe - we have a large range of Bobcat loaders to suit the needs of your job.</p>
                                <a>View Mini Excavators</a>
                            </div>
                        </div>
                        <div className="nav-item">
                            <StaticImage className="item-image" src="../images/nav-images/products/Tractor2.png" alt="thoughtfulHQ" />
                            <div className="item-content">
                                <h2>Tractors</h2>
                                <p>Skid-Steer, Compact Track, Compact Wheel, Backhoe - we have a large range of Bobcat loaders to suit the needs of your job.</p>
                                <a>View Tractors</a>
                            </div>
                        </div>
                    </div>
                    <div className="nav-row">
                    <div className="nav-item">
                            <StaticImage className="item-image" src="../images/nav-images/products/Forklift2.png" alt="thoughtfulHQ" />
                            <div className="item-content">
                                <h2>Forklifts</h2>
                                <p>Skid-Steer, Compact Track, Compact Wheel, Backhoe - we have a large range of Bobcat loaders to suit the needs of your job.</p>
                                <a>View Forklifts</a>
                            </div>
                        </div>
                        <div className="nav-item">
                            <StaticImage className="item-image" src="../images/nav-images/products/Utility2.png" alt="thoughtfulHQ" />
                            <div className="item-content">
                                <h2>Utility/Other</h2>
                                <p>Skid-Steer, Compact Track, Compact Wheel, Backhoe - we have a large range of Bobcat loaders to suit the needs of your job.</p>
                                <a>View Utility/Other</a>
                            </div>
                        </div>
                        <div className="nav-item">
                            <StaticImage className="item-image" src="../images/nav-images/products/Attachment2.png" alt="thoughtfulHQ" />
                            <div className="item-content">
                                <h2>Attachments</h2>
                                <p>Skid-Steer, Compact Track, Compact Wheel, Backhoe - we have a large range of Bobcat loaders to suit the needs of your job.</p>
                                <a>View Attachments</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#AllProducts" className="products-link"><h2>View All Products</h2></a>
            </div>

            <div className={menu == "services"? "nav-services":"nav-fade"}>
                <div className="close-btn" onClick={() => setMenu("")}>Close</div>
                <div className="nav-wrapper">
                    <div className="nav-row">
                        <div className="nav-item">
                            <h2>Heavy Diesel Truck Repair</h2>
                            <StaticImage className="item-image" src="../images/nav-images/services/Hevy.png" alt="thoughtfulHQ" />
                        </div>
                        <div className="nav-item">
                            <h2>Earthmoving Equipment Repairs</h2>
                            <StaticImage className="item-image" src="../images/nav-images/services/Earthmoving.png" alt="thoughtfulHQ" />
                        </div>
                        <div className="nav-item">
                            <h2>Cars, Vans & Ute Repairs</h2>
                            <StaticImage className="item-image" src="../images/nav-images/services/Cars.png" alt="thoughtfulHQ" />
                        </div>
                        <div className="nav-item">
                            <h2>Forklift Repairs</h2>
                            <StaticImage className="item-image" src="../images/nav-images/services/Forklift.png" alt="thoughtfulHQ" />
                        </div>
                    </div>
                    <div className="nav-row">
                        <div className="nav-item">
                            <h2>Auto Electrical</h2>
                            <StaticImage className="item-image" src="../images/nav-images/services/AutoElectrical.png" alt="thoughtfulHQ" />
                        </div>
                        <div className="nav-item">
                            <h2>Tyres, Suspension & Hydraulics</h2>
                            <StaticImage className="item-image" src="../images/nav-images/services/TyresSuspension.png" alt="thoughtfulHQ" />
                        </div>
                        <div className="nav-item">
                            <h2>WOF & COF</h2>
                            <StaticImage className="item-image" src="../images/nav-images/services/WOF.png" alt="thoughtfulHQ" />
                        </div>
                        <div className="nav-item">
                            <h2>Chainsaws, Mowers & Small Machines</h2>
                            <StaticImage className="item-image" src="../images/nav-images/services/Small.png" alt="thoughtfulHQ" />
                        </div>
                    </div>
                </div>
                <a href="#AllProducts" className="products-link"><h2>View All Services</h2></a>
            </div>

            <div className={menu == "company"? "nav-company":"nav-fade"}>
                <div className="close-btn" onClick={() => setMenu("")}>Close</div>
                <div className="nav-wrapper">
                    <div className="nav-column">
                        <div className="company-item">
                            <h2>About Us</h2>
                            <p>This is a short description under the service which opens on hover and hooks the user to read more.</p>
                        </div>
                        <div className="company-item">
                            <h2>Our Team & Partners</h2>
                            <p>This is a short description under the service which opens on hover and hooks the user to read more.</p>
                        </div>
                        <div className="company-item">
                            <h2>Support Center</h2>
                            <p>This is a short description under the service which opens on hover and hooks the user to read more.</p>
                        </div>
                        <div className="company-item">
                            <h2>View Company</h2>
                        </div>
                    </div>
                    <StaticImage className="item-image" src="../images/nav-images/services/Hevy.png" alt="thoughtfulHQ" />
                </div>
            </div>

            <div className={menu == "careers"? "nav-company":"nav-fade"}>
                <div className="close-btn" onClick={() => setMenu("")}>Close</div>
                <div className="nav-wrapper">
                    <div className="nav-column">
                        <div className="company-item">
                            <h2>Working For Us</h2>
                            <p>This is a short description under the service which opens on hover and hooks the user to read more.</p>
                        </div>
                        <div className="company-item">
                            <h2>Positions Available</h2>
                            <p>This is a short description under the service which opens on hover and hooks the user to read more.</p>
                        </div>
                        <div className="company-item">
                            <h2>View Careers</h2>
                        </div>
                    </div>
                    <StaticImage className="item-image" src="../images/nav-images/services/AutoElectrical.png" alt="thoughtfulHQ" />
                </div>
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