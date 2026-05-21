import { useState } from "react";
import { Button } from "./components/primitives";
import { LandingPage } from "./examples/LandingPage";
import { ProductShowcase } from "./examples/ProductShowcase";
import { WorkflowDemo } from "./examples/WorkflowDemo";
import { SlidePreview } from "./examples/SlidePreview";

const views = ["Landing", "Product", "Workflow", "Slides"] as const;
type View = typeof views[number];

export default function App() {
  const [view, setView] = useState<View>("Landing");
  return (
    <div>
      <nav className="sticky top-4 z-50 mx-auto mt-4 flex max-w-4xl justify-center gap-2 rounded-bc2xl border border-white/75 bg-white/55 p-2 shadow-bcSoft backdrop-blur-2xl">
        {views.map((item) => <Button key={item} variant={view === item ? "primary" : "secondary"} className="h-9 px-4 text-xs" onClick={() => setView(item)}>{item}</Button>)}
      </nav>
      {view === "Landing" && <LandingPage />}
      {view === "Product" && <ProductShowcase />}
      {view === "Workflow" && <WorkflowDemo />}
      {view === "Slides" && <SlidePreview />}
    </div>
  );
}
