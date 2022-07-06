import { Col, Row } from 'antd'
import arrow_down from '../../../assets/image/arrow-down.svg'
import The_platform_EKG_1 from '../../../assets/image/The-platform-EKG-1.svg'
import { tabData_First, tabData_Second } from '../modules/Platform'
import MyTab from './components/MyTab'
import './index.less'

const Platform = () => {
  return (
    <div>
      <Row justify="center">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 20 }}>
          <p className=" text-rc20 font-bold border-b border-black  pb-rc15 pt-rc30 mb-rc_10">Our technology</p>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 15 }}>
          <p className=" text-rc72 animate__animated animate__fadeInUp leading-rc75">
            A cloud-native platform built to <span className="text-black underline">scale</span>. Essential to your
            digital transformation vision
          </p>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 5 }} xl={{ span: 5 }}>
          <a href="#content" className="h-full pb-rc58 flex items-end justify-end w-full ">
            <img src={arrow_down} alt="" width={212} height={212} className="downarrow" />
          </a>
        </Col>
      </Row>
      <Row justify="center" className="bg-black  mt-rc_10">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 18 }}>
          <div className=" mt-_rc10">
            <a
              href="https://www.youtube.com/watch?v=rmLK2yNDQf8"
              className="h-rc600 w-full flex items-end justify-center"
            >
              <video loop autoPlay muted playsInline preload="auto" className="w-full h-full">
                <source
                  src="https://o9solutions.com/wp-content/uploads/2020/09/o9Solutions-Home-Thumnail-1.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </a>
          </div>
        </Col>
        <Col
          xs={{ span: 18 }}
          sm={{ span: 16 }}
          md={{ span: 19 }}
          lg={{ span: 18 }}
          xl={{ span: 13 }}
          id="content"
          // className="animate__animated animate__fadeInDown"
        >
          <p className=" text-white text-rc45 mt-rc_7 leading-rc56 pb-rc_7">
            Deploy out of the box planning & analytics solutions and{' '}
            <span className=" text-gray-999">
              add in your in-house analytics. Create a differentiated digital operating model.
            </span>
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 18 }} sm={{ span: 19 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 14 }}>
          <p className=" text-rc45 mt-rc_10 leading-rc56">
            Gain insights like never before through a patented graph-based technology.
          </p>
          <p className="text-rc17 ">
            Deloitte’s game changing Enterprise Knowledge Graph (EKG) provides the richness of modeling & computations
            to power next-generation Business applications.
          </p>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 16 }}>
          <img src={The_platform_EKG_1} alt="" className="w-full h-full my-rc30" />
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 14 }}>
          <p className=" text-rc24 mt-rc90">
            The <strong className=" font-semibold">Deloitte EKG</strong>, with the fully connected representation,
            allows for:
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 7 }}>
          <p className=" text-rc17 border-t border-black mr-rc30 pt-rc15">
            <strong>Multi-dimensional models</strong> at appropriate levels of detail.
          </p>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 7 }}>
          <p className=" text-rc17 border-t border-black pt-rc15">
            <strong>Fully linked models</strong> to rapidly propagate all changes
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 7 }}>
          <p className=" text-rc17 border-t  border-black mr-rc30 pt-rc15">
            Built in support for <strong>lightning-fast aggregation</strong> and <strong>disaggregation</strong> along
            any number of hierarchies.
          </p>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 7 }}>
          <p className=" text-rc17 border-t  border-black pt-rc15">
            Ability to incorporate necessary structured and unstructured data in{' '}
            <strong>driving all analytics and decisions.</strong>
          </p>
        </Col>
      </Row>
      <Row justify="center" className="bg-gray-100">
        <Col xs={{ span: 18 }} sm={{ span: 22 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 14 }}>
          <p className="text-rc45  mt-rc_15 leading-rc56">
            Activate impactful AI capabilities on a wide range of applications,{' '}
            <span className=" text-gray-999"> from prediction to clustering & segmentation.</span>
          </p>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 22 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 14 }}>
          <Row justify="center">
            <Col xs={{ span: 18 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }} xl={{ span: 12 }}>
              <p className=" text-rc17 border-t  border-black mr-rc30 pt-rc15">
                Rich representation in a Graph model allows for efficient storage of internal & external drivers for AI
                models. AI then delivers high-fidelity results by applying domain specific knowledge to create impactful
                ML models.
              </p>
            </Col>
            <Col xs={{ span: 18 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }} xl={{ span: 12 }}>
              <p className=" text-rc17 border-t  border-black  pt-rc15">
                Eliminate the black box. Gain clear visibility to both internal and external drivers and their impact on
                the AI output.
              </p>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 18 }}
          sm={{ span: 22 }}
          md={{ span: 19 }}
          lg={{ span: 18 }}
          xl={{ span: 14 }}
          className=" pb-rc_7"
        >
          <MyTab paneData={tabData_First} />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 14 }}>
          <p className="text-rc45  mt-rc_15 leading-rc56">
            Enable an environment for your Data Science & Analytics teams.
            <span className=" text-gray-999">
              {' '}
              Deliver targeted analysis faster and in tighter collaboration with business teams.
            </span>
          </p>
          <p className="text-rc17 ">
            Native support to the two biggest data science platforms — R and Python. Powerful development environments
            allow to bring existing Python/R models in an easy-to-use production system
          </p>
        </Col>
        <Col
          xs={{ span: 18 }}
          sm={{ span: 22 }}
          md={{ span: 19 }}
          lg={{ span: 18 }}
          xl={{ span: 14 }}
          className=" pt-rc_5"
        >
          <MyTab paneData={tabData_Second} />
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 14 }}>
          <p className="text-rc45  leading-rc56">
            No more spinning cursors
            <span className=" text-gray-999"> when you ask a question or make an edit.</span>
          </p>
          <p className="text-rc17 ">
            Deloitte delivers unprecedented performance for analytics & live decisions on the platform
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Platform
