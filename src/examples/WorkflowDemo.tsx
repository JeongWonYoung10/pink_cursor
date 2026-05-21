import { JourneyDemo, DiffReview } from "../patterns";
import { Card, Button } from "../components/primitives";

export function WorkflowDemo() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-6 py-10">
      <JourneyDemo />
      <DiffReview />
      <Card variant="gradient" className="p-8 text-center"><h2 className="text-4xl font-semibold tracking-[-0.05em]">Changes feel polished.</h2><p className="mx-auto mt-3 max-w-xl text-white/80">6 files updated, 42 additions, 0 warnings. The user is ready to merge.</p><Button variant="secondary" className="mt-6">Share final preview</Button></Card>
    </main>
  );
}
