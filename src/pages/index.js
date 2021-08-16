import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <hero className="hero-text">
              <h1>simply recipes</h1>
              <h2>no fluff, just recipes</h2>
            </hero>
          </div>
        </header>
      </main>
    </Layout>
  )
}
export default Home
