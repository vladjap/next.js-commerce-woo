
export const getAllProductPathsQuery = /* GraphQL */ `
query getAllProductPaths($first: Int = 100) {
  products(first: $first) {
    nodes {
      slug
    }
  }
}

`
