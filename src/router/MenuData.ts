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
        path: '',
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
        path: '/solutions/integratedBusinessPlanning',
      },
      {
        label: 'Supply Chain Master Planning',
        path: '',
      },
      {
        label: 'Revenue Growth Management',
        path: '/solutions/revenue-growth-management',
      },
      {
        label: 'Supply Chain & Logistics for Retail',
        path: '',
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
        path: '',
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
        path: '',
      },
      {
        label: 'Deloitte Blog',
        path: '',
      },
      {
        label: 'Events',
        path: '',
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
