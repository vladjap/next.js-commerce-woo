
export const getProductQuery = /* GraphQL */ `
 query getProductOperation($id: ID!) {
  product(id: $id, idType: SLUG) {
    id
    name
    sku
    slug
    description
    image {
      sourceUrl
      title
    }
    attributes {
      nodes {
        label
        name
        id
        attributeId
        options
      }
    }
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
          attributes {
            nodes {
              label
              name
              id
              attributeId
            }
          }
        }
      }
    }
  }
}

`

