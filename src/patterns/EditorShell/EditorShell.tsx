import { Bot, Command } from "lucide-react";
import { Card } from "../../components/primitives/Card";
import { FileTreeItem } from "../../components/product/FileTreeItem";
import { EditorTab } from "../../components/product/EditorTab";
import { AgentPanel } from "../AgentPanel/AgentPanel";

export function EditorShell() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-blush-panel/70 bg-white/60 px-4 py-3">
        <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-blush-action" /><span className="h-3 w-3 rounded-full bg-blush-coral" /><span className="h-3 w-3 rounded-full bg-blush-mist" /></div>
        <div className="flex items-center gap-2 rounded-bcLg bg-white/70 px-3 py-1.5 text-xs text-plum-muted"><Command className="h-3.5 w-3.5 text-blush-action" /> Workspace shell</div>
      </div>
      <div className="grid min-h-[520px] grid-cols-[210px_1fr_300px]">
        <aside className="border-r border-blush-panel/70 bg-[#ffeef4]/70 p-3">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-plum-soft">Explorer</p>
          <div className="space-y-2">
            <FileTreeItem name="app/billing/page.tsx" touched />
            <FileTreeItem name="components/Pricing.tsx" active touched />
            <FileTreeItem name="styles/blush.css" />
            <FileTreeItem name="copy/billing.json" />
          </div>
        </aside>
        <section className="grid grid-rows-[44px_1fr_130px] bg-[#fff8fb]">
          <div className="flex items-center gap-2 border-b border-blush-panel/70 bg-white/45 px-3">
            <EditorTab label="page.tsx" />
            <EditorTab label="Pricing.tsx" active dirty />
            <EditorTab label="blush.css" />
          </div>
          <div className="p-5 font-mono text-xs leading-6 text-plum-muted">
            <p><span className="text-blush-action">export</span> function PricingCard() {'{'}</p>
            <p className="pl-5">return &lt;Card surface=<span className="text-blush-action">"blush-glass"</span> /&gt;</p>
            <p>{'}'}</p>
            <div className="mt-5 rounded-bcLg bg-blush-action/12 p-4 font-sans text-sm text-plum-muted">Inline agent note: selected component is safe to soften.</div>
          </div>
          <div className="border-t border-blush-panel/70 bg-[#ffeef4]/70 p-3 font-mono text-xs text-plum-muted"><p className="mb-2 font-sans font-semibold text-plum-strong">Terminal</p><p>✓ preview ready</p><p>→ watching billing/page.tsx</p></div>
        </section>
        <aside className="border-l border-blush-panel/70 bg-[#ffeaf2]/75 p-3">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-plum-strong"><Bot className="h-4 w-4 text-blush-action" /> Agent context</p>
          <AgentPanel status="planning" />
        </aside>
      </div>
      <div className="flex items-center justify-between border-t border-blush-panel/70 bg-white/55 px-4 py-2 text-xs text-plum-muted"><span>main · clean</span><span>TypeScript · Preview on · Agent ready</span></div>
    </Card>
  );
}
