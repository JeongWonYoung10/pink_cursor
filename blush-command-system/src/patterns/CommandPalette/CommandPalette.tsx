import { Command, FilePlus2, Search, ShieldCheck, Sparkles, Split, Wand2 } from "lucide-react";
import { Card } from "../../components/primitives/Card";
import { Badge } from "../../components/primitives/Badge";
import { CommandRow } from "../../components/product/CommandRow";

export function CommandPalette() {
  const rows = [
    { group: "Agent", title: "Make selected UI softer", key: "⌘ I", active: true, icon: Sparkles },
    { group: "File", title: "Open components/Pricing.tsx", key: "⌘ P", active: false, icon: FilePlus2 },
    { group: "Review", title: "Show current diff", key: "⌘ D", active: false, icon: Split },
    { group: "Run", title: "Run contrast check", key: "⌘ ⇧ C", active: false, icon: ShieldCheck },
    { group: "Nav", title: "Go to theme settings", key: "⌘ ,", active: false, icon: Wand2 },
  ];

  return (
    <Card className="p-4">
      <div className="mb-4 flex items-center gap-3 rounded-bcXl border border-blush-panel/80 bg-white/75 px-4 py-4 shadow-sm">
        <Search className="h-5 w-5 text-blush-action" />
        <span className="text-sm font-medium text-plum-muted">Search files, ask agent, run checks...</span>
        <Badge variant="shortcut" className="ml-auto">⌘ K</Badge>
      </div>
      <div className="space-y-2">
        {rows.map((row) => <CommandRow key={row.title} icon={row.icon} group={row.group} title={row.title} shortcut={row.key} active={row.active} />)}
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-plum-soft"><Command className="h-3.5 w-3.5" /> Palette launches files, checks, agent actions, and review flows.</div>
    </Card>
  );
}
