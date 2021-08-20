import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/Layout"
import SearchEngineOpt from "../components/SearchEngineOpt"
const TagTemplate = ({ data, pageContext }) => {
  const recipe = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SearchEngineOpt title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipe}></RecipesList>
        </div>
      </main>
    </Layout>
  )
}

export default TagTemplate

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
