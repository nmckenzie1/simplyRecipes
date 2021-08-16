import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby chicharrones pabst twee vinyl.</h2>
            <p>
              Activated charcoal beard poutine swag, pok pok kickstarter
              succulents +1 ugh.
            </p>
            <p>
              You probably haven't heard of them iPhone vexillologist deep v
              glossier hella single-origin coffee.{" "}
            </p>
            <Link to="contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt in bowl"
            className="about-img"
            placeholder="blurred"
          ></StaticImage>
        </section>
      </main>
    </Layout>
  )
}

export default About
