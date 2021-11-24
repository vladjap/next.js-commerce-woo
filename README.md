# Next.js Commerce WooCommerce Provider

Integration provider for WordPress WooCommerce headless CMS. (Work in progress, curently only list is implented)

This project is framework for next.js commerce. It should be placed in **framework** folder inside commerce project (https://github.com/vercel/commerce)

Set constants in commerce project .env file:
* COMMERCE_PROVIDER=woo
* NEXT_PUBLIC_WOO_SHOP_API_URL - woocommerce graphql endpoint
* NEXT_PUBLIC_WOO_LOCAL_URL - 

## WP WooCommerce settings
Framework is based on GraphQL API exposed with *WP GraphQL* and *WPGraphQL WooCommerce (WooGraphQL)* plugins. It will not work with other plugins if GraphQL schema is different. 

Required WP plugins:
* WP GraphQL
* WPGraphQL WooCommerce (WooGraphQL)


### Goals:
- [ ] Get products
  - [x] List
  - [ ] Single
  - [ ] Search
  - [ ] Recommended
- [ ] Cart
- [ ] Checkout
  - [ ] Without payment
  - [ ] With payment (Stripe or PayPal for MVP)
- [ ] Auth
  - [ ] Log in
  - [ ] Log out
  - [ ] Sign up
- [ ] Wishlist
