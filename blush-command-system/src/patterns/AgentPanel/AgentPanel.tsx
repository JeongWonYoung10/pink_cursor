import { Bot, Send } from "lucide-react";
import { Button } from "../../components/primitives/Button";
import { Badge } from "../../components/primitives/Badge";
import { Card } from "../../components/primitives/Card";
import { AgentBubble } from "../../components/product/AgentBubble";
import type { AgentStatus } from "./AgentPanel.types";

export function AgentPanel({ status = "planning" }: { status?: AgentStatus }) {
  return (
    <Card className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-plum-strong">
          <Bot className="h-4 w-4 text-blush-action" />
          Agent Panel
        </div>
        <Badge variant="status">{status}</Badge>
      </div>

      <div className="mb-4 rounded-bcLg border border-white/75 bg-white/50 p-3">
        <p className="text-xs font-semibold text-plum-strong">Current context</p>
        <p className="mt-2 text-xs text-plum-muted">billing/page.tsx · PricingCard · blush tokens</p>
      </div>

      <div className="space-y-3">
        <AgentBubble role="user">Make this billing page softer, but keep it trustworthy.</AgentBubble>
        <AgentBubble role="agent" type="plan">I’ll preserve payment trust signals, then soften cards and CTA hierarchy.</AgentBubble>
        <AgentBubble role="system" type="risk">Risk: CTA contrast must stay above target on coral gradients.</AgentBubble>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <Button className="px-3 text-xs">Approve</Button>
        <Button variant="secondary" className="px-3 text-xs">Scope</Button>
        <Button variant="secondary" className="px-3 text-xs">Ask why</Button>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-bcLg bg-white/60 p-2">
        <input className="min-w-0 flex-1 bg-transparent px-2 text-xs text-plum-muted outline-none placeholder:text-plum-soft" placeholder="Ask agent..." />
        <Button className="h-8 w-8 rounded-bcSm p-0"><Send className="h-3.5 w-3.5" /></Button>
      </div>
    </Card>
  );
}
