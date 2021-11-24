import { getCommerceProvider, useCommerce as useCoreCommerce } from '@commerce'
import { wooProvider, WooProvider } from './provider'

export { wooProvider }
export type { WooProvider }

export const CommerceProvider = getCommerceProvider(wooProvider)

export const useCommerce = () => useCoreCommerce<WooProvider>()
