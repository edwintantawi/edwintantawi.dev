import { Logo } from '~/components/logo';
import { Menu } from '~/components/menu';

export function AppBar() {
  return (
    <nav className="sticky top-0 flex items-center justify-between bg-background p-3 md:p-4 md:px-10 md:py-3 lg:px-20">
      <div className="flex items-center gap-1 font-mono text-xs text-slate-500 md:gap-2 md:text-sm">
        <Logo className="size-8" />
        <span>/</span>
        <span>Edwin Tantawi</span>
      </div>
      <Menu />
    </nav>
  );
}
