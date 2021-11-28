import { Product } from '@commerce/types/product'
import type { OperationContext } from '@commerce/api/operations'
import { ExternalProduct, GetAllProductsQuery, SimpleProduct, VariableProduct } from '../../schema'
import type { LocalConfig, Provider } from '../index'
import { getAllProductsQuery } from '../../utils/queries/get-all-products-query'

import { normalizeProduct } from '../utils/normalize'

export type ProductVariables = { first?: number }


export default function getAllProductsOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getAllProducts(opts?: {
    variables?: ProductVariables
    config?: Partial<LocalConfig>
    preview?: boolean
  }): Promise<{ products: Product[] }>

  async function getAllProducts({
    query = getAllProductsQuery,
    variables: { ...vars } = {},
    config: cfg,
  }: {
    query?: string
    variables?: ProductVariables
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<{ products: Product[] | any[] }> {

    const config = commerce.getConfig(cfg);


    const { data } = await config.fetch<GetAllProductsQuery>(query, {variables: vars})

    return {
      products: data.products?.nodes?.map(item => normalizeProduct(item as (VariableProduct | SimpleProduct))) || null as any,
    }
  }
  return getAllProducts
}
