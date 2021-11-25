import { Product } from '@commerce/types/product'
import { ExternalProduct } from '@framework/schema'

export function normalizeProduct(item: ExternalProduct): Product {
  console.log(item, 'ITEM')
  const numberPattern = /\d+/g
  const priceArr = item.price?.match(numberPattern)
  let price: number = 0;
  if (Array.isArray(priceArr) && priceArr.length > 0) {
    price = +priceArr[0]
  }
  return {
    id: item.id,
    name: item.name || '',
    description: item.description || '',
    slug: item.slug || '',
    path: item.slug || '',
    images: [{ url: item.image?.sourceUrl || '' }],
    variants: [],
    price: {
      value: price,
      currencyCode: 'EUR',
    },
    options: [],
    sku: item.sku || '',
  }
}
