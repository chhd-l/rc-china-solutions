export const solutionsData = [
  {
    title: 'Top solutions',
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
        path: '',
      },
      {
        label: 'Supply Chain Master Planning',
        path: '',
      },
      {
        label: 'Revenue Growth Management',
        path: '',
      },
    ],
  },
  {
    title: 'Platform',
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
]

export const resourcesData = [
  {
    title: 'Resources',
    list: [
      {
        label: 'White Papers',
        path: '',
      },
      {
        label: 'Case Studies',
        path: '',
      },
      {
        label: ':Deloitte Blog',
        path: '',
      },
      {
        label: 'Events',
        path: '',
      },
    ],
  },
  {
    title: 'aim10x',
    list: [
      {
        label: 'Webinars',
        path: '',
      },
      {
        label: 'Podcast',
        path: '',
      },
      {
        label: 'Executive Council',
        path: '',
      },
      {
        label: 'Innovators Network',
        path: '',
      },
      {
        label: 'Roundtables',
        path: '',
      },
      {
        label: 'aim10x blog',
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
