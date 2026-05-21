import { CheckCircle2, CircleAlert } from "lucide-react";
import { Button } from "../../components/primitives/Button";
import { Card } from "../../components/primitives/Card";
import { Badge } from "../../components/primitives/Badge";
import { DiffLine } from "../../components/product/DiffLine";

export function DiffReview() {
  const files = ["billing/page.tsx", "components/Pricing.tsx", "styles/blush.css"];
  const checks = ["Visual preview matches prompt", "Contrast passes", "Payment trust remains visible"];
  return (
    <Card className="p-4">
      <div className="grid gap-4 lg:grid-cols-[220px_1fr_240px]">
        <aside className="rounded-bcXl bg-blush-soft/35 p-3">
          <p className="mb-3 text-sm font-semibold text-plum-strong">Changed files</p>
          <div className="space-y-2">{files.map((file, i) => <div key={file} className={i === 0 ? "rounded-bcLg bg-blush-action px-3 py-2 text-xs text-white" : "rounded-bcLg bg-white/60 px-3 py-2 text-xs text-plum-muted"}>{file}</div>)}</div>
        </aside>
        <section className="rounded-bcXl border border-white/80 bg-[#fff8fb]/80 p-4 font-mono shadow-inner">
          <div className="mb-3 flex items-center justify-between font-sans"><p className="text-sm font-semibold text-plum-strong">billing/page.tsx</p><Badge variant="status">+42 −12</Badge></div>
          <DiffLine type="removed">- className=&quot;rounded-lg bg-gray-950 text-white&quot;</DiffLine>
          <DiffLine type="added">+ className=&quot;rounded-2xl bg-white/70 text-plum shadow-blush&quot;</DiffLine>
          <DiffLine type="context">  &lt;PricingHeader trustSignals=&quot;visible&quot; /&gt;</DiffLine>
          <DiffLine type="added">+ &lt;UpgradeCTA tone=&quot;primary-blush&quot; /&gt;</DiffLine>
        </section>
        <aside className="rounded-bcXl bg-white/58 p-4">
          <p className="mb-3 text-sm font-semibold text-plum-strong">Checklist</p>
          <div className="space-y-2">{checks.map((check) => <div key={check} className="flex gap-2 rounded-bcMd bg-white/60 p-2 text-xs text-plum-muted"><CheckCircle2 className="h-4 w-4 text-blush-action" />{check}</div>)}</div>
          <div className="mt-3 rounded-bcMd bg-blush-coral/15 p-2 text-xs text-plum-muted"><CircleAlert className="mb-1 h-4 w-4 text-[#d85b62]" />Copy change still needs a glance.</div>
          <Button className="mt-4 w-full">Accept file</Button>
          <Button variant="secondary" className="mt-2 w-full">Request revision</Button>
        </aside>
      </div>
    </Card>
  );
}
