import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import SearchEngineOpt from "../components/SearchEngineOpt"
function Recipes() {
  return (
    <Layout>
      <SearchEngineOpt title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}
export default Recipes
