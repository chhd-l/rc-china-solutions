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
import RevenueGrowthManagement from '../views/Solutions/RevenueGrowthManagement'
import SalesOperationsPlanning from '../views/Solutions/SalesOperationsPlanning'
import WhitePapers from '../views/Resources/WhitePapers'
import MasterPlanning from '../views/Solutions/MasterPlanning'
import SupplyChainLogistics from '../views/Solutions/SupplyChainLogistics'
import NPI from '../views/Solutions/NPI'
import MarketIntelligence from '../views/Solutions/MarketIntelligence'
import CommercialAnalytics from '../views/Solutions/CommercialAnalytics'
import SMI from '../views/Solutions/SMI'
import ProductionScheduling from '../views/Solutions/ProductionScheduling'

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
          {
            path: 'revenue-growth-management',
            element: <RevenueGrowthManagement />,
          },
          {
            path: 'sales-operations-planning',
            element: <SalesOperationsPlanning />,
          },
          {
            path: 'supply-chain-master-planning',
            element: <MasterPlanning />,
          },
          {
            path: 'supply-chain-logistics',
            element: <SupplyChainLogistics />,
          },
          {
            path: 'npi-planning',
            element: <NPI />,
          },
          {
            path: 'market-intelligence',
            element: <MarketIntelligence />,
          },
          {
            path: 'commercial-analytics',
            element: <CommercialAnalytics />,
          },
          {
            path: 'marketing-effectiveness-planning',
            element: <SMI />,
          },
          {
            path: 'production-scheduling',
            element: <ProductionScheduling />,
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
          {
            path: 'white-papers',
            element: <WhitePapers />,
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
