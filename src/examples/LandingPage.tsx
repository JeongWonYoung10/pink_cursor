import { Sparkles } from "lucide-react";
import { Button, Card, Badge } from "../components/primitives";
import { EditorShell, JourneyDemo } from "../patterns";

export function LandingPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section className="grid min-h-[720px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Badge variant="status" className="mb-6"><Sparkles className="mr-1 h-3.5 w-3.5 text-blush-action" /> Blush-first AI workspace</Badge>
          <h1 className="max-w-2xl text-6xl font-semibold leading-[0.95] tracking-[-0.07em] text-plum-strong md:text-7xl">A softer command center for creative code.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-plum-muted">Soft surfaces, sharp workflows, and human-controlled AI for product teams that want developer tools to feel less cold.</p>
          <div className="mt-8 flex gap-3"><Button>Open workspace</Button><Button variant="secondary">View system</Button></div>
        </div>
        <EditorShell />
      </section>
      <section className="py-12"><JourneyDemo /></section>
    </main>
  );
}
