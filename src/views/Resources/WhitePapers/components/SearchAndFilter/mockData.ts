import _ from 'lodash'
import retail_campaign_grocery_blog2 from '../../../../../assets/image/retail-campaign-grocery-blog2-670x335.jpg'
import light_house from '../../../../../assets/image/light-house-670x335.png'
import im_whitepaper_header from '../../../../../assets/image/im-ct-whitepaper-header-670x335.jpg'
import control_tower from '../../../../../assets/image/control-tower-670x335.jpg.webp'
import IBM_whitepaper from '../../../../../assets/image/IBM-whitepaper-1-1-670x335.jpg.webp'
import paid_ads from '../../../../../assets/image/paid-ads_-18-2-670x335.jpg'
import TradePromo_Image2 from '../../../../../assets/image/TradePromo_Image2-1-670x335.jpg.webp'

export const searchItem = [
  {
    title: 'Resource Type',
    list: [
      {
        label: 'Use case(1) ',
        value: 'Use case',
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
    path: retail_campaign_grocery_blog2 as string,
    desc: 'Cheat sheet: Learn how to build a superior demand forecasting model using AI/ML',
  },
  {
    path: light_house as string,
    desc: 'Report: 2022 Gartner® Magic Quadrant™ for Supply Chain Planning Solutions',
  },
  {
    path: im_whitepaper_header as string,
    desc: 'Use Case: Can AI/ML forecasting help improve your forecast accuracy rapidly?',
  },
  {
    path: control_tower as string,
    desc: 'White Paper: The Cure For Broken Apparel, Fashion & Luxury Supply Chains',
  },
  {
    path: IBM_whitepaper as string,
    desc: 'White Paper: Building a superior forecasting model with AI/ML',
  },
  {
    path: paid_ads as string,
    desc: 'White Paper: Managing volatile retail demand with Control Towers for capacity and flow planning.',
  },
  {
    path: TradePromo_Image2 as string,
    desc: 'White Paper: The future of trade promotions',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2022/03/IBM-whitepaper-5-670x335.jpg',
    desc: 'White Paper: How CPG companies gain control from chaos with Control Towers',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/11/Retail_Grocery-670x335.jpg',
    desc: 'White Paper: AI/ML Supply Chain Capabilities for Retailers',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/12/retail-campaign-grocery-blog2-670x335.jpg',
    desc: 'White Paper: Why Digital Transformation Is a Must for Grocery Retailers',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/04/tomasz-frankowski-kBUfvkbFIoE-unsplash-1-670x335.jpg',
    desc: 'White Paper: Can AI/ML forecasting help improve your forecast accuracy rapidly?',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/09/ibm-mockup-header-670x335.jpg',
    desc: 'White Paper (with IBM): Why Brand Manufacturers and Retailers are moving to a Direct-to-Consumer model',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/06/light-house-670x335.png',
    desc: 'White Paper: Supply Chain Control Towers Best Practice for Retail Companies',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/09/poi-report-header2-670x335.jpg',
    desc: 'Analyst Report: POI Vendor Evaluation',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/04/chuttersnap-BNBA1h-NgdY-unsplash-1-670x335.jpg',
    desc: 'White Paper: JDA Allocation & Replenishment replacement',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/08/boxed-water-is-better-7H1hDt694s8-unsplash-1-1-670x335.jpg',
    desc: 'White Paper: Why retailers need to digitally transform their inventory management',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/12/im-ct-whitepaper-header-670x335.jpg',
    desc: 'White Paper: Why Industrial Manufacturers need a Supply Chain Control Tower',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2022/03/control-tower-670x335.jpg',
    desc: 'Use Case: How Retailers and CPG companies are benefiting from next-gen Control Tower and S&OE',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2022/01/IBM-whitepaper-1-1-670x335.jpg',
    desc: 'White Paper: Why retailers need to digitally transform their inventory management',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/12/paid-ads_-18-2-670x335.jpg',
    desc: 'White Paper: Look for the APO replacement that adapts with your business',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/12/highwayheader-670x335.jpg',
    desc: 'White Paper - Multi Tier Supply Planning for the Automotive industry',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/12/Balancing-Sustainability-and-Profitability-in-the-Metal-Industry-1-670x335.jpg',
    desc: 'White Paper: Learn how digital operating models combat complexity in the metals supply chain',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/02/Blue-Escalator-670x335.jpg',
    desc: 'Use Case: How industry leaders improved their forecast accuracy with AI/ML Forecasting',
  },
  {
    path: 'https://o9solutions.com/wp-content/uploads/2021/10/apo-header-image-670x335.jpg',
    desc: 'White Paper: Why FT1000 companies are choosing o9 for their SAP APO Replacement',
  },
]
