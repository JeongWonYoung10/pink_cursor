import { Bot, MessageSquareText, Rocket, Split, Wand2 } from "lucide-react";
import { Card } from "../../components/primitives/Card";
import { Badge } from "../../components/primitives/Badge";

export function JourneyDemo() {
  const steps = [
    { title: "Prompt", icon: MessageSquareText, body: "Make the billing page softer, but keep it serious enough for teams." },
    { title: "Plan", icon: Bot, body: "Update cards, buttons, alerts, and empty states using blush tokens." },
    { title: "Edit", icon: Wand2, body: "Apply tokens across 6 files while preserving trust signals." },
    { title: "Review", icon: Split, body: "+42 −12 across 6 files. Contrast checks are ready." },
    { title: "Merge", icon: Rocket, body: "Billing page polished. Preview shared with teammates." },
  ];
  return (
    <Card className="p-5">
      <div className="mb-5 flex items-center justify-between"><h3 className="text-2xl font-semibold tracking-[-0.04em] text-plum-strong">Prompt → Plan → Edit → Review → Merge</h3><Badge variant="status">workflow</Badge></div>
      <div className="grid gap-3 md:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className={index === 1 ? "rounded-bcXl bg-gradient-to-br from-blush-action to-blush-coral p-4 text-white shadow-bcAgent" : "rounded-bcXl border border-white/80 bg-white/58 p-4 text-plum-muted shadow-sm"}>
              <Icon className="mb-8 h-6 w-6" />
              <p className="mb-2 font-semibold">{index + 1}. {step.title}</p>
              <p className={index === 1 ? "text-xs leading-5 text-white/80" : "text-xs leading-5 text-plum-muted"}>{step.body}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
