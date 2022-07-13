import { Input, Select } from 'antd'
import { UserSubmissionbody } from '../../../views/Solutions/modules/UserSubmisstion'
import './index.less'

const UserSubmission = ({ title }: { title: any }) => {
  return (
    <section className="UserSubmission flex bg-gray-300" id="RelatedSolutions">
      <div className="mr-rc60 pr-rc60 flex-1 text-rc35 leading-rc43">{title}</div>
      <div className="flex-1">
        <Input className="text-rc15 bg-gray-300" placeholder="(Company) Email" />
        <Input
          placeholder="___ ___ ___"
          className="inputPhont mt-rc16"
          addonBefore={
            <Select defaultValue="China (中国)" className="text-rc17">
              {UserSubmissionbody.map((item, idx) => (
                <Select.Option key={idx} value={item.Code}>
                  {item.value}
                </Select.Option>
              ))}
            </Select>
          }
        />
        <div className="leading-normal bg-green00c178 text-white text-rc17 flex justify-center items-center rounded-full py-rc10 hover:opacity-90 transition-all mt-rc20">
          Talk to an expert
        </div>
      </div>
    </section>
  )
}

export default UserSubmission
