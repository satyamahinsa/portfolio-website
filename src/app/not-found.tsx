import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-sm text-muted">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">Page not found</h1>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-fg"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
