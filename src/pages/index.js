import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"


const IndexPage = () => {
  return (
    <Layout>
    <main>
      <Hero/>
      <div>
      {/* <h1 style={{padding:80}}>YOUR TRUSTED  WAIKATO MECHANIC AND BOBCAT DEALER.<br/><br/> WE DELIVER A FULL SUITE OF MECHANICAL & ENGINEERING SERVICES, FROM HAND TOOL REPAIR TO FULL DIESEL FLEETS & MACHINARY.</h1> */}
      </div>
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