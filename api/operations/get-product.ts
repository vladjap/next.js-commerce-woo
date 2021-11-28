import type { LocalConfig } from '../index'
import { Product } from '@commerce/types/product'
import { GetProductOperation } from '@commerce/types/product'
import type { OperationContext } from '@commerce/api/operations'
import { GetProductOperationQuery, GetProductOperationQueryVariables } from '@framework/schema'
import { getProductQuery } from '../../utils/queries/get-product'
import { normalizeProduct } from '../utils/normalize'

export type ProductVariables = { slug?: string }

export default function getProductOperation({
  commerce,
}: OperationContext<any>) {
  async function getProduct(opts?: {
    variables?: ProductVariables
    config?: Partial<LocalConfig>
    preview?: boolean
  }): Promise<{ product: Product }>

  async function getProduct<T extends GetProductOperation>({
    query = getProductQuery,
    variables: { ...vars } = {},
    config: cfg,
  }: {
    query?: string
    variables?: ProductVariables
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<Product | any> {

    const config = commerce.getConfig(cfg);

    console.log(vars!.slug, 'variables!.slug')
    const v: GetProductOperationQueryVariables = {
      id: vars!.slug || '',
    };
    const { data: as } = await config.fetch<GetProductOperationQuery>(query, {variables: v})
    return {
      product: normalizeProduct(as.product),
    }
  }

  return getProduct
}
