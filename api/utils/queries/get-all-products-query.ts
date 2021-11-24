// import { searchResultFragment } from '../fragments/search-result-fragment'

// export const getAllProductsQuery = /* GraphQL */ `
//   query getAllProducts($input: SearchInput!) {
//     search(input: $input) {
//       items {
//         ...SearchResult
//       }
//     }
//   }
//   ${searchResultFragment}
// `

export const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts {
     products {
      nodes {
        id
        databaseId
        name
        onSale
        slug
        image {
          sourceUrl
        }
      }
    }
  }
`
// query MyQuery {
//   products(limit: 3){
//     product_id
//     name
//   }
// }
