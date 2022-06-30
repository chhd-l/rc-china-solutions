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
        path: '/solutions',
        element: <Solutions />,
        children: [
          {
            path: 'SupplyChainControlTower',
            element: <SupplyChainControlTower />,
            children: [],
          },
        ],
      },
      {
        path: '/resources',
        element: <Resources />,
        children: [],
      },
    ],
  },
]

export default routers
