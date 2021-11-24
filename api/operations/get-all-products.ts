import { Product } from '@commerce/types/product'
import { GetAllProductsOperation } from '@commerce/types/product'
import type { OperationContext } from '@commerce/api/operations'
import { GetAllProductsQuery } from '../../schema'
import type { LocalConfig, Provider } from '../index'
import { getAllProductsQuery } from '../utils/queries/get-all-products-query';

import data from '../../data.json'

export type ProductVariables = { first?: number }


export default function getAllProductsOperation({
  commerce,
}: OperationContext<any>) {
  async function getAllProducts(opts?: {
    variables?: ProductVariables
    config?: Partial<LocalConfig>
    preview?: boolean
  }): Promise<{ products: Product[] }>

  async function getAllProducts<T extends GetAllProductsOperation>({
    query = getAllProductsQuery,
    variables: { ...vars } = {},
    config: cfg,
  }: {
    query?: string
    variables?: T['variables']
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<{ products: Product[] | any[] }> {

    console.log(query, 'query');
    const config = commerce.getConfig(cfg);
    console.log(config, 'cfg');

    const variables = {
      input: {
        take: vars.first,
        groupByProduct: true,
      },
    }

    console.log(variables, 'variables');
    // console.log(query, 'query');
    // console.log(variables, 'variables');
    // console.log(config, 'config');
    // console.log(data.products, 'products')
//
    const { data } = await config.fetch<GetAllProductsQuery>(query)

    console.log(data, 'data');


    return {
      products: data.products,
    }
  }
  return getAllProducts
}
