import { atom } from 'jotai'

type HttpApiCatalogType = {}

export const HttpApiCatalog = atom<{ name: HttpApiCatalogType }>({ name: 'default' })
