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
  query getAllProducts($first: Int) {
  products(first: $first) {
    nodes {
      id
      databaseId
      name
      onSale
      slug
      productCategories{
        nodes{
          image {
            id
            slug
          }
          name
        }
      }
      galleryImages {
        nodes {
          sourceUrl
          title
        }
      }
      image {
        sourceUrl
        title
      }
      description
      sku
      ... on SimpleProduct {
        price
        regularPrice
        salePrice
        id
      }
      ... on VariableProduct {
        price
        regularPrice
        salePrice
        variations {
          nodes {
            price
            regularPrice
            salePrice
          }
        }
      }
    }
  }
}

`
