import { Card, Badge } from "../components/primitives";

export function SlidePreview() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Card className="min-h-[640px] p-10">
        <Badge variant="status">Slide 01</Badge>
        <h1 className="mt-20 max-w-3xl text-7xl font-semibold leading-[0.95] tracking-[-0.07em] text-plum-strong">Soft surfaces. Sharp workflows.</h1>
        <p className="mt-6 max-w-xl text-xl leading-8 text-plum-muted">A reusable slide language for Blush Command System: one message, one main visual, three callouts maximum.</p>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {['Blush environment', 'Human control', 'Precise technical info'].map((item) => <Card key={item} className="p-5"><p className="font-semibold text-plum-strong">{item}</p></Card>)}
        </div>
      </Card>
    </main>
  );
}
