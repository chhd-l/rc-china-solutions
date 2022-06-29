import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function useScrollToTop(id: string, refreshData?: any) {
  const location = useLocation()
  useEffect(() => {
    // window.scrollTo({ top: 0 })
    document.getElementById(id)?.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, refreshData])
}
