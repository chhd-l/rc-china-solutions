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
import CaseStudies from '../views/Resources/CaseStudies'
import Blog from '../views/Resources/Blog'
import Technology from '../views/Solutions/Technology'
import NPI from '../views/Solutions/NPI'
import MarketIntelligence from '../views/Solutions/MarketIntelligence'
import CommercialAnalytics from '../views/Solutions/CommercialAnalytics'
import SMI from '../views/Solutions/SMI'
import ProductionScheduling from '../views/Solutions/ProductionScheduling'
import DigitalSupplierCollaboration from '../views/Solutions/DigitalSupplierCollaboration'
import SupplyChainAnalytics from '../views/Solutions/SupplyChainAnalytics'
import AOP from '../views/Solutions/AOP'
import LRP from '../views/Solutions/LRP'
import Revenuemanagementsolutions from '../views/Solutions/Revenuemanagementsolutions'
import Events from '../views/Resources/Events'
import SupplyChainManagementSolutions from '../views/Solutions/SupplyChainManagementSolutions'
import MAM from '../views/Solutions/M&AM'
import MFP from '../views/Solutions/MFP'
import AssortmentPlanning from '../views/Solutions/AssortmentPlanning'
import RDP from '../views/Solutions/RDP'
import RetailAnalytics from '../views/Solutions/RetailAnalytics'
import ReplenishmentPlanning from '../views/Solutions/ReplenishmentPlanning'
import AllocationPlanning from '../views/Solutions/AllocationPlanning'

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
            path: 'integrated-business-planning',
            element: <IntegratedBusinessPlanning />,
          },
          {
            path: 'revenue',
            element: <Revenuemanagementsolutions />,
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
            path: 'technology',
            element: <Technology />,
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
          {
            path: 'digital-supplier-collaboration',
            element: <DigitalSupplierCollaboration />,
          },
          {
            path: 'supply-chain-analytics',
            element: <SupplyChainAnalytics />,
          },
          {
            path: 'annual-operating-plan-budgeting',
            element: <AOP />,
          },
          {
            path: 'long-range-planning-lrp',
            element: <LRP />,
          },
          {
            path: 'supply-chain',
            element: <SupplyChainManagementSolutions />,
          },
          {
            path: 'merchandising',
            element: <MAM />,
          },
          {
            path: 'merchandise-financial-planning',
            element: <MFP />,
          },
          {
            path: 'assortment-planning',
            element: <AssortmentPlanning />,
          },
          {
            path: 'retail-demand-planning',
            element: <RDP />,
          },
          {
            path: 'retail-analytics',
            element: <RetailAnalytics />,
          },
          {
            path: 'replenishment-flow-planning',
            element: <ReplenishmentPlanning />,
          },
          {
            path: 'allocation-planning',
            element: <AllocationPlanning />,
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
          {
            path: 'case-studies',
            element: <CaseStudies />,
          },
          {
            path: 'blog',
            element: <Blog />,
          },
          {
            path: 'events',
            element: <Events />,
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
