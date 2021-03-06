import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SearchEngineOpt from "../components/SearchEngineOpt"
function Contact({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  return (
    <Layout>
      <SearchEngineOpt title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch</h3>
            <p>
              I'm baby irony everyday carry succulents shaman hella pickled.
              Iceland gentrify lyft, tofu echo park flexitarian put a bird on it
              chartreuse listicle thundercats fixie fam before they sold out
              bespoke.
            </p>
            <p>
              YOLO photo booth snackwave, austin irony brooklyn marfa banjo
              ethical occupy wolf banh mi.
            </p>
            <p>
              Subway tile squid mustache single-origin coffee crucifix everyday
              carry skateboard poke.{" "}
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xknkpvqn"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Stuff Here!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export default Contact
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
