import { RouteObject } from 'react-router-dom'
import Layout from '../components/common/Layout'
import Home from '../views/Home'
import SupplyChainControlTower from '../views/Solutions/SupplyChainControlTower'
import Resources from '../views/Resources'
import Solutions from '../views/Solutions'

const routers: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'solutions',
        children: [
          {
            element: <Solutions />,
            index: true,
          },
          {
            path: 'supplychaincontroltower',
            element: <SupplyChainControlTower />,
          },
        ],
      },
      {
        path: '/resources',
        children: [
          {
            index: true,
            element: <Resources />,
          },
        ],
      },
    ],
  },
]

export default routers
