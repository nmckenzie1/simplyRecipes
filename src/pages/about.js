import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SearchEngineOpt from "../components/SearchEngineOpt"
const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SearchEngineOpt title="About" />
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
        <section className="featured-recipes">
          <h5>Look at this Stuff Here!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export default About
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
