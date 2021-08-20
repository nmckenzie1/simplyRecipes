import React from "react"
import Layout from "../components/Layout"
import SearchEngineOpt from "../components/SearchEngineOpt"
function Error() {
  return (
    <Layout>
      <SearchEngineOpt title="Error" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
        </section>
      </main>
    </Layout>
  )
}
export default Error
