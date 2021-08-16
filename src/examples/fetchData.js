import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  console.log(useStaticQuery(getData))
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return <div>site title is : {title}</div>
}

export default FetchData
