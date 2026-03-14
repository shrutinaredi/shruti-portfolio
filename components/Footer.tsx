export default function Footer() {
  return (
    <footer className="py-6 border-t border-border bg-bg">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-dim">
        <span>
          Built with ♥ by <span className="text-purple-light">Shruti Agarwal</span>
        </span>
        <span className="font-mono">
          Next.js · Tailwind · Framer Motion
          <span className="text-dim mx-2">·</span>
          press <kbd className="px-1 py-0.5 bg-surface border border-border rounded text-teal-DEFAULT">`</kbd> for a secret
        </span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
