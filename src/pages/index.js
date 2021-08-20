import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SearchEngineOpt from "../components/SearchEngineOpt"
function Home() {
  return (
    <Layout>
      <SearchEngineOpt title="Home" />
      <main>
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h2>no fluff, just recipes</h2>
            </div>
          </div>
        </header>
      </main>
      <AllRecipes />
    </Layout>
  )
}
export default Home
