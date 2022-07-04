import ViewFifthPart from './components/ViewFifthPart'
import ViewFourthPart from './components/ViewFourthPart'
import { ViewPortDesktop } from './components/ViewPortDesktop'
import ViewSecondPart from './components/ViewSecondPart'
import ViewThirdPart from './components/ViewThirdPart'

export default function Home() {
  return (
    <div>
      <ViewPortDesktop />
      <ViewSecondPart />
      <ViewThirdPart />
      <ViewFourthPart />
      <ViewFifthPart />
    </div>
  )
}
