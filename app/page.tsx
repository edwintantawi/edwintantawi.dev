import { Button } from '~/components/ui/button';

export default function RootPage() {
  return (
    <main className="px-3 md:px-4">
      <header className="space-y-6 py-12">
        <div className="flex flex-col items-center text-center">
          <p className="mb-1 w-fit rounded-full border bg-slate-100 px-3 py-1 text-xs text-muted-foreground md:mb-2 md:text-sm">
            👋 Hi, I&apos;m Edwin Tantawi
          </p>
          <h1 className="mb-1 text-4xl font-extrabold md:mb-2 md:text-5xl">
            Web <span className="text-slate-500">Front-End</span> Engineer
          </h1>
          <p className="text-sm text-muted-foreground md:text-xl">
            Crafting Engaging Web Experiences
          </p>
        </div>

        <div className="mx-auto flex max-w-96 gap-2">
          <Button size="lg" className="w-full">
            Get In Touch
          </Button>
          <Button size="lg" variant="outline" className="w-full">
            Resume
          </Button>
        </div>
      </header>
    </main>
  );
}
