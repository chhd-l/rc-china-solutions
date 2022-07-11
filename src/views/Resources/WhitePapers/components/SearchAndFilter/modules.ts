import _ from 'lodash'
import retail_campaign_grocery_blog2 from '../../../../../assets/image/retail-campaign-grocery-blog2-670x335.jpg'
import light_house from '../../../../../assets/image/light-house-670x335.png'
import im_whitepaper_header from '../../../../../assets/image/im-ct-whitepaper-header-670x335.jpg'
import control_tower from '../../../../../assets/image/control-tower-670x335.jpg.webp'
import IBM_whitepaper from '../../../../../assets/image/IBM-whitepaper-1-1-670x335.jpg.webp'
import paid_ads from '../../../../../assets/image/paid-ads_-18-2-670x335.jpg'

export const searchItem = [
  {
    title: 'Resource Type',
    list: [
      {
        label: 'Use case(1) ',
        value: 'Use case ',
      },
      {
        label: 'White paper(4)',
        value: 'White paper',
      },
    ],
  },
  {
    title: 'Industries',
    list: [
      {
        value: 'Brand Manufacturing',
        label: 'Brand Manufacturing(1)',
      },
      {
        label: 'Industrial Manufacturing(2)',
        value: 'Industrial Manufacturing',
      },
      {
        label: 'Retail(5)',
        value: 'Retail',
      },
    ],
  },
  {
    title: 'Solutions',
    list: [
      {
        label: 'Control Tower(3)',
        value: 'Control Tower',
      },
      {
        label: 'Demand Planning(1)',
        value: 'Demand Planning',
      },
      {
        label: 'IBP(1)',
        value: 'IBP',
      },
      {
        label: 'S&OP(1)',
        value: 'S&OP',
      },
    ],
  },
]
export const SearchValue = _.flatten(searchItem.map((item) => item.list.map((child) => child.label)))
export const searchContent = [
  {
    path: retail_campaign_grocery_blog2,
    desc: 'Cheat sheet: Learn how to build a superior demand forecasting model using AI/ML',
  },
  {
    path: light_house,
    desc: 'Report: 2022 Gartner® Magic Quadrant™ for Supply Chain Planning Solutions',
  },
  {
    path: im_whitepaper_header,
    desc: 'Use Case: Can AI/ML forecasting help improve your forecast accuracy rapidly?',
  },
  {
    path: control_tower,
    desc: 'White Paper: The Cure For Broken Apparel, Fashion & Luxury Supply Chains',
  },
  {
    path: IBM_whitepaper,
    desc: 'White Paper: Building a superior forecasting model with AI/ML',
  },
  {
    path: paid_ads,
    desc: 'White Paper: Managing volatile retail demand with Control Towers for capacity and flow planning.',
  },
]
