export function MainNav() {
  return (
    <nav class="p-4 underline active:font-bold shadow-md mb-4 flex flex-row gap-4">
      <a
        href="/"
        class="hover:font-bold active:text-primary-500 target:text-primary-400"
      >
        Home
      </a>
      {/* visited:text-slate-400 */}
      <a
        href="/page2"
        class="hover:font-bold active:text-primary-500 target:text-primary-400"
      >
        Page 2
      </a>
    </nav>
  );
}
