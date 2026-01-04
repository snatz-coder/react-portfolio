import HooksDemo from './sections/HooksDemo'
import ContextDemo from './sections/ContextDemo'
import ProjectDemo from './sections/ProjectDemo'

export default function Playground() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Playground</h1>
      <HooksDemo />
      <ContextDemo />
      <h1 className="text-3xl font-bold">Projects</h1>
      <ProjectDemo />
    </div>
  )
}
