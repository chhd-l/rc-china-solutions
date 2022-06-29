import { atom } from 'jotai'
import { type } from 'os'
import { TabElement } from '../views/Apis/Detail'
import { Content } from '../views/Apis/Detail/components/DocumentElement'
import { HttpApiCatalogType } from '../views/Detail/components/RightElement'

const urls = [
  {
    path: ['/console/search'],
    key: 0,
  },
  {
    path: ['/console/apis', '/console/apis/api-details'],
    key: 1,
  },
  {
    path: ['/console/applications', '/console/applications/applicationsDetails'],
    key: 2,
  },
]
const currentPath = () => {
  console.log(window.location.pathname)
  const current = urls.filter((item) => item.path.includes(window.location.pathname))?.[0]?.key
  return current ?? 0
}

type SearchAtomType = {
  current: number
  documentType: Content
  activeTabKey: TabElement
}

export const SearchAtom = atom<SearchAtomType>({
  current: currentPath(),
  documentType: 'Home',
  activeTabKey: 'Documentation',
})

export const HttpApiCatalog = atom<{ name: HttpApiCatalogType }>({ name: 'default' })
