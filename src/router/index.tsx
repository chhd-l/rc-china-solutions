import { RouteObject } from 'react-router-dom'
import Layout from '../components/common/Layout'
import Home from '../views/Home'
import SupplyChainControlTower from '../views/Solutions/SupplyChainControlTower'
import Resources from '../views/Resources'
import Solutions from '../views/Solutions'
import TheDigitalBrain from '../views/Solutions/TheDigitalBrain'
import DemandPlanning from '../views/Solutions/DemandPlanning'
import Platform from '../views/Solutions/Platform'
import Sustainability from '../views/Solutions/Sustainability'
import IntegratedBusinessPlanning from '../views/Solutions/IntegratedBusinessPlanning'
import Security from '../views/Solutions/Security'

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
            path: 'supply-chain-control-tower',
            element: <SupplyChainControlTower />,
          },
          {
            path: 'the-digital-brain',
            element: <TheDigitalBrain />,
          },
          {
            path: 'demand-planning',
            element: <DemandPlanning />,
          },
          {
            path: 'platform',
            element: <Platform />,
          },
          {
            path: 'sustainability',
            element: <Sustainability />,
          },
          {
            path: 'integratedBusinessPlanning',
            element: <IntegratedBusinessPlanning />,
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
      {
        path: 'security',
        element: <Security />,
      },
    ],
  },
]

export default routers
