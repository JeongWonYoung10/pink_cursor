import { AgentPanel, CommandPalette, DiffReview, EditorShell } from "../patterns";

export function ProductShowcase() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-6 py-10">
      <EditorShell />
      <div className="grid gap-6 lg:grid-cols-2"><AgentPanel status="planning" /><CommandPalette /></div>
      <DiffReview />
    </main>
  );
}
