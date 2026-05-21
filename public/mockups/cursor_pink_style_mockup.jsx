import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Command,
  Send,
  Folder,
  Search,
  Play,
  CheckCircle2,
  Wand2,
  GitBranch,
  Terminal,
  Bot,
  Layers3,
  ArrowRight,
  Zap,
  Heart,
  MousePointer2,
  Braces,
  PanelRightOpen,
  Bell,
  CreditCard,
  FilePlus2,
  Smartphone,
  MessageSquareText,
  ChevronRight,
  CircleAlert,
  Split,
  Eye,
  Rocket,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const files = ["app/page.tsx", "components/Studio.tsx", "lib/palette.ts", "styles/blush.css"];
const messages = [
  { role: "user", text: "Make this feel like Cursor, but warmer and more playful." },
  { role: "ai", text: "I’ll keep the command-first workspace, then shift the whole visual system into blush pink." },
];

const palette = [
  { hex: "#FF4F9A", label: "Primary" },
  { hex: "#FF5DA2", label: "Action" },
  { hex: "#F8C8DC", label: "Surface" },
  { hex: "#FFD1DC", label: "Blush" },
  { hex: "#EFCFE3", label: "Mist" },
  { hex: "#FF9A9E", label: "Coral" },
];

const features = [
  { icon: Bot, title: "Soft agent", text: "A friendly assistant panel that still feels precise and technical." },
  { icon: Command, title: "Command-first", text: "Fast palette interactions inspired by modern AI editors." },
  { icon: GitBranch, title: "Flow-aware", text: "Suggestions, diffs, branches, and project context stay visible." },
  { icon: Layers3, title: "Warm system", text: "Blush surfaces replace cold chrome without losing structure." },
];

const toneCards = [
  { title: "Cream blush", bg: "from-white to-[#FFD1DC]", text: "Landing / docs" },
  { title: "Hot pink", bg: "from-[#FF4F9A] to-[#FF9A9E]", text: "CTA / active" },
  { title: "Misty lilac", bg: "from-[#EFCFE3] to-[#F8C8DC]", text: "Cards / panels" },
];

