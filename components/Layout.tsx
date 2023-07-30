import { ComponentChildren } from "preact";
import { MainNav } from "./MainNav.tsx";

type LayoutProps = {
  children: ComponentChildren;
};

export function Layout(props: LayoutProps) {
  return (
    <div class="min-h-[100dvh] bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100">
      <header>
        <MainNav></MainNav>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
