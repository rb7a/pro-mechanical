import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"

const Title = styled.div`
// background-color: black;
//   color: white;
  padding-top: 100px;
  padding-bottom: 100px;
  margin: auto;
  h1 {
    color: #222;
    margin: auto;
    width: 1350px;
    font-size: 40px;
    margin-bottom: 20px;
    // margin-bottom: 0;
  }
  p {
    margin: auto;
    width: 1350px;
    font-size: 20px;
   
  }
`

const Services = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
.service-item {
  width: 440px;
  margin: 10px;
}
`


const IndexPage = () => {
  return (
    <Layout>
    <main>
      <Hero/>
      <Title>
        {/* <h1>FROM HAND TOOL REPAIR,<br/>FULL DIESEL FLEETS,<br/>MACHINARY ENGINEERING,<br/>WE DELIVER.</h1> */}
        <h1>WE SERVICE, REPAIR AND MAINTAIN FULL BUSINESS FLEETS, FROM DIESEL TRUCKS AND LARGE MACHINARY TO HANDTOOLS AND EQUIPMENT.</h1>
        <p>Pro Mechanical Ltd have been providing quality service to brands like Enviro NZ, SCANIA, INTERNATIONAL, FOTON, since way back in 2012.</p>
        <br/>
        <p>Our focus has always been top-quality workmanship, quickly and at a great rate.</p>
        <br/>
        <p>With this mindset we've grown from one man and his van to a skilled team of over 40+ and now have the facility, people and skills to keep any businesses fleet/equipment serviced, safe, and ready when you need it.</p>
      </Title>
      <Services>
        <div className="service-item">
            <StaticImage className="item-image" src="../images/nav-images/services/Hevy.png" alt="thoughtfulHQ" />
            {/* <h2>Heavy Diesel Truck Repair</h2> */}
        </div>
        <div className="service-item">
            <StaticImage className="item-image" src="../images/nav-images/services/Earthmoving.png" alt="thoughtfulHQ" />
            {/* <h2>Earthmoving Equipment Repairs</h2> */}
        </div>
        <div className="service-item">
            <StaticImage className="item-image" src="../images/nav-images/services/Cars.png" alt="thoughtfulHQ" />
            {/* <h2>Cars, Vans & Ute Repairs</h2> */}
        </div>
        <div className="service-item">
            <StaticImage className="item-image" src="../images/nav-images/services/Forklift.png" alt="thoughtfulHQ" />
            <h2>Forklift Repairs</h2>
        </div>
        <div className="service-item">
            <StaticImage className="item-image" src="../images/nav-images/services/AutoElectrical.png" alt="thoughtfulHQ" />
            <h2>Auto Electrical</h2>
        </div>
        <div className="service-item">
            <StaticImage className="item-image" src="../images/nav-images/services/TyresSuspension.png" alt="thoughtfulHQ" />
            <h2>Tyres, Suspension & Hydraulics</h2>
        </div>
        <div className="service-item">
            <StaticImage className="item-image" src="../images/nav-images/services/WOF.png" alt="thoughtfulHQ" />
            <h2>WOF & COF</h2>
        </div>
        <div className="service-item">
            <StaticImage className="item-image" src="../images/nav-images/services/Small.png" alt="thoughtfulHQ" />
            <h2>Chainsaws, Mowers & Small Machines</h2>
        </div>
        <div className="service-item">
            <StaticImage className="item-image" src="../images/BobcatImage.png" alt="thoughtfulHQ" />
            <h2>Bobcat Sales</h2>
        </div>
      </Services>
    </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <html lang="en" />
    <title>Bobcat Products | 24/7 Mechanical Servicing | Pro Mechanical LTD</title>
    <meta name="description" content="Pro Mechanical LTD is an approved Bobcat Supplier."/>
  </>
)