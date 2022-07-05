import ViewFifthPart from './components/ViewFifthPart'
import ViewFourthPart from './components/ViewFourthPart'
import { ViewPortDesktop } from './components/ViewPortDesktop'
import ViewSecondPart from './components/ViewSecondPart'
import ViewSeventhPart from './components/ViewSeventhPart'
import ViewSixthPart from './components/ViewSixthPart'
import ViewThirdPart from './components/ViewThirdPart'

export default function Home() {
  return (
    <div>
      <ViewPortDesktop />
      <ViewSecondPart />
      <ViewThirdPart />
      <ViewFourthPart />
      <ViewFifthPart />
      <ViewSixthPart />
      <ViewSeventhPart />
    </div>
  )
}