const activity = [
  { icon: Sparkles, title: "Agent rewrote onboarding.tsx", time: "2m ago" },
  { icon: GitBranch, title: "Created branch blush-command-ui", time: "8m ago" },
  { icon: CheckCircle2, title: "Theme tokens passed contrast check", time: "13m ago" },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/75 bg-white/50 px-3 py-1 text-xs font-medium text-[#8b526c] shadow-sm backdrop-blur-xl">
      {children}
    </span>
  );
}

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-semibold text-[#FF4F9A]">{eyebrow}</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-[#3a2030] md:text-4xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function CursorPinkStyleMockup() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fff7fa] text-[#3a2030] selection:bg-[#FF5DA2]/25">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,79,154,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,154,158,0.24),transparent_28%),linear-gradient(135deg,#fff7fa_0%,#FFD1DC_45%,#EFCFE3_100%)]" />
        <div className="absolute left-[-10%] top-24 h-[420px] w-[420px] rounded-full bg-[#FF4F9A]/20 blur-3xl" />
        <div className="absolute bottom-[-12%] right-[-4%] h-[520px] w-[520px] rounded-full bg-[#FF9A9E]/30 blur-3xl" />
      </div>

      <main className="relative mx-auto flex max-w-7xl flex-col px-6 py-6">
        <nav className="sticky top-6 z-20 flex items-center justify-between rounded-[1.75rem] border border-white/70 bg-white/55 px-4 py-3 shadow-xl shadow-[#FF5DA2]/10 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] text-white shadow-lg shadow-[#FF4F9A]/25">
              <Command className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-[#3a2030]">Blush Cursor</p>
              <p className="text-xs text-[#9c657e]">soft AI workspace</p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-[#8a5870] md:flex">
            <span>Workspace</span>
            <span>Agents</span>
            <span>Components</span>
            <span>Pricing</span>
          </div>

          <Button className="rounded-2xl bg-[#FF4F9A] px-4 text-white shadow-lg shadow-[#FF4F9A]/25 hover:bg-[#f83f8f]">
            Try pink mode
          </Button>
        </nav>

        <section className="grid min-h-[760px] items-center gap-10 py-14 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/58 px-3 py-1.5 text-sm text-[#8b526c] shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#FF4F9A]" />
              Cursor-like flow, blush-first identity
            </div>

            <div className="space-y-5">
              <h1 className="max-w-2xl text-5xl font-semibold tracking-[-0.065em] text-[#3a2030] md:text-7xl">
                A softer command center for creative code.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[#80576b]">
                Editor structure, agent panels, command surfaces, and instant actions — redesigned around warm pink gradients instead of cold black chrome.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 rounded-2xl bg-[#FF4F9A] px-6 text-white shadow-xl shadow-[#FF4F9A]/25 hover:bg-[#f83f8f]">
                <Play className="mr-2 h-4 w-4" />
                Open workspace
              </Button>
              <Button variant="outline" className="h-12 rounded-2xl border-white/80 bg-white/55 px-6 text-[#6b3e55] shadow-sm hover:bg-white/75">
                <Wand2 className="mr-2 h-4 w-4 text-[#FF5DA2]" />
                Generate theme
              </Button>
            </div>

            <div className="grid max-w-2xl grid-cols-3 gap-3 pt-2 sm:grid-cols-6">
              {palette.map((color) => (
                <div key={color.hex} className="rounded-2xl border border-white/75 bg-white/50 p-2.5 shadow-sm backdrop-blur-xl">
                  <div className="mb-2 h-9 rounded-xl shadow-inner" style={{ backgroundColor: color.hex }} />
                  <p className="text-[10px] font-semibold text-[#7f4d65]">{color.label}</p>
                  <p className="text-[10px] font-medium text-[#a5758b]">{color.hex}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <WorkspaceMockup />
        </section>

        <section className="grid gap-4 pb-8 md:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Card className="h-full rounded-[1.75rem] border-white/75 bg-white/48 shadow-xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
                  <CardContent className="p-5">
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] text-white shadow-lg shadow-[#FF4F9A]/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#4a2638]">{feature.title}</h3>
                    <p className="text-sm leading-6 text-[#865b70]">{feature.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <ComponentSystem />
          <VisualDirections />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <CommandPaletteMockup />
          <MiniRoadmap />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Product surface" title="More screens, same product language">
            <Pill>dashboard / review / mobile</Pill>
          </SectionHeader>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <DashboardMockup />
            <ReviewPanel />
          </div>
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[0.85fr_1.15fr]">
          <MobilePreview />
          <EmptyAndToast />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Commercial layer" title="Even pricing can stay warm without looking unserious">
            <Pill>pricing cards</Pill>
          </SectionHeader>
          <PricingMockup />
        </section>
        <section className="py-10">
          <SectionHeader eyebrow="App IA" title="From landing page to real workspace flow">
            <Pill>onboarding / projects / settings</Pill>
          </SectionHeader>
          <div className="grid gap-5 lg:grid-cols-3">
            <OnboardingFlow />
            <ProjectListScreen />
            <ThemeSettingsPanel />
          </div>
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[1fr_1fr]">
          <AgentRunState />
          <ReviewCompleteState />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Design tokens" title="A repeatable rule system, not just pink decoration">
            <Pill>tokens / usage rules</Pill>
          </SectionHeader>
          <DesignTokenSystem />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Brand moments" title="Tiny emotional details that make it ownable">
            <Pill>microcopy / motion / rituals</Pill>
          </SectionHeader>
          <BrandMoments />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Deep product surfaces" title="More real moments inside the editor experience">
            <Pill>tabs / search / errors / collaboration</Pill>
          </SectionHeader>
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <EditorTabsAndTerminal />
            <GlobalSearchPanel />
          </div>
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-3">
          <InlineSuggestionCard />
          <InviteTeamPanel />
          <ErrorRecoveryPanel />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[0.95fr_1.05fr]">
          <CodeGenerationQueue />
          <RepoHealthPanel />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="User journey demo" title="One complete task from prompt to polished merge">
            <Pill>prompt → agent → review → ship</Pill>
          </SectionHeader>
          <UserJourneyDemo />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <JourneyTimeline />
          <FinalPreviewScreen />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Interactive demo concept" title="A four-step product walkthrough as if it were clickable">
            <Pill>Prompt / Plan / Edit / Merge</Pill>
          </SectionHeader>
          <ClickableJourneyConcept />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <PromptComposerDeepDive />
          <AgentPlanDeepDive />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <EditExecutionDeepDive />
          <MergeSummaryDeepDive />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Agent panel system" title="The assistant panel becomes the emotional and operational core">
            <Pill>chat / plan / run / review / recover</Pill>
          </SectionHeader>
          <AgentPanelSystem />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <AgentMessageTaxonomy />
          <AgentControlDock />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <AgentRiskAndMemory />
          <AgentToneExamples />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Command palette system" title="The launcher for every action, file, and agent workflow">
            <Pill>commands / search / agent / shortcuts</Pill>
          </SectionHeader>
          <CommandPaletteSystem />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[0.95fr_1.05fr]">
          <CommandTaxonomy />
          <CommandResultStates />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <CommandShortcutMap />
          <CommandPaletteRules />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Diff / Review system" title="The trust layer where AI work becomes human-approved work">
            <Pill>diff / preview / checks / merge</Pill>
          </SectionHeader>
          <DiffReviewSystem />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ReviewChecklistPanel />
          <DiffFileNavigator />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ReviewDecisionDock />
          <ReviewFailureRecovery />
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Editor shell system" title="The real workbench behind the soft visual language">
            <Pill>files / tabs / editor / terminal / status</Pill>
          </SectionHeader>
          <EditorShellSystem />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[0.95fr_1.05fr]">
          <FileTreeSystem />
          <TabAndSplitSystem />
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <CodeCanvasSystem />
          <TerminalStatusSystem />
        </section>
      </main>
    </div>
  );
}

function WorkspaceMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-[2.25rem] border border-white/80 bg-white/45 p-3 shadow-2xl shadow-[#FF4F9A]/18 backdrop-blur-2xl"
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-[#fffafd]/80 shadow-inner shadow-white/60">
        <div className="flex items-center justify-between border-b border-[#F8C8DC]/80 bg-white/55 px-4 py-3">
          <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#FF4F9A]" /><span className="h-3 w-3 rounded-full bg-[#FF9A9E]" /><span className="h-3 w-3 rounded-full bg-[#EFCFE3]" /></div>
          <div className="flex w-72 items-center gap-2 rounded-2xl border border-[#F8C8DC]/80 bg-white/70 px-3 py-1.5 text-xs text-[#9b6c82] shadow-sm"><Search className="h-3.5 w-3.5 text-[#FF5DA2]" />Ask, search, or command...</div>
        </div>
        <div className="grid h-[560px] grid-cols-[180px_1fr_280px]">
          <aside className="border-r border-[#F8C8DC]/70 bg-[#ffeef4]/70 p-3">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a76782]"><Folder className="h-3.5 w-3.5" />Project</div>
            <div className="space-y-1.5">{files.map((file, index) => <div key={file} className={`rounded-2xl px-3 py-2 text-xs transition ${index === 1 ? "bg-white text-[#FF4F9A] shadow-sm ring-1 ring-[#FF5DA2]/20" : "text-[#94657b] hover:bg-white/55"}`}>{file}</div>)}</div>
          </aside>
          <section className="bg-[#fff8fb]">
            <div className="border-b border-[#F8C8DC]/70 bg-white/40 px-4 py-2 text-xs text-[#a17188]">components/Studio.tsx</div>
            <div className="p-5 font-mono text-sm leading-7 text-[#5b3448]">
              <p><span className="text-[#FF4F9A]">const</span> <span className="text-[#3a2030]">palette</span> <span className="text-[#b78399]">=</span> <span className="text-[#FF5DA2]">&#123;</span></p>
              <p className="pl-5"><span className="text-[#9a6c82]">primary:</span> <span className="text-[#FF4F9A]">"#FF4F9A"</span>,</p>
              <p className="pl-5"><span className="text-[#9a6c82]">surface:</span> <span className="text-[#d06f9d]">"#FFD1DC"</span>,</p>
              <p className="pl-5"><span className="text-[#9a6c82]">accent:</span> <span className="text-[#e9767b]">"#FF9A9E"</span>,</p>
              <p className="pl-5"><span className="text-[#9a6c82]">glow:</span> <span className="text-[#FF5DA2]">"soft"</span>,</p>
              <p><span className="text-[#FF5DA2]">&#125;</span></p>
              <div className="my-6 rounded-[1.4rem] border border-white bg-gradient-to-br from-white/85 to-[#FFD1DC]/65 p-4 text-[#6e4359] shadow-xl shadow-[#FF4F9A]/10"><div className="mb-2 flex items-center gap-2 text-[#FF4F9A]"><Sparkles className="h-4 w-4" />AI suggestion</div><p className="text-sm leading-6 text-[#7c5468]">Keep the editor grid and command pattern, but let the product identity come from blush surfaces, rounded panels, and pink active states.</p></div>
              <p><span className="text-[#FF4F9A]">export</span> <span className="text-[#FF4F9A]">function</span> <span className="text-[#3a2030]">StudioPanel</span>() <span className="text-[#FF5DA2]">&#123;</span></p>
              <p className="pl-5 text-[#8d6176]">return &lt;Agent mood="soft-sharp" /&gt;</p>
              <p><span className="text-[#FF5DA2]">&#125;</span></p>
            </div>
          </section>
          <aside className="border-l border-[#F8C8DC]/70 bg-[#ffeaf2]/75 p-3">
            <div className="mb-3 flex items-center justify-between"><div className="flex items-center gap-2 text-sm font-semibold text-[#5c3048]"><Sparkles className="h-4 w-4 text-[#FF4F9A]" />Agent</div><Code2 className="h-4 w-4 text-[#bf7b98]" /></div>
            <div className="space-y-3">{messages.map((message) => <div key={message.text} className={`rounded-[1.25rem] p-3 text-xs leading-5 shadow-sm ${message.role === "user" ? "bg-white/60 text-[#7a5267]" : "border border-white/80 bg-gradient-to-br from-[#FF5DA2] to-[#FF9A9E] text-white shadow-[#FF5DA2]/20"}`}>{message.text}</div>)}</div>
            <Card className="mt-5 rounded-[1.4rem] border-white/80 bg-white/55 text-[#5e344a] shadow-sm backdrop-blur-xl"><CardContent className="space-y-3 p-4"><div className="flex items-center gap-2 text-sm font-semibold text-[#FF4F9A]"><CheckCircle2 className="h-4 w-4" />Applied style</div><div className="space-y-2 text-xs text-[#8b5d72]"><p>• Pink-first product tone</p><p>• White glass command UI</p><p>• Soft editor contrast</p></div></CardContent></Card>
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/60 p-2 shadow-sm"><input className="min-w-0 flex-1 bg-transparent px-2 text-xs text-[#6b4358] outline-none placeholder:text-[#b78399]" placeholder="Ask agent..." /><Button size="icon" className="h-8 w-8 rounded-xl bg-[#FF4F9A] text-white shadow-md shadow-[#FF4F9A]/25 hover:bg-[#f83f8f]"><Send className="h-3.5 w-3.5" /></Button></div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}

function ComponentSystem() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/46 shadow-2xl shadow-[#FF4F9A]/10 backdrop-blur-2xl"><CardContent className="p-6"><SectionHeader eyebrow="Component system" title="States that feel alive"><Pill>UI kit preview</Pill></SectionHeader><div className="grid gap-3 sm:grid-cols-2"><Button className="h-12 rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/25 hover:bg-[#f83f8f]">Primary action <ArrowRight className="ml-2 h-4 w-4" /></Button><Button className="h-12 rounded-2xl bg-gradient-to-r from-[#FF5DA2] to-[#FF9A9E] text-white shadow-lg shadow-[#FF9A9E]/20">Gradient action <Sparkles className="ml-2 h-4 w-4" /></Button><Button variant="outline" className="h-12 rounded-2xl border-[#F8C8DC] bg-white/60 text-[#6b3e55] hover:bg-white/80">Secondary</Button><Button variant="outline" className="h-12 rounded-2xl border-[#FF5DA2]/30 bg-[#FFD1DC]/35 text-[#FF4F9A] hover:bg-[#FFD1DC]/55">Soft active</Button></div><div className="mt-6 grid gap-3 sm:grid-cols-3">{[{ icon: Zap, label: "Fast", desc: "instant edits" }, { icon: Heart, label: "Warm", desc: "soft response" }, { icon: MousePointer2, label: "Sharp", desc: "clear focus" }].map((item) => { const Icon = item.icon; return <div key={item.label} className="rounded-[1.35rem] border border-white/75 bg-white/55 p-4 shadow-sm"><Icon className="mb-3 h-5 w-5 text-[#FF4F9A]" /><p className="font-semibold text-[#4a2638]">{item.label}</p><p className="text-xs text-[#93667a]">{item.desc}</p></div>; })}</div></CardContent></Card>
  );
}

function VisualDirections() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/46 shadow-2xl shadow-[#FF4F9A]/10 backdrop-blur-2xl"><CardContent className="p-6"><SectionHeader eyebrow="Visual directions" title="Three ways to push it"><Pill>Brand range</Pill></SectionHeader><div className="grid gap-4 md:grid-cols-3">{toneCards.map((card) => <div key={card.title} className={`min-h-52 rounded-[1.6rem] bg-gradient-to-br ${card.bg} p-4 shadow-xl shadow-[#FF4F9A]/10`}><div className="mb-16 inline-flex rounded-full bg-white/55 px-3 py-1 text-xs font-semibold text-[#77495e] backdrop-blur-xl">{card.text}</div><h3 className="text-xl font-semibold tracking-tight text-[#4a2638]">{card.title}</h3><p className="mt-2 text-sm leading-6 text-[#79536a]">Keep the same product skeleton, but tune the emotional temperature.</p></div>)}</div></CardContent></Card>
  );
}

function CommandPaletteMockup() {
  const rows = [{ icon: Braces, title: "Refactor selected component", key: "⌘ R" }, { icon: Bot, title: "Ask agent about this file", key: "⌘ I" }, { icon: Terminal, title: "Run pink-theme build", key: "⌘ B" }, { icon: PanelRightOpen, title: "Open soft diff panel", key: "⌘ D" }];
  return <Card className="rounded-[2rem] border-white/75 bg-white/46 shadow-2xl shadow-[#FF4F9A]/10 backdrop-blur-2xl"><CardContent className="p-6"><SectionHeader eyebrow="Command palette" title="Cursor DNA, softer chrome"><Pill>⌘ K</Pill></SectionHeader><div className="rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/75 p-3 shadow-inner"><div className="mb-3 flex items-center gap-2 rounded-2xl border border-[#F8C8DC]/80 bg-white/75 px-4 py-3 text-sm text-[#8c5e75] shadow-sm"><Search className="h-4 w-4 text-[#FF4F9A]" />What do you want to change?</div><div className="space-y-2">{rows.map((row, index) => { const Icon = row.icon; return <div key={row.title} className={`flex items-center justify-between rounded-2xl px-4 py-3 ${index === 0 ? "bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E] text-white shadow-lg shadow-[#FF4F9A]/20" : "bg-white/55 text-[#70475b]"}`}><div className="flex items-center gap-3"><Icon className="h-4 w-4" /><span className="text-sm font-medium">{row.title}</span></div><span className={`rounded-lg px-2 py-1 text-xs ${index === 0 ? "bg-white/20 text-white" : "bg-[#FFD1DC]/55 text-[#9a5270]"}`}>{row.key}</span></div>; })}</div></div></CardContent></Card>;
}

function MiniRoadmap() {
  const steps = ["Brand system", "Editor shell", "Agent patterns", "Motion states"];
  return <Card className="rounded-[2rem] border-white/75 bg-white/46 shadow-2xl shadow-[#FF4F9A]/10 backdrop-blur-2xl"><CardContent className="p-6"><SectionHeader eyebrow="Next expansion" title="Make it a full product language" /><div className="space-y-3">{steps.map((step, index) => <div key={step} className="flex items-center gap-3 rounded-[1.35rem] border border-white/75 bg-white/55 p-3 shadow-sm"><div className="grid h-9 w-9 place-items-center rounded-2xl bg-[#FFD1DC] text-sm font-bold text-[#FF4F9A]">{index + 1}</div><div className="flex-1"><p className="font-semibold text-[#553047]">{step}</p><p className="text-xs text-[#95697d]">Define repeatable UI rules, not just a pretty screen.</p></div><CheckCircle2 className="h-5 w-5 text-[#FF4F9A]" /></div>)}</div></CardContent></Card>;
}

function DashboardMockup() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/46 shadow-2xl shadow-[#FF4F9A]/10 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold text-[#FF4F9A]">Dashboard</p><h3 className="text-2xl font-semibold tracking-[-0.04em]">Project pulse</h3></div><Button className="rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20"><FilePlus2 className="mr-2 h-4 w-4" />New project</Button></div>
        <div className="grid gap-3 md:grid-cols-3">
          {[{ icon: Gauge, label: "Flow score", value: "94%" }, { icon: Bot, label: "Agent edits", value: "128" }, { icon: ShieldCheck, label: "Safe changes", value: "41" }].map((stat) => { const Icon = stat.icon; return <div key={stat.label} className="rounded-[1.4rem] border border-white/75 bg-white/60 p-4 shadow-sm"><Icon className="mb-5 h-5 w-5 text-[#FF4F9A]" /><p className="text-3xl font-semibold tracking-[-0.04em] text-[#4a2638]">{stat.value}</p><p className="text-sm text-[#8a5f74]">{stat.label}</p></div>; })}
        </div>
        <div className="mt-4 rounded-[1.5rem] border border-white/75 bg-[#fff8fb]/70 p-4">
          <p className="mb-3 text-sm font-semibold text-[#5a3449]">Recent activity</p>
          <div className="space-y-2">{activity.map((item) => { const Icon = item.icon; return <div key={item.title} className="flex items-center gap-3 rounded-2xl bg-white/60 p-3"><div className="grid h-9 w-9 place-items-center rounded-xl bg-[#FFD1DC] text-[#FF4F9A]"><Icon className="h-4 w-4" /></div><div className="flex-1"><p className="text-sm font-medium text-[#5b3448]">{item.title}</p><p className="text-xs text-[#9c6f83]">{item.time}</p></div><ChevronRight className="h-4 w-4 text-[#c489a0]" /></div>; })}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function ReviewPanel() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/46 shadow-2xl shadow-[#FF4F9A]/10 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold text-[#FF4F9A]">Diff review</p><h3 className="text-2xl font-semibold tracking-[-0.04em]">Soft but technical</h3></div><Pill><Split className="mr-1 h-3.5 w-3.5" /> 12 files</Pill></div>
        <div className="rounded-[1.6rem] border border-[#F8C8DC]/80 bg-[#fff8fb]/80 p-3 font-mono text-xs shadow-inner">
          <div className="mb-3 flex items-center justify-between rounded-2xl bg-white/70 px-3 py-2 text-[#8a6074]"><span>components/Button.tsx</span><span className="text-[#FF4F9A]">+24 −6</span></div>
          <div className="space-y-1 leading-6">
            <p className="rounded-lg bg-[#FFD1DC]/40 px-3 text-[#9b5974]">- className="rounded-md bg-black text-white"</p>
            <p className="rounded-lg bg-[#FF4F9A]/12 px-3 text-[#FF4F9A]">+ className="rounded-2xl bg-[#FF4F9A] text-white shadow-pink"</p>
            <p className="px-3 text-[#9b6c82]">  export function ButtonVariant()</p>
            <p className="rounded-lg bg-[#FF4F9A]/12 px-3 text-[#FF4F9A]">+ addFocusRing("#FF5DA2")</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3"><Button variant="outline" className="rounded-2xl border-[#F8C8DC] bg-white/60 text-[#70475b]"><Eye className="mr-2 h-4 w-4" />Preview</Button><Button className="rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20"><CheckCircle2 className="mr-2 h-4 w-4" />Accept</Button></div>
      </CardContent>
    </Card>
  );
}

function MobilePreview() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/46 shadow-2xl shadow-[#FF4F9A]/10 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Responsive" title="A tiny mobile command center"><Pill><Smartphone className="mr-1 h-3.5 w-3.5" /> mobile</Pill></SectionHeader>
        <div className="mx-auto max-w-[300px] rounded-[2.5rem] border-[10px] border-[#4a2638] bg-[#fff8fb] p-3 shadow-2xl shadow-[#FF4F9A]/20">
          <div className="mb-4 mx-auto h-1.5 w-20 rounded-full bg-[#4a2638]/25" />
          <div className="rounded-[1.6rem] bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] p-4 text-white shadow-lg shadow-[#FF4F9A]/25"><p className="text-xs opacity-80">Today’s agent</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">3 smart edits ready</h3></div>
          <div className="mt-3 space-y-2">{["Review palette.ts", "Fix contrast token", "Ship command UI"].map((item, i) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"><div className="grid h-8 w-8 place-items-center rounded-xl bg-[#FFD1DC] text-xs font-bold text-[#FF4F9A]">{i + 1}</div><p className="text-sm font-medium text-[#604056]">{item}</p></div>)}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyAndToast() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/46 shadow-2xl shadow-[#FF4F9A]/10 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Micro surfaces" title="Empty states, alerts, and notifications" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid min-h-72 place-items-center rounded-[1.7rem] border border-dashed border-[#FF5DA2]/35 bg-white/45 p-6 text-center"><div><div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-[#FFD1DC] text-[#FF4F9A]"><MessageSquareText className="h-6 w-6" /></div><h3 className="text-xl font-semibold tracking-[-0.03em] text-[#553047]">No agent thread yet</h3><p className="mt-2 text-sm leading-6 text-[#8a6074]">Start with a prompt or select code to create your first blush-side conversation.</p><Button className="mt-5 rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20">Start thread</Button></div></div>
          <div className="space-y-3">
            <div className="rounded-[1.4rem] border border-white/75 bg-white/70 p-4 shadow-lg shadow-[#FF4F9A]/8"><div className="flex items-start gap-3"><div className="grid h-9 w-9 place-items-center rounded-xl bg-[#FFD1DC] text-[#FF4F9A]"><Bell className="h-4 w-4" /></div><div><p className="font-semibold text-[#553047]">Theme exported</p><p className="text-sm text-[#8a6074]">Your blush tokens were copied to styles/blush.css.</p></div></div></div>
            <div className="rounded-[1.4rem] border border-[#FF9A9E]/35 bg-[#FF9A9E]/15 p-4 shadow-lg shadow-[#FF9A9E]/8"><div className="flex items-start gap-3"><div className="grid h-9 w-9 place-items-center rounded-xl bg-white/60 text-[#d85b62]"><CircleAlert className="h-4 w-4" /></div><div><p className="font-semibold text-[#70475b]">Contrast warning</p><p className="text-sm text-[#8a6074]">Use #3a2030 for text on pale blush surfaces.</p></div></div></div>
            <div className="rounded-[1.4rem] border border-white/75 bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E] p-4 text-white shadow-lg shadow-[#FF4F9A]/16"><div className="flex items-start gap-3"><Rocket className="mt-1 h-5 w-5" /><div><p className="font-semibold">Ready to ship</p><p className="text-sm text-white/80">All agent changes are previewable.</p></div></div></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PricingMockup() {
  const plans = [{ name: "Solo", price: "$12", desc: "For personal creative coding", hot: false }, { name: "Studio", price: "$24", desc: "For teams and agent workflows", hot: true }, { name: "Lab", price: "$64", desc: "For design systems at scale", hot: false }];
  return <div className="grid gap-5 md:grid-cols-3">{plans.map((plan) => <Card key={plan.name} className={`rounded-[2rem] border-white/75 ${plan.hot ? "bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] text-white shadow-2xl shadow-[#FF4F9A]/25" : "bg-white/48 text-[#4a2638] shadow-2xl shadow-[#FF4F9A]/8"} backdrop-blur-2xl`}><CardContent className="p-6"><div className="mb-8 flex items-center justify-between"><div className={`grid h-11 w-11 place-items-center rounded-2xl ${plan.hot ? "bg-white/20" : "bg-[#FFD1DC] text-[#FF4F9A]"}`}><CreditCard className="h-5 w-5" /></div>{plan.hot && <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">Popular</span>}</div><h3 className="text-2xl font-semibold tracking-[-0.04em]">{plan.name}</h3><p className={`mt-2 text-sm ${plan.hot ? "text-white/78" : "text-[#8a6074]"}`}>{plan.desc}</p><div className="my-6 flex items-end gap-1"><span className="text-5xl font-semibold tracking-[-0.06em]">{plan.price}</span><span className={plan.hot ? "text-white/70" : "text-[#93667a]"}>/mo</span></div><Button className={`h-11 w-full rounded-2xl ${plan.hot ? "bg-white text-[#FF4F9A] hover:bg-white/90" : "bg-[#FF4F9A] text-white hover:bg-[#f83f8f]"}`}>Choose plan</Button></CardContent></Card>)}</div>;
}

function OnboardingFlow() {
  const steps = ["Choose coding vibe", "Connect repo", "Pick agent style"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="mb-7 flex items-center justify-between"><div><p className="text-sm font-semibold text-[#FF4F9A]">Onboarding</p><h3 className="text-2xl font-semibold tracking-[-0.04em]">Set your workspace mood</h3></div><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFD1DC] text-[#FF4F9A]"><Wand2 className="h-5 w-5" /></div></div>
        <div className="space-y-3">{steps.map((step, index) => <div key={step} className="rounded-[1.35rem] border border-white/80 bg-white/58 p-4 shadow-sm"><div className="mb-2 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] text-xs font-bold text-white">{index + 1}</span><p className="font-semibold text-[#553047]">{step}</p></div><div className="ml-11 h-2 rounded-full bg-[#FFD1DC]/60"><div className="h-2 rounded-full bg-[#FF4F9A]" style={{ width: `${45 + index * 20}%` }} /></div></div>)}</div>
        <Button className="mt-6 h-11 w-full rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20">Continue setup</Button>
      </CardContent>
    </Card>
  );
}

function ProjectListScreen() {
  const projects = ["blush-editor", "agent-shell", "pink-docs"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="mb-7 flex items-center justify-between"><div><p className="text-sm font-semibold text-[#FF4F9A]">Projects</p><h3 className="text-2xl font-semibold tracking-[-0.04em]">Choose a repo</h3></div><Button size="icon" className="rounded-2xl bg-[#FF4F9A] text-white"><FilePlus2 className="h-4 w-4" /></Button></div>
        <div className="space-y-3">{projects.map((project, index) => <div key={project} className={`flex items-center gap-3 rounded-[1.35rem] border border-white/80 p-4 shadow-sm ${index === 0 ? "bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E] text-white" : "bg-white/58 text-[#553047]"}`}><div className={`grid h-10 w-10 place-items-center rounded-2xl ${index === 0 ? "bg-white/20" : "bg-[#FFD1DC] text-[#FF4F9A]"}`}><Folder className="h-4 w-4" /></div><div className="flex-1"><p className="font-semibold">{project}</p><p className={`text-xs ${index === 0 ? "text-white/75" : "text-[#9b6c82]"}`}>Updated by agent today</p></div><ChevronRight className="h-4 w-4" /></div>)}</div>
      </CardContent>
    </Card>
  );
}

function ThemeSettingsPanel() {
  const settings = ["Blush intensity", "Agent warmth", "Glow strength"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="mb-7 flex items-center justify-between"><div><p className="text-sm font-semibold text-[#FF4F9A]">Settings</p><h3 className="text-2xl font-semibold tracking-[-0.04em]">Theme controls</h3></div><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFD1DC] text-[#FF4F9A]"><Sparkles className="h-5 w-5" /></div></div>
        <div className="space-y-5">{settings.map((setting, index) => <div key={setting}><div className="mb-2 flex items-center justify-between"><p className="text-sm font-semibold text-[#604056]">{setting}</p><p className="text-xs text-[#FF4F9A]">{70 + index * 8}%</p></div><div className="h-3 rounded-full bg-white/75 shadow-inner"><div className="h-3 rounded-full bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E]" style={{ width: `${70 + index * 8}%` }} /></div></div>)}</div>
        <div className="mt-6 rounded-[1.35rem] bg-[#FFD1DC]/45 p-4 text-sm leading-6 text-[#7f5268]">Rule: pink is the environment, not only the accent. Contrast comes from plum text and white glass layers.</div>
      </CardContent>
    </Card>
  );
}

function AgentRunState() {
  const tasks = ["Reading repository context", "Generating component tokens", "Preparing review diff"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Agent execution" title="Make background work visible and charming"><Pill>running</Pill></SectionHeader>
        <div className="rounded-[1.7rem] bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] p-5 text-white shadow-xl shadow-[#FF4F9A]/20">
          <div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/20"><Bot className="h-5 w-5" /></div><div><p className="font-semibold">Blush Agent is designing</p><p className="text-sm text-white/75">3 tasks in progress</p></div></div><Sparkles className="h-5 w-5" /></div>
          <div className="space-y-3">{tasks.map((task, index) => <div key={task} className="rounded-2xl bg-white/16 p-3"><div className="mb-2 flex items-center justify-between text-sm"><span>{task}</span><span>{index === 2 ? "42%" : "done"}</span></div><div className="h-2 rounded-full bg-white/20"><div className="h-2 rounded-full bg-white" style={{ width: index === 2 ? "42%" : "100%" }} /></div></div>)}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function ReviewCompleteState() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Completion" title="A satisfying end state after accepting changes"><Pill>merged</Pill></SectionHeader>
        <div className="grid min-h-[310px] place-items-center rounded-[1.7rem] border border-white/80 bg-white/58 p-8 text-center shadow-inner">
          <div>
            <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-[1.7rem] bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] text-white shadow-xl shadow-[#FF4F9A]/25"><CheckCircle2 className="h-9 w-9" /></div>
            <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#4a2638]">Changes feel polished</h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#865b70]">12 files updated, 4 components themed, and all contrast checks passed for blush surfaces.</p>
            <div className="mt-6 flex justify-center gap-3"><Button className="rounded-2xl bg-[#FF4F9A] text-white">Open diff</Button><Button variant="outline" className="rounded-2xl border-[#F8C8DC] bg-white/70 text-[#70475b]">Share preview</Button></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function DesignTokenSystem() {
  const tokens = [
    ["--color-action", "#FF4F9A", "Primary buttons, active file, major CTA"],
    ["--color-surface", "#FFD1DC", "Panels, empty states, agent cards"],
    ["--color-mist", "#EFCFE3", "Background gradients, secondary cards"],
    ["--color-text", "#3A2030", "Readable text on blush/white"],
  ];
  return <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl"><CardContent className="p-6"><div className="grid gap-3">{tokens.map(([name, value, use]) => <div key={name} className="grid items-center gap-4 rounded-[1.35rem] border border-white/80 bg-white/58 p-4 shadow-sm md:grid-cols-[1fr_140px_2fr]"><p className="font-mono text-sm font-semibold text-[#553047]">{name}</p><div className="flex items-center gap-2"><span className="h-8 w-8 rounded-xl shadow-inner" style={{ backgroundColor: value }} /><span className="font-mono text-xs text-[#8a6074]">{value}</span></div><p className="text-sm text-[#865b70]">{use}</p></div>)}</div></CardContent></Card>;
}

function BrandMoments() {
  const moments = [
    { title: "Agent says ‘polished’", text: "Use completion language that feels calm, not robotic." },
    { title: "Glow means confidence", text: "Only active or accepted states get the strongest pink glow." },
    { title: "Mist before action", text: "Neutral panels are blush/lilac; action is hot pink." },
    { title: "Rounded, not childish", text: "Large radii with technical grids keeps it mature." },
  ];
  return <div className="grid gap-4 md:grid-cols-4">{moments.map((moment, index) => <Card key={moment.title} className="rounded-[1.75rem] border-white/75 bg-white/48 shadow-xl shadow-[#FF4F9A]/8 backdrop-blur-2xl"><CardContent className="p-5"><div className="mb-5 grid h-10 w-10 place-items-center rounded-2xl bg-[#FFD1DC] text-sm font-bold text-[#FF4F9A]">{index + 1}</div><h3 className="mb-2 font-semibold tracking-[-0.02em] text-[#553047]">{moment.title}</h3><p className="text-sm leading-6 text-[#865b70]">{moment.text}</p></CardContent></Card>)}</div>;
}

function EditorTabsAndTerminal() {
  const tabs = ["Studio.tsx", "palette.ts", "review.diff"];
  const logs = ["✓ tokens generated", "✓ components themed", "→ running contrast scan", "• waiting for preview"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Editor shell" title="Tabs and terminal without cold chrome"><Pill><Terminal className="mr-1 h-3.5 w-3.5" /> terminal</Pill></SectionHeader>
        <div className="overflow-hidden rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/80 shadow-inner">
          <div className="flex gap-2 border-b border-[#F8C8DC]/70 bg-white/55 p-2">
            {tabs.map((tab, index) => <div key={tab} className={`rounded-2xl px-4 py-2 text-xs font-semibold ${index === 0 ? "bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20" : "bg-white/60 text-[#8a6074]"}`}>{tab}</div>)}
          </div>
          <div className="grid min-h-[340px] md:grid-cols-[1fr_260px]">
            <div className="p-5 font-mono text-sm leading-7 text-[#654359]">
              <p><span className="text-[#FF4F9A]">function</span> <span className="text-[#3a2030]">SoftPanel</span>() {'{'}</p>
              <p className="pl-5">return &lt;Panel tone=<span className="text-[#FF4F9A]">"blush"</span> /&gt;</p>
              <p>{'}'}</p>
              <div className="mt-6 rounded-2xl border border-[#FF5DA2]/25 bg-[#FFD1DC]/32 p-4 text-sm text-[#7f5268]">
                Inline note: terminal should feel calm, but still read as engineering tooling.
              </div>
            </div>
            <div className="border-l border-[#F8C8DC]/70 bg-[#ffeef4]/70 p-4">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#553047]"><Terminal className="h-4 w-4 text-[#FF4F9A]" /> Blush build</p>
              <div className="space-y-2 font-mono text-xs">{logs.map((log, index) => <p key={log} className={`rounded-xl px-3 py-2 ${index === 2 ? "bg-[#FF4F9A]/12 text-[#FF4F9A]" : "bg-white/60 text-[#8a6074]"}`}>{log}</p>)}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function GlobalSearchPanel() {
  const results = ["components/Studio.tsx", "tokens/blush.json", "docs/agent-tone.md", "app/review/page.tsx"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Global search" title="Search as a soft command surface"><Pill>⌘ ⇧ F</Pill></SectionHeader>
        <div className="rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/75 p-3 shadow-inner">
          <div className="mb-3 flex items-center gap-3 rounded-2xl bg-white/75 px-4 py-3 shadow-sm">
            <Search className="h-4 w-4 text-[#FF4F9A]" />
            <span className="text-sm text-[#70475b]">Find “agent tone” across project</span>
          </div>
          <div className="space-y-2">{results.map((result, index) => <div key={result} className={`flex items-center justify-between rounded-2xl p-3 ${index === 0 ? "bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E] text-white shadow-lg shadow-[#FF4F9A]/18" : "bg-white/60 text-[#70475b]"}`}><div className="flex items-center gap-3"><FilePlus2 className="h-4 w-4" /><span className="text-sm font-medium">{result}</span></div><span className={`text-xs ${index === 0 ? "text-white/75" : "text-[#9b6c82]"}`}>{index + 2} hits</span></div>)}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function InlineSuggestionCard() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold text-[#FF4F9A]">Inline AI</p><h3 className="text-2xl font-semibold tracking-[-0.04em]">Suggestion bubble</h3></div><Sparkles className="h-5 w-5 text-[#FF4F9A]" /></div>
        <div className="rounded-[1.5rem] border border-[#F8C8DC]/80 bg-[#fff8fb]/75 p-4 font-mono text-xs leading-6 text-[#654359]">
          <p>button.className =</p>
          <p className="rounded-lg bg-[#FF4F9A]/12 px-2 text-[#FF4F9A]">"rounded-2xl bg-action shadow-blush"</p>
        </div>
        <div className="mt-4 rounded-[1.4rem] bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] p-4 text-white shadow-lg shadow-[#FF4F9A]/20">
          <p className="text-sm font-semibold">Apply softer active state?</p>
          <p className="mt-1 text-xs leading-5 text-white/75">This keeps contrast high while matching the blush surface system.</p>
          <div className="mt-4 flex gap-2"><Button size="sm" className="rounded-xl bg-white text-[#FF4F9A] hover:bg-white/90">Apply</Button><Button size="sm" variant="outline" className="rounded-xl border-white/30 bg-white/10 text-white hover:bg-white/15">Dismiss</Button></div>
        </div>
      </CardContent>
    </Card>
  );
}

function InviteTeamPanel() {
  const people = ["Mina", "Jules", "Kai"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold text-[#FF4F9A]">Collaboration</p><h3 className="text-2xl font-semibold tracking-[-0.04em]">Invite team</h3></div><Heart className="h-5 w-5 text-[#FF4F9A]" /></div>
        <div className="rounded-[1.5rem] bg-white/60 p-3 shadow-inner"><div className="mb-3 rounded-2xl border border-[#F8C8DC]/80 bg-white/75 px-4 py-3 text-sm text-[#9b6c82]">teammate@studio.dev</div><Button className="h-11 w-full rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20">Send invite</Button></div>
        <div className="mt-4 flex -space-x-2">{people.map((person, index) => <div key={person} className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-[#FFD1DC] to-[#FF9A9E] text-xs font-bold text-[#70475b] shadow-sm">{person[0]}</div>)}</div>
      </CardContent>
    </Card>
  );
}

function ErrorRecoveryPanel() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold text-[#FF4F9A]">Recovery</p><h3 className="text-2xl font-semibold tracking-[-0.04em]">Error state</h3></div><CircleAlert className="h-5 w-5 text-[#d85b62]" /></div>
        <div className="rounded-[1.6rem] border border-[#FF9A9E]/40 bg-[#FF9A9E]/14 p-5">
          <p className="font-semibold text-[#70475b]">Preview failed softly</p>
          <p className="mt-2 text-sm leading-6 text-[#8a6074]">The agent changed a token that is still referenced by two components.</p>
          <div className="mt-5 grid gap-2"><Button className="rounded-2xl bg-[#FF4F9A] text-white">Fix with agent</Button><Button variant="outline" className="rounded-2xl border-[#F8C8DC] bg-white/65 text-[#70475b]">Show details</Button></div>
        </div>
      </CardContent>
    </Card>
  );
}

function CodeGenerationQueue() {
  const queue = ["Create theme provider", "Update button variants", "Generate docs preview", "Run accessibility scan"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Generation queue" title="Queued work that still feels under control"><Pill>4 jobs</Pill></SectionHeader>
        <div className="space-y-3">{queue.map((item, index) => <div key={item} className="flex items-center gap-3 rounded-[1.35rem] border border-white/80 bg-white/58 p-4 shadow-sm"><div className={`grid h-10 w-10 place-items-center rounded-2xl ${index === 0 ? "bg-[#FF4F9A] text-white" : "bg-[#FFD1DC] text-[#FF4F9A]"}`}>{index === 0 ? <Zap className="h-4 w-4" /> : index + 1}</div><div className="flex-1"><p className="font-semibold text-[#553047]">{item}</p><p className="text-xs text-[#95697d]">{index === 0 ? "running now" : "waiting in blush queue"}</p></div><div className="h-2 w-20 rounded-full bg-[#FFD1DC]/60"><div className="h-2 rounded-full bg-[#FF4F9A]" style={{ width: index === 0 ? "66%" : "12%" }} /></div></div>)}</div>
      </CardContent>
    </Card>
  );
}

function RepoHealthPanel() {
  const checks = ["TypeScript", "Contrast", "Unused tokens", "Preview build"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Repo health" title="Quality checks can share the same tone"><Pill><ShieldCheck className="mr-1 h-3.5 w-3.5" /> healthy</Pill></SectionHeader>
        <div className="grid gap-4 md:grid-cols-[220px_1fr]">
          <div className="grid place-items-center rounded-[1.7rem] bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] p-6 text-center text-white shadow-xl shadow-[#FF4F9A]/20"><div><p className="text-6xl font-semibold tracking-[-0.08em]">92</p><p className="text-sm text-white/75">health score</p></div></div>
          <div className="space-y-3">{checks.map((check, index) => <div key={check} className="flex items-center justify-between rounded-[1.2rem] bg-white/60 p-3 shadow-sm"><div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#FF4F9A]" /><span className="text-sm font-semibold text-[#604056]">{check}</span></div><span className="text-xs text-[#9b6c82]">passed</span></div>)}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function UserJourneyDemo() {
  const columns = [
    { title: "1. Prompt", icon: MessageSquareText, body: "Make the billing page softer, but keep it serious enough for teams.", note: "User asks in natural language" },
    { title: "2. Agent plan", icon: Bot, body: "Update cards, buttons, alerts, and empty states using blush tokens.", note: "AI explains scope before editing" },
    { title: "3. Review", icon: Split, body: "+42 −12 across 6 files. Contrast and preview checks are ready.", note: "Human stays in control" },
    { title: "4. Ship", icon: Rocket, body: "Billing page polished. Preview shared with studio teammates.", note: "Completion feels satisfying" },
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="grid gap-4 lg:grid-cols-4">
          {columns.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className={`relative overflow-hidden rounded-[1.7rem] border border-white/80 p-5 shadow-lg ${index === 1 ? "bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] text-white shadow-[#FF4F9A]/20" : "bg-white/58 text-[#553047]"}`}>
                <div className={`mb-8 grid h-12 w-12 place-items-center rounded-2xl ${index === 1 ? "bg-white/20" : "bg-[#FFD1DC] text-[#FF4F9A]"}`}><Icon className="h-5 w-5" /></div>
                <p className="mb-2 text-lg font-semibold tracking-[-0.03em]">{step.title}</p>
                <p className={`min-h-20 text-sm leading-6 ${index === 1 ? "text-white/82" : "text-[#7f5268]"}`}>{step.body}</p>
                <div className={`mt-5 rounded-2xl px-3 py-2 text-xs font-medium ${index === 1 ? "bg-white/16 text-white/78" : "bg-[#FFD1DC]/45 text-[#9a5270]"}`}>{step.note}</div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

function JourneyTimeline() {
  const items = [
    { time: "00:00", title: "User opens command palette", status: "input" },
    { time: "00:08", title: "Agent maps affected components", status: "thinking" },
    { time: "00:21", title: "Blush tokens applied to billing UI", status: "editing" },
    { time: "00:38", title: "Preview build catches one contrast issue", status: "recovery" },
    { time: "00:51", title: "Fix accepted and merged", status: "done" },
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Journey timeline" title="The task has a visible rhythm"><Pill>51 sec demo</Pill></SectionHeader>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={item.title} className="flex items-center gap-4 rounded-[1.35rem] border border-white/80 bg-white/58 p-4 shadow-sm">
              <div className="w-14 text-xs font-semibold text-[#FF4F9A]">{item.time}</div>
              <div className={`grid h-10 w-10 place-items-center rounded-2xl ${index === items.length - 1 ? "bg-[#FF4F9A] text-white" : "bg-[#FFD1DC] text-[#FF4F9A]"}`}>{index === items.length - 1 ? <CheckCircle2 className="h-4 w-4" /> : index + 1}</div>
              <div className="flex-1"><p className="font-semibold text-[#553047]">{item.title}</p><p className="text-xs text-[#95697d]">{item.status}</p></div>
              {index < items.length - 1 && <ArrowRight className="h-4 w-4 text-[#c489a0]" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function FinalPreviewScreen() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Final preview" title="What the user sees after the agent finishes"><Pill><Eye className="mr-1 h-3.5 w-3.5" /> preview</Pill></SectionHeader>
        <div className="overflow-hidden rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/80 shadow-inner">
          <div className="flex items-center justify-between border-b border-[#F8C8DC]/70 bg-white/60 px-4 py-3"><p className="text-sm font-semibold text-[#553047]">BillingPreview.tsx</p><div className="flex gap-2"><span className="rounded-full bg-[#FFD1DC] px-3 py-1 text-xs text-[#FF4F9A]">live</span><span className="rounded-full bg-white px-3 py-1 text-xs text-[#8a6074]">shared</span></div></div>
          <div className="grid gap-4 p-5 md:grid-cols-[1fr_180px]">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-white to-[#FFD1DC]/65 p-6 shadow-lg shadow-[#FF4F9A]/8">
              <p className="mb-2 text-sm font-semibold text-[#FF4F9A]">Studio plan</p>
              <h3 className="text-4xl font-semibold tracking-[-0.06em] text-[#3a2030]">$24/mo</h3>
              <p className="mt-3 text-sm leading-6 text-[#7f5268]">A warmer billing surface with clear team-focused hierarchy.</p>
              <Button className="mt-6 rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20">Upgrade workspace</Button>
            </div>
            <div className="space-y-3">
              {['Contrast passed', 'CTA clarified', 'Copy softened'].map((item) => <div key={item} className="rounded-2xl bg-white/70 p-3 shadow-sm"><CheckCircle2 className="mb-2 h-4 w-4 text-[#FF4F9A]" /><p className="text-sm font-semibold text-[#604056]">{item}</p></div>)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AgentPanelSystem() {
  const states = [
    { label: "Idle", text: "Ready to help with the selected file.", color: "bg-white/65 text-[#70475b]" },
    { label: "Planning", text: "I’ll inspect billing components before editing.", color: "bg-[#FFD1DC]/55 text-[#8a4f68]" },
    { label: "Running", text: "Applying blush tokens to 6 files.", color: "bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E] text-white" },
    { label: "Review", text: "Diff is ready. One contrast issue was fixed.", color: "bg-white/65 text-[#70475b]" },
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
          <div className="rounded-[1.8rem] border border-white/80 bg-[#ffeef4]/75 p-4 shadow-inner">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold text-[#553047]"><Bot className="h-5 w-5 text-[#FF4F9A]" /> Agent Panel</div>
              <span className="rounded-full bg-[#FF4F9A] px-3 py-1 text-xs font-semibold text-white">active</span>
            </div>
            <div className="space-y-3">
              <div className="rounded-[1.25rem] bg-white/65 p-3 text-xs leading-5 text-[#7f5268]">Make this billing page feel less cold, but keep it trustworthy.</div>
              <div className="rounded-[1.25rem] bg-gradient-to-br from-[#FF5DA2] to-[#FF9A9E] p-3 text-xs leading-5 text-white shadow-lg shadow-[#FF4F9A]/18">I’ll preserve payment trust signals, then soften cards, copy, and CTA hierarchy.</div>
              <div className="rounded-[1.25rem] border border-white/70 bg-white/50 p-3">
                <p className="mb-2 text-xs font-semibold text-[#553047]">Current context</p>
                <div className="space-y-1 text-xs text-[#8a6074]"><p>• billing/page.tsx</p><p>• selected PricingCard</p><p>• blush tokens available</p></div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-2xl bg-white/65 p-2 shadow-sm"><input className="min-w-0 flex-1 bg-transparent px-2 text-xs text-[#604056] outline-none placeholder:text-[#b78399]" placeholder="Ask agent..." /><Button size="icon" className="h-8 w-8 rounded-xl bg-[#FF4F9A] text-white"><Send className="h-3.5 w-3.5" /></Button></div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {states.map((state) => <div key={state.label} className={`rounded-[1.5rem] p-5 shadow-sm ${state.color}`}><p className="mb-3 text-sm font-semibold">{state.label}</p><p className="text-sm leading-6 opacity-85">{state.text}</p></div>)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AgentMessageTaxonomy() {
  const types = [
    ["Answer", "Direct explanation or design reasoning"],
    ["Plan", "Scope, affected files, and risk before changes"],
    ["Action", "Running, editing, generating, checking"],
    ["Review", "Diff summary, preview, accept/reject"],
    ["Recovery", "Problem explanation with fix path"],
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Message taxonomy" title="Every agent message needs a role" />
        <div className="space-y-3">{types.map(([name, desc], index) => <div key={name} className="rounded-[1.35rem] border border-white/80 bg-white/58 p-4 shadow-sm"><div className="mb-2 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-xl bg-[#FFD1DC] text-xs font-bold text-[#FF4F9A]">{index + 1}</span><p className="font-semibold text-[#553047]">{name}</p></div><p className="ml-11 text-sm leading-6 text-[#865b70]">{desc}</p></div>)}</div>
      </CardContent>
    </Card>
  );
}

function AgentControlDock() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Control dock" title="The user always has a steering wheel"><Pill>approve / pause / scope</Pill></SectionHeader>
        <div className="rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/80 p-5 shadow-inner">
          <div className="mb-5 rounded-[1.4rem] bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E] p-4 text-white shadow-lg shadow-[#FF4F9A]/18">
            <p className="font-semibold">Agent is ready to edit 6 files</p>
            <p className="mt-1 text-sm text-white/76">Approve the plan or narrow the scope first.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <Button className="h-12 rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20">Approve</Button>
            <Button variant="outline" className="h-12 rounded-2xl border-[#F8C8DC] bg-white/70 text-[#70475b]">Edit scope</Button>
            <Button variant="outline" className="h-12 rounded-2xl border-[#F8C8DC] bg-white/70 text-[#70475b]">Ask why</Button>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2"><Button variant="outline" className="rounded-2xl border-[#F8C8DC] bg-white/55 text-[#70475b]">Pause run</Button><Button variant="outline" className="rounded-2xl border-[#F8C8DC] bg-white/55 text-[#70475b]">Revert last step</Button></div>
        </div>
      </CardContent>
    </Card>
  );
}

function AgentRiskAndMemory() {
  const risks = ["Payment page must stay trustworthy", "Pink CTA cannot reduce contrast", "Copy should not sound childish"];
  const memory = ["User prefers blush-first UI", "Avoid black as primary surface", "Keep Cursor-like workflow structure"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Risk & context" title="The panel should show what the agent is protecting" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.7rem] border border-[#FF9A9E]/35 bg-[#FF9A9E]/14 p-5"><p className="mb-4 flex items-center gap-2 font-semibold text-[#70475b]"><CircleAlert className="h-4 w-4 text-[#d85b62]" /> Risks</p><div className="space-y-2">{risks.map((risk) => <p key={risk} className="rounded-2xl bg-white/55 px-3 py-2 text-sm text-[#865b70]">{risk}</p>)}</div></div>
          <div className="rounded-[1.7rem] border border-white/80 bg-white/58 p-5"><p className="mb-4 flex items-center gap-2 font-semibold text-[#553047]"><Sparkles className="h-4 w-4 text-[#FF4F9A]" /> Working memory</p><div className="space-y-2">{memory.map((item) => <p key={item} className="rounded-2xl bg-[#FFD1DC]/40 px-3 py-2 text-sm text-[#865b70]">{item}</p>)}</div></div>
        </div>
      </CardContent>
    </Card>
  );
}

function AgentToneExamples() {
  const examples = [
    { label: "Good", text: "I’ll keep the pricing hierarchy clear and only soften the surrounding surfaces." },
    { label: "Good", text: "One contrast issue showed up. I can fix the token and rerun preview." },
    { label: "Avoid", text: "Oopsie, the page broke but I made it cute!" },
    { label: "Avoid", text: "Magic complete. Everything is pink now." },
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Agent tone" title="Warm, not unserious" />
        <div className="space-y-3">{examples.map((example, index) => <div key={example.text} className={`rounded-[1.35rem] p-4 shadow-sm ${example.label === "Good" ? "bg-white/65 border border-white/80" : "bg-[#FF9A9E]/14 border border-[#FF9A9E]/30"}`}><div className="mb-2 flex items-center gap-2"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${example.label === "Good" ? "bg-[#FFD1DC] text-[#FF4F9A]" : "bg-white/60 text-[#d85b62]"}`}>{example.label}</span></div><p className="text-sm leading-6 text-[#70475b]">{example.text}</p></div>)}</div>
      </CardContent>
    </Card>
  );
}

function CommandPaletteSystem() {
  const rows = [
    { group: "Agent", title: "Make selected UI softer", key: "⌘ I", active: true, icon: Sparkles },
    { group: "File", title: "Open components/Pricing.tsx", key: "⌘ P", active: false, icon: FilePlus2 },
    { group: "Review", title: "Show current diff", key: "⌘ D", active: false, icon: Split },
    { group: "Run", title: "Run contrast check", key: "⌘ ⇧ C", active: false, icon: ShieldCheck },
    { group: "Nav", title: "Go to theme settings", key: "⌘ ,", active: false, icon: Wand2 },
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
          <div className="rounded-[1.8rem] border border-white/80 bg-[#fff8fb]/80 p-4 shadow-inner">
            <div className="mb-4 flex items-center gap-3 rounded-[1.4rem] border border-[#F8C8DC]/80 bg-white/75 px-4 py-4 shadow-sm">
              <Command className="h-5 w-5 text-[#FF4F9A]" />
              <span className="text-sm font-medium text-[#70475b]">Search files, ask agent, run checks...</span>
              <span className="ml-auto rounded-xl bg-[#FFD1DC]/60 px-2 py-1 text-xs font-semibold text-[#FF4F9A]">⌘ K</span>
            </div>
            <div className="space-y-2">
              {rows.map((row) => {
                const Icon = row.icon;
                return <div key={row.title} className={`flex items-center justify-between rounded-[1.25rem] px-4 py-3 ${row.active ? "bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E] text-white shadow-lg shadow-[#FF4F9A]/20" : "bg-white/60 text-[#70475b]"}`}>
                  <div className="flex items-center gap-3"><Icon className="h-4 w-4" /><div><p className="text-sm font-semibold">{row.title}</p><p className={`text-xs ${row.active ? "text-white/70" : "text-[#9b6c82]"}`}>{row.group}</p></div></div>
                  <span className={`rounded-xl px-2 py-1 text-xs font-semibold ${row.active ? "bg-white/20 text-white" : "bg-[#FFD1DC]/55 text-[#FF4F9A]"}`}>{row.key}</span>
                </div>;
              })}
            </div>
          </div>
          <div className="rounded-[1.8rem] bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] p-5 text-white shadow-xl shadow-[#FF4F9A]/20">
            <Search className="mb-8 h-8 w-8" />
            <h3 className="text-3xl font-semibold tracking-[-0.05em]">One palette, four jobs.</h3>
            <div className="mt-6 space-y-3 text-sm text-white/82">
              <p>• Find files and symbols</p>
              <p>• Start agent workflows</p>
              <p>• Jump to product surfaces</p>
              <p>• Run technical checks</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CommandTaxonomy() {
  const types = [
    ["Navigation", "Move between files, settings, projects, review screens"],
    ["Agent", "Transform selected code, explain, plan, recover"],
    ["Execution", "Run build, preview, contrast, tests"],
    ["Creation", "Create file, component, branch, doc"],
    ["Review", "Open diff, accept change, request revision"],
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Command taxonomy" title="Commands need predictable families" />
        <div className="space-y-3">{types.map(([name, desc], index) => <div key={name} className="rounded-[1.35rem] border border-white/80 bg-white/58 p-4 shadow-sm"><div className="mb-2 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-xl bg-[#FFD1DC] text-xs font-bold text-[#FF4F9A]">{index + 1}</span><p className="font-semibold text-[#553047]">{name}</p></div><p className="ml-11 text-sm leading-6 text-[#865b70]">{desc}</p></div>)}</div>
      </CardContent>
    </Card>
  );
}

function CommandResultStates() {
  const states = [
    { title: "Empty", text: "Suggest common actions instead of showing a blank panel." },
    { title: "Searching", text: "Use soft pulse and preserve typed query visibility." },
    { title: "No result", text: "Offer to create, ask agent, or search docs." },
    { title: "Selected", text: "Primary gradient row with shortcut and description." },
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Result states" title="Search states should still guide the user"><Pill>empty / loading / selected</Pill></SectionHeader>
        <div className="grid gap-3 md:grid-cols-2">{states.map((state, index) => <div key={state.title} className={`rounded-[1.4rem] p-4 shadow-sm ${index === 3 ? "bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E] text-white" : "bg-white/60 text-[#70475b] border border-white/80"}`}><p className="mb-2 font-semibold">{state.title}</p><p className={`text-sm leading-6 ${index === 3 ? "text-white/80" : "text-[#865b70]"}`}>{state.text}</p></div>)}</div>
      </CardContent>
    </Card>
  );
}

function CommandShortcutMap() {
  const shortcuts = [["⌘ K", "Open palette"], ["⌘ I", "Ask agent"], ["⌘ P", "Open file"], ["⌘ D", "Show diff"], ["⌘ B", "Run build"], ["Esc", "Close / cancel"]];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Shortcut map" title="Keyboard-first, but visually soft" />
        <div className="grid gap-3 sm:grid-cols-2">{shortcuts.map(([key, action]) => <div key={key} className="flex items-center justify-between rounded-[1.25rem] border border-white/80 bg-white/60 p-4 shadow-sm"><span className="rounded-xl bg-[#FFD1DC]/60 px-3 py-1 text-sm font-bold text-[#FF4F9A]">{key}</span><span className="text-sm font-medium text-[#70475b]">{action}</span></div>)}</div>
      </CardContent>
    </Card>
  );
}

function CommandPaletteRules() {
  const rules = [
    "Active command gets the strongest pink treatment.",
    "Agent commands always use Sparkles or Bot icons.",
    "Technical commands show exact target: file, check, or diff.",
    "No result state should offer a next action.",
    "Palette closes only after action is clear or reversible.",
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Palette rules" title="Keep it powerful without becoming noisy" />
        <div className="space-y-3">{rules.map((rule, index) => <div key={rule} className="flex items-start gap-3 rounded-[1.25rem] border border-white/80 bg-white/60 p-4 shadow-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#FF4F9A]" /><p className="text-sm leading-6 text-[#70475b]">{rule}</p></div>)}</div>
      </CardContent>
    </Card>
  );
}

function DiffReviewSystem() {
  const files = [
    { name: "billing/page.tsx", change: "+18 −4", active: true },
    { name: "components/Pricing.tsx", change: "+12 −3", active: false },
    { name: "styles/blush.css", change: "+8 −0", active: false },
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="grid gap-5 lg:grid-cols-[260px_1fr_280px]">
          <div className="rounded-[1.7rem] border border-white/80 bg-[#ffeef4]/75 p-4 shadow-inner">
            <p className="mb-4 text-sm font-semibold text-[#553047]">Changed files</p>
            <div className="space-y-2">{files.map((file) => <div key={file.name} className={`rounded-2xl px-3 py-3 text-xs shadow-sm ${file.active ? "bg-[#FF4F9A] text-white" : "bg-white/60 text-[#70475b]"}`}><div className="flex items-center justify-between"><span>{file.name}</span><span>{file.change}</span></div></div>)}</div>
          </div>
          <div className="overflow-hidden rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/80 shadow-inner">
            <div className="flex items-center justify-between border-b border-[#F8C8DC]/70 bg-white/60 px-4 py-3"><p className="text-sm font-semibold text-[#553047]">billing/page.tsx</p><span className="rounded-full bg-[#FFD1DC]/60 px-3 py-1 text-xs font-semibold text-[#FF4F9A]">reviewing</span></div>
            <div className="p-5 font-mono text-xs leading-6 text-[#654359]">
              <p className="rounded-lg bg-[#FF9A9E]/14 px-3 text-[#b15c64]">- className="rounded-lg bg-gray-950 text-white"</p>
              <p className="rounded-lg bg-[#FF4F9A]/12 px-3 text-[#FF4F9A]">+ className="rounded-2xl bg-white/70 text-plum shadow-blush"</p>
              <p className="px-3 text-[#9b6c82]">  &lt;PricingHeader trustSignals="visible" /&gt;</p>
              <p className="rounded-lg bg-[#FF4F9A]/12 px-3 text-[#FF4F9A]">+ &lt;UpgradeCTA tone="primary-blush" /&gt;</p>
              <p className="rounded-lg bg-[#FF4F9A]/12 px-3 text-[#FF4F9A]">+ &lt;PaymentNote copy="calm" /&gt;</p>
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-white/80 bg-white/58 p-4 shadow-sm">
            <p className="mb-4 text-sm font-semibold text-[#553047]">Review summary</p>
            <div className="space-y-3">
              {[["Intent", "Soften billing UI"], ["Risk", "Payment trust"], ["Status", "Checks passing"]].map(([label, value]) => <div key={label} className="rounded-2xl bg-[#FFD1DC]/38 p-3"><p className="text-xs font-semibold text-[#FF4F9A]">{label}</p><p className="text-sm font-semibold text-[#604056]">{value}</p></div>)}
            </div>
            <Button className="mt-5 h-11 w-full rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20">Accept selected file</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ReviewChecklistPanel() {
  const checks = ["Visual preview matches prompt", "Contrast passes on blush surfaces", "Payment trust signals remain visible", "No unrelated files changed"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Review checklist" title="Approval should feel guided, not risky" />
        <div className="space-y-3">{checks.map((check, index) => <div key={check} className="flex items-center gap-3 rounded-[1.25rem] border border-white/80 bg-white/60 p-4 shadow-sm"><div className={`grid h-9 w-9 place-items-center rounded-xl ${index < 3 ? "bg-[#FFD1DC] text-[#FF4F9A]" : "bg-white text-[#c489a0]"}`}>{index < 3 ? <CheckCircle2 className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</div><p className="text-sm font-medium text-[#70475b]">{check}</p></div>)}</div>
      </CardContent>
    </Card>
  );
}

function DiffFileNavigator() {
  const groups = [
    ["UI", "billing/page.tsx", "+18 −4"],
    ["Component", "components/Pricing.tsx", "+12 −3"],
    ["Style", "styles/blush.css", "+8 −0"],
    ["Copy", "copy/billing.json", "+4 −5"],
  ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="File navigator" title="Group changes by meaning, not just filename"><Pill>42 additions</Pill></SectionHeader>
        <div className="grid gap-3 md:grid-cols-2">{groups.map(([group, file, stat], index) => <div key={file} className={`rounded-[1.35rem] p-4 shadow-sm ${index === 0 ? "bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E] text-white" : "bg-white/60 text-[#70475b] border border-white/80"}`}><div className="mb-4 flex items-center justify-between"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${index === 0 ? "bg-white/20 text-white" : "bg-[#FFD1DC]/55 text-[#FF4F9A]"}`}>{group}</span><span className="text-xs font-semibold">{stat}</span></div><p className="font-mono text-sm">{file}</p></div>)}</div>
      </CardContent>
    </Card>
  );
}

function ReviewDecisionDock() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Decision dock" title="Accepting AI work needs multiple levels"><Pill>file / batch / all</Pill></SectionHeader>
        <div className="rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/80 p-5 shadow-inner">
          <div className="mb-5 rounded-[1.4rem] bg-white/70 p-4 shadow-sm"><p className="font-semibold text-[#553047]">Ready to approve</p><p className="mt-1 text-sm text-[#8a6074]">3 files passed checks. 1 copy change still needs a glance.</p></div>
          <div className="grid gap-3 md:grid-cols-3"><Button className="h-12 rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20">Accept file</Button><Button variant="outline" className="h-12 rounded-2xl border-[#F8C8DC] bg-white/70 text-[#70475b]">Accept safe changes</Button><Button variant="outline" className="h-12 rounded-2xl border-[#F8C8DC] bg-white/70 text-[#70475b]">Request revision</Button></div>
          <div className="mt-3 grid gap-3 md:grid-cols-2"><Button variant="outline" className="rounded-2xl border-[#F8C8DC] bg-white/55 text-[#70475b]">Open preview</Button><Button variant="outline" className="rounded-2xl border-[#F8C8DC] bg-white/55 text-[#70475b]">Reject all</Button></div>
        </div>
      </CardContent>
    </Card>
  );
}

function ReviewFailureRecovery() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Failure recovery" title="When review fails, the product should lower anxiety" />
        <div className="rounded-[1.7rem] border border-[#FF9A9E]/35 bg-[#FF9A9E]/14 p-5">
          <div className="mb-5 flex items-start gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/65 text-[#d85b62]"><CircleAlert className="h-5 w-5" /></div><div><p className="font-semibold text-[#70475b]">One check needs attention</p><p className="mt-1 text-sm leading-6 text-[#8a6074]">The CTA text on a coral gradient is below contrast target. The agent can switch it to plum or white.</p></div></div>
          <div className="grid gap-3 md:grid-cols-2"><Button className="rounded-2xl bg-[#FF4F9A] text-white">Fix with agent</Button><Button variant="outline" className="rounded-2xl border-white/80 bg-white/65 text-[#70475b]">Show failing line</Button></div>
        </div>
      </CardContent>
    </Card>
  );
}

function EditorShellSystem() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="overflow-hidden rounded-[1.8rem] border border-white/80 bg-[#fff8fb]/80 shadow-inner">
          <div className="flex items-center justify-between border-b border-[#F8C8DC]/70 bg-white/60 px-4 py-3">
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#FF4F9A]" /><span className="h-3 w-3 rounded-full bg-[#FF9A9E]" /><span className="h-3 w-3 rounded-full bg-[#EFCFE3]" /></div>
            <div className="flex items-center gap-2 rounded-2xl bg-white/70 px-3 py-1.5 text-xs text-[#8a6074]"><Command className="h-3.5 w-3.5 text-[#FF4F9A]" /> Workspace shell</div>
          </div>
          <div className="grid min-h-[520px] grid-cols-[210px_1fr_290px]">
            <aside className="border-r border-[#F8C8DC]/70 bg-[#ffeef4]/70 p-3">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#a76782]">Explorer</p>
              {['app', 'components', 'styles', 'copy'].map((folder, index) => <div key={folder} className="mb-2 rounded-2xl bg-white/55 px-3 py-2 text-xs font-semibold text-[#70475b]">▾ {folder}</div>)}
            </aside>
            <section className="grid grid-rows-[44px_1fr_130px] bg-[#fff8fb]">
              <div className="flex items-center gap-2 border-b border-[#F8C8DC]/70 bg-white/45 px-3">
                {['page.tsx', 'Pricing.tsx', 'blush.css'].map((tab, index) => <div key={tab} className={`rounded-xl px-3 py-1.5 text-xs font-semibold ${index === 1 ? 'bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/18' : 'bg-white/60 text-[#8a6074]'}`}>{tab}</div>)}
              </div>
              <div className="p-5 font-mono text-xs leading-6 text-[#654359]"><p><span className="text-[#FF4F9A]">export</span> function PricingCard() {'{'}</p><p className="pl-5">return &lt;Card surface=<span className="text-[#FF4F9A]">"blush-glass"</span> /&gt;</p><p>{'}'}</p><div className="mt-5 rounded-2xl bg-[#FF4F9A]/12 p-4 font-sans text-sm text-[#7f5268]">Inline agent note: selected component is safe to soften.</div></div>
              <div className="border-t border-[#F8C8DC]/70 bg-[#ffeef4]/70 p-3 font-mono text-xs text-[#70475b]"><p className="mb-2 font-sans font-semibold text-[#553047]">Terminal</p><p>✓ preview ready</p><p>→ watching billing/page.tsx</p></div>
            </section>
            <aside className="border-l border-[#F8C8DC]/70 bg-[#ffeaf2]/75 p-3">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#553047]"><Bot className="h-4 w-4 text-[#FF4F9A]" /> Agent context</p>
              <div className="space-y-3"><div className="rounded-2xl bg-white/60 p-3 text-xs leading-5 text-[#70475b]">Selected: PricingCard</div><div className="rounded-2xl bg-gradient-to-br from-[#FF5DA2] to-[#FF9A9E] p-3 text-xs leading-5 text-white">I can update this card and preserve trust signals.</div></div>
            </aside>
          </div>
          <div className="flex items-center justify-between border-t border-[#F8C8DC]/70 bg-white/55 px-4 py-2 text-xs text-[#8a6074]"><span>main · clean</span><span>TypeScript · Preview on · Agent ready</span></div>
        </div>
      </CardContent>
    </Card>
  );
}

function FileTreeSystem() {
  const items = ['app/billing/page.tsx', 'components/Pricing.tsx', 'components/Button.tsx', 'styles/blush.css', 'copy/billing.json'];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="File tree" title="The explorer needs hierarchy and warmth" />
        <div className="rounded-[1.7rem] border border-white/80 bg-[#ffeef4]/75 p-4 shadow-inner">
          <div className="mb-4 flex items-center justify-between"><p className="text-sm font-semibold text-[#553047]">blush-editor</p><Pill>5 touched</Pill></div>
          <div className="space-y-2">{items.map((item, index) => <div key={item} className={`flex items-center justify-between rounded-2xl px-3 py-2 text-xs ${index === 1 ? 'bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/18' : 'bg-white/58 text-[#70475b]'}`}><span>{item}</span>{index < 2 && <span className={index === 1 ? 'text-white/70' : 'text-[#FF4F9A]'}>●</span>}</div>)}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function TabAndSplitSystem() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Tabs & split view" title="Dense editor controls, softened surfaces"><Pill>split preview</Pill></SectionHeader>
        <div className="overflow-hidden rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/80 shadow-inner">
          <div className="flex gap-2 border-b border-[#F8C8DC]/70 bg-white/55 p-2">{['Pricing.tsx', 'Preview', 'Diff'].map((tab, i) => <div key={tab} className={`rounded-2xl px-4 py-2 text-xs font-semibold ${i === 0 ? 'bg-[#FF4F9A] text-white' : 'bg-white/60 text-[#8a6074]'}`}>{tab}</div>)}</div>
          <div className="grid min-h-[300px] grid-cols-2"><div className="border-r border-[#F8C8DC]/70 p-5 font-mono text-xs leading-6 text-[#654359]"><p>&lt;PricingCard /&gt;</p><p className="text-[#FF4F9A]">+ tone="blush"</p></div><div className="p-5"><div className="h-full rounded-[1.5rem] bg-gradient-to-br from-white to-[#FFD1DC]/65 p-5 shadow-lg"><p className="text-sm font-semibold text-[#FF4F9A]">Preview</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[#553047]">Studio plan</h3></div></div></div>
        </div>
      </CardContent>
    </Card>
  );
}

function CodeCanvasSystem() {
  const rows = ['Line numbers stay muted', 'Current line gets blush tint', 'Inline suggestion floats near selection', 'Code remains more important than decoration'];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Code canvas" title="Soft UI cannot reduce code readability" />
        <div className="rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/80 p-5 shadow-inner">
          <div className="space-y-2">{rows.map((row, index) => <div key={row} className={`grid grid-cols-[40px_1fr] rounded-xl px-3 py-2 font-mono text-xs ${index === 1 ? 'bg-[#FFD1DC]/45 text-[#FF4F9A]' : 'text-[#70475b]'}`}><span className="text-[#c489a0]">{index + 12}</span><span>{row}</span></div>)}</div>
          <div className="mt-5 rounded-[1.4rem] bg-gradient-to-r from-[#FF4F9A] to-[#FF9A9E] p-4 text-white shadow-lg shadow-[#FF4F9A]/18"><p className="text-sm font-semibold">Canvas rule</p><p className="mt-1 text-xs leading-5 text-white/78">Use blush for focus and suggestions only. The code itself must stay calm and legible.</p></div>
        </div>
      </CardContent>
    </Card>
  );
}

function TerminalStatusSystem() {
  const statuses = ['main', 'clean', 'preview on', 'agent ready'];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Terminal & status" title="Technical feedback with a calmer tone" />
        <div className="rounded-[1.7rem] border border-white/80 bg-[#ffeef4]/75 p-4 shadow-inner">
          <div className="mb-4 rounded-[1.4rem] bg-white/65 p-4 font-mono text-xs leading-6 text-[#70475b]"><p>$ pnpm preview</p><p className="text-[#FF4F9A]">✓ Ready on localhost:3000</p><p>→ watching blush tokens</p></div>
          <div className="flex flex-wrap gap-2">{statuses.map((status, index) => <span key={status} className={`rounded-full px-3 py-1 text-xs font-semibold ${index === 2 ? 'bg-[#FF4F9A] text-white' : 'bg-white/65 text-[#8a6074]'}`}>{status}</span>)}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function ClickableJourneyConcept() {
  const tabs = ["Prompt", "Plan", "Edit", "Merge"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <div className="mb-5 flex flex-wrap gap-2 rounded-[1.5rem] border border-white/80 bg-white/50 p-2 shadow-inner">
          {tabs.map((tab, index) => (
            <div key={tab} className={`flex-1 rounded-2xl px-4 py-3 text-center text-sm font-semibold ${index === 1 ? "bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20" : "bg-white/55 text-[#8a6074]"}`}>{index + 1}. {tab}</div>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-[280px_1fr_260px]">
          <div className="rounded-[1.7rem] bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] p-5 text-white shadow-xl shadow-[#FF4F9A]/20">
            <Bot className="mb-8 h-8 w-8" />
            <p className="text-2xl font-semibold tracking-[-0.04em]">Agent is planning the safest path.</p>
            <p className="mt-3 text-sm leading-6 text-white/78">The user sees intent, scope, and risk before any files change.</p>
          </div>
          <div className="rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/75 p-5 shadow-inner">
            <div className="mb-4 flex items-center justify-between"><p className="font-semibold text-[#553047]">Proposed change set</p><Pill>6 files</Pill></div>
            <div className="grid gap-3 md:grid-cols-2">
              {["Billing cards", "CTA hierarchy", "Empty payment state", "Error copy", "Pricing tokens", "Preview route"].map((item, index) => <div key={item} className="rounded-2xl bg-white/70 p-4 shadow-sm"><div className="mb-3 flex items-center justify-between"><span className="text-sm font-semibold text-[#604056]">{item}</span><CheckCircle2 className="h-4 w-4 text-[#FF4F9A]" /></div><p className="text-xs leading-5 text-[#8a6074]">Will use blush surfaces and stronger action contrast.</p></div>)}
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-white/80 bg-white/58 p-5 shadow-sm">
            <p className="mb-4 font-semibold text-[#553047]">User control</p>
            <div className="space-y-3"><Button className="h-11 w-full rounded-2xl bg-[#FF4F9A] text-white">Approve plan</Button><Button variant="outline" className="h-11 w-full rounded-2xl border-[#F8C8DC] bg-white/70 text-[#70475b]">Edit scope</Button><Button variant="outline" className="h-11 w-full rounded-2xl border-[#F8C8DC] bg-white/70 text-[#70475b]">Ask why</Button></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PromptComposerDeepDive() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Step 1 detail" title="Prompt composer as the real entry point"><Pill>input state</Pill></SectionHeader>
        <div className="rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/80 p-4 shadow-inner">
          <div className="mb-4 flex gap-2"><Pill>Billing page</Pill><Pill>Soft but serious</Pill><Pill>Team plan</Pill></div>
          <div className="rounded-[1.5rem] bg-white/75 p-5 shadow-sm">
            <p className="mb-10 text-lg leading-8 text-[#604056]">Make this billing page feel less cold. Keep it trustworthy, but use our blush system and improve the upgrade CTA.</p>
            <div className="flex items-center justify-between border-t border-[#F8C8DC]/70 pt-4"><div className="flex gap-2"><span className="rounded-xl bg-[#FFD1DC]/60 px-3 py-1 text-xs text-[#FF4F9A]">uses current file</span><span className="rounded-xl bg-white px-3 py-1 text-xs text-[#8a6074]">includes theme tokens</span></div><Button className="rounded-2xl bg-[#FF4F9A] text-white"><Send className="mr-2 h-4 w-4" />Send</Button></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AgentPlanDeepDive() {
  const risks = ["Text contrast", "Payment trust", "CTA over-pink" ];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Step 2 detail" title="The agent earns trust before editing"><Pill>plan state</Pill></SectionHeader>
        <div className="rounded-[1.7rem] bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] p-5 text-white shadow-xl shadow-[#FF4F9A]/20">
          <p className="mb-3 text-sm font-semibold text-white/80">Agent plan</p>
          <h3 className="text-3xl font-semibold tracking-[-0.05em]">I’ll preserve trust signals and only soften the surrounding chrome.</h3>
          <div className="mt-6 grid gap-3 md:grid-cols-3">{risks.map((risk) => <div key={risk} className="rounded-2xl bg-white/16 p-3"><CircleAlert className="mb-3 h-4 w-4" /><p className="text-sm font-semibold">Watch: {risk}</p></div>)}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function EditExecutionDeepDive() {
  const files = ["billing/page.tsx", "components/Pricing.tsx", "styles/blush.css", "copy/billing.json"];
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Step 3 detail" title="Editing should feel observable, not magical"><Pill>execution state</Pill></SectionHeader>
        <div className="grid gap-4 md:grid-cols-[220px_1fr]">
          <div className="rounded-[1.7rem] border border-white/80 bg-white/58 p-4 shadow-sm"><p className="mb-4 text-sm font-semibold text-[#553047]">Touched files</p><div className="space-y-2">{files.map((file, index) => <div key={file} className={`rounded-2xl px-3 py-2 text-xs ${index === 1 ? "bg-[#FF4F9A] text-white" : "bg-[#FFD1DC]/45 text-[#8a6074]"}`}>{file}</div>)}</div></div>
          <div className="rounded-[1.7rem] border border-white/80 bg-[#fff8fb]/80 p-5 font-mono text-xs leading-6 shadow-inner">
            <p className="text-[#9b6c82]">// live diff preview</p>
            <p><span className="text-[#FF4F9A]">+</span> card.surface = "blush-glass"</p>
            <p><span className="text-[#FF4F9A]">+</span> cta.intent = "upgrade-primary"</p>
            <p><span className="text-[#d85b62]">-</span> background = "cold-gray"</p>
            <div className="mt-5 rounded-2xl bg-[#FF4F9A]/12 p-4 font-sans text-sm text-[#7f5268]">The agent is changing structure and tokens, not randomly repainting the page.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MergeSummaryDeepDive() {
  return (
    <Card className="rounded-[2rem] border-white/75 bg-white/48 shadow-2xl shadow-[#FF4F9A]/8 backdrop-blur-2xl">
      <CardContent className="p-6">
        <SectionHeader eyebrow="Step 4 detail" title="Merge summary as a confident finish"><Pill>ship state</Pill></SectionHeader>
        <div className="rounded-[1.7rem] border border-white/80 bg-white/60 p-5 shadow-sm">
          <div className="mb-6 flex items-center gap-4"><div className="grid h-16 w-16 place-items-center rounded-[1.4rem] bg-gradient-to-br from-[#FF4F9A] to-[#FF9A9E] text-white shadow-lg shadow-[#FF4F9A]/20"><Rocket className="h-7 w-7" /></div><div><h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#553047]">Merged into blush-command-ui</h3><p className="text-sm text-[#8a6074]">The billing page now matches the product tone.</p></div></div>
          <div className="grid gap-3 md:grid-cols-3">{["6 files", "42 additions", "0 warnings"].map((stat) => <div key={stat} className="rounded-2xl bg-[#FFD1DC]/38 p-4 text-center"><p className="text-xl font-semibold text-[#FF4F9A]">{stat}</p></div>)}</div>
          <Button className="mt-5 h-11 w-full rounded-2xl bg-[#FF4F9A] text-white shadow-lg shadow-[#FF4F9A]/20">Share final preview</Button>
        </div>
      </CardContent>
    </Card>
  );
}
