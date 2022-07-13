export const solutionsData = [
  {
    title: 'Top solutions',
    path: '/solutions',
    list: [
      {
        label: 'Demand Planning',
        path: '/solutions/demand-planning',
      },
      {
        label: 'S&OP',
        path: '/solutions/sales-operations-planning',
      },
      {
        label: 'Sustainability',
        path: '/solutions/sustainability',
      },
      {
        label: 'Supply Chain Control Tower',
        path: '/solutions/supply-chain-control-tower',
      },
      {
        label: 'Integrated Business Planning (IBP)',
        path: '/solutions/integrated-business-planning',
      },
      {
        label: 'Supply Chain Master Planning',
        path: '/solutions/supply-chain-master-planning',
      },
      {
        label: 'Revenue Growth Management',
        path: '/solutions/revenue-growth-management',
      },
      {
        label: 'Supply Chain & Logistics for Retail',
        path: '/solutions/supply-chain-logistics',
      },
    ],
  },
  {
    title: 'Platform',
    path: '/solutions/platform',
    list: [
      {
        label: 'DTC platform',
        path: '',
      },
      {
        label: 'The Digital Brain',
        path: '/solutions/the-digital-brain',
      },
      {
        label: 'Technology',
        path: '/solutions/technology',
      },
    ],
  },
  // {
  //   title: 'Revenue Growth Management',
  //   path: '/solutions/revenue-growth-management',
  //   list: [],
  // },
]

export const resourcesData = [
  {
    title: 'Resources',
    list: [
      {
        label: 'White Papers',
        path: '/resources/white-papers',
      },
      {
        label: 'Case Studies',
        path: '/resources/case-studies',
      },
      {
        label: 'Deloitte Blog',
        path: '/resources/blog',
      },
      {
        label: 'Events',
        path: '/resources/events',
      },
    ],
  },
]

export const MenuData = [
  {
    label: 'Solutions',
    path: 'solutions',
    children: solutionsData,
  },
  {
    label: 'Resources',
    path: '/resources',
    children: resourcesData,
  },
] as const
