import HooksDemo from './sections/HooksDemo'
import ContextDemo from './sections/ContextDemo'
import ZustandDemo from './sections/ZustandDemo'
import FormDemo from './sections/FormDemo'
import SuspenseDemo from './sections/SuspenseDemo'

export default function Playground() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Playground</h1>
      <HooksDemo />
      <ContextDemo />
      <ZustandDemo />
      <FormDemo />
      <SuspenseDemo />
    </div>
  )
}
