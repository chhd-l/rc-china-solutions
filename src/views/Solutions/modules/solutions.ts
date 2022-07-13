import red_1 from '../../../assets/image/red_1@2x.png'
import red_2 from '../../../assets/image/red_2@2x.png'
import red_3 from '../../../assets/image/red_3@2x.png'
import red_4 from '../../../assets/image/red_4@2x.png'
import red_5 from '../../../assets/image/red_5@2x.png'
import red_6 from '../../../assets/image/red_6@2x.png'
import Purple_1 from '../../../assets/image/Purple_1@2x.png'
import Purple_2 from '../../../assets/image/Purple_2@2x.png'
import Purple_3 from '../../../assets/image/Purple_3@2x.png'
import Purple_4 from '../../../assets/image/Purple_4@2x.png'
import greed_1 from '../../../assets/image/greed_1@2x.png'
import greed_2 from '../../../assets/image/greed_2@2x.png'
import greed_3 from '../../../assets/image/greed_3@2x.png'
import orange_1 from '../../../assets/image/orange_1@2x.png'
import orange_2 from '../../../assets/image/orange_2@2x.png'
import orange_3 from '../../../assets/image/orange_3@2x.png'
import orange_4 from '../../../assets/image/orange_4@2x.png'
import bule_1 from '../../../assets/image/bule_1@2x.png'
import bule_2 from '../../../assets/image/bule_2@2x.png'

export const ManagementItem = [
    {
        title: 'Revenue Management',
        url: '/solutions/revenue',
        color: 'hoverRed',
        children: [
            {
                url: '/solutions/revenue-growth-management',
                icon: red_1,
                span: 'Revenue Management',
                plan: 'Revenue Growth Management'
            },
            {
                url: '/solutions/demand-planning',
                icon: red_2,
                span: 'Revenue Management',
                plan: 'Demand Planning'
            },
            {
                url: '/solutions/npi-planning',
                icon: red_3,
                span: 'Revenue Management',
                plan: 'Npl Planning'
            },
            {
                url: '/solutions/market-intelligence',
                icon: red_4,
                span: 'Revenue Management',
                plan: 'Market Intelligence'
            },
            {
                url: '/solutions/commercial-analytics',
                icon: red_5,
                span: 'Revenue Management',
                plan: 'Commercial Analytics'
            },
            {
                url: '/solutions/marketing-effectiveness-planning',
                icon: red_6,
                span: 'Revenue Management',
                plan: 'Sales & Marketing Initiatives'
            },
        ]
    },
    {
        title: 'Supply Chain Management',
        url: '/solutions/supply-chain',
        color: 'hoverPurple',
        children: [
            {
                url: '/solutions/supply-chain-master-planning',
                icon: Purple_1,
                span: 'Supply Chain',
                plan: 'Supply Chain Master Planning'
            },
            {
                url: '/solutions/production-scheduling',
                icon: Purple_1,
                span: 'Supply Chain',
                plan: 'Production Scheduling'
            },
            {
                url: '/solutions/supply-chain-control-tower',
                icon: Purple_2,
                span: 'Supply Chain',
                plan: 'Supply chain Control Tower'
            },
            {
                url: '/solutions/digital-supplier-collaboration',
                icon: Purple_3,
                span: 'Supply Chain',
                plan: 'Digital Supplier Collaboration'
            },
            {
                url: '/solutions/supply-chain-analytics',
                icon: Purple_4,
                span: 'Supply Chain',
                plan: 'Supply Chain Analytics'
            },
        ]
    },
    {
        title: 'Integrated Business Planning ( IBP )',
        url: '/solutions/integrated-business-planning',
        color: 'hoverGreed',
        children: [
            {
                url: '/solutions/sales-operations-planning',
                icon: greed_1,
                span: 'IBP',
                plan: 'Sales & Operations Planning (S&OP)'
            },
            {
                url: '/solutions/annual-operating-plan-budgeting',
                icon: greed_2,
                span: 'IBP',
                plan: 'Annual Operating Plan (AOP) & Budaeting'
            },
            {
                url: '/solutions/long-range-planning-lrp',
                icon: greed_3,
                span: 'IBP',
                plan: 'Long Range Planning (LRP)'
            },
        ]
    },
    {
        title: 'Merchandising & Assortment Management',
        url: '/solutions/merchandising',
        color: 'hoverOrange',
        children: [
            {
                url: '/solutions/merchandise-financial-planning',
                icon: orange_1,
                span: 'Merchandising',
                plan: 'Merchandise Financial Planning'
            },
            {
                url: '/solutions/assortment-planning',
                icon: orange_2,
                span: 'Merchandising',
                plan: 'Assortment Planning'
            },
            {
                url: '/solutions/retail-demand-planning',
                icon: orange_3,
                span: 'Merchandising',
                plan: 'Retail Demand Planning'
            },
            {
                url: '/solutions/retail-analytics',
                icon: orange_4,
                span: 'Merchandising',
                plan: 'Retail Analytics'
            },
        ]
    },
    {
        title: 'Supply Chain Logistics for Retail',
        url: '/solutions/supply-chain-logistics',
        color: 'hoverBlue',
        children: [
            {
                url: '/solutions/replenishment-flow-planning',
                icon: bule_1,
                span: 'Supply Chain Logistics',
                plan: 'Replenishment Planning'
            },
            {
                url: '/solutions/allocation-planning',
                icon: bule_2,
                span: 'Supply Chain Logistics',
                plan: 'Allocation Planning'
            },
        ]
    },
]