import { Product, ProductImage, ProductOption } from '@commerce/types/product'
import { ExternalProduct, SimpleProduct, VariableProduct } from '@framework/schema'

const getPriceFromString: (price: string) => number = (price: string) => {
  if (!price) return 0
  const numberPattern: RegExp = /\d+/g
  const priceArr: RegExpMatchArray | null | undefined = price?.match(numberPattern)
  if (Array.isArray(priceArr) && priceArr.length > 0) {
    return +priceArr[0]
  }
  return 0
}
export function normalizeProduct(item: (VariableProduct | SimpleProduct)): Product {
  let images: ProductImage[] = []
  if (Array.isArray(item?.galleryImages?.nodes)) {
    images = item?.galleryImages?.nodes.map(imgItem => {
      return {
        url: imgItem?.sourceUrl,
        alt: imgItem?.title,
      } as ProductImage
    }) || []
  }

  let options: ProductOption[] = item?.attributes?.nodes?.map(node => {
    return {
      id: node?.id || '',
      displayName: node?.label || '',
      values: node?.options?.map(opt => ({ label: opt })) || []
    } as ProductOption
  }) || []

  return {
    id: item.id,
    name: item.name || '',
    description: item.description || '',
    slug: item.slug || '',
    path: item.slug || '',
    images: item.image?.sourceUrl ? [{ url: item.image?.sourceUrl || '', alt: item.image?.title }, ...images] as ProductImage[] : [] as ProductImage[],
    variants: [],
    price: {
      value: getPriceFromString(item?.price || ''),
      currencyCode: 'EUR',
    },
    options,
    sku: item.sku || '',
  }
}
