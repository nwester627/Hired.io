import React from "react";
import SignupForm from "./SignupForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-orange-500/10 border border-orange-200 flex items-center justify-center">
              {/* Simple brand mark */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="text-orange-600"
              >
                <path
                  fill="currentColor"
                  d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22L12 18.77L5.82 22L7 14.15l-5-4.88l6.91-1.01z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              header<span className="text-orange-600">.io</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button
              type="button"
              className="hover:text-slate-900 transition bg-transparent border-none p-0 m-0 cursor-pointer underline-offset-2"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
              }}
            >
              Features
            </button>
            <button
              type="button"
              className="hover:text-slate-900 transition bg-transparent border-none p-0 m-0 cursor-pointer underline-offset-2"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
              }}
            >
              Pricing
            </button>
            <button
              type="button"
              className="hover:text-slate-900 transition bg-transparent border-none p-0 m-0 cursor-pointer underline-offset-2"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
              }}
            >
              Docs
            </button>
            <button
              type="button"
              className="hover:text-slate-900 transition bg-transparent border-none p-0 m-0 cursor-pointer underline-offset-2"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
              }}
            >
              Blog
            </button>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition">
              Log in
            </button>
            <button className="px-4 py-2 rounded-lg bg-orange-600 text-white shadow-sm hover:bg-orange-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-14">
          {/* Left: Marketing copy */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              New: Team workspaces & SSO
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Ship work faster with a{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                focused workflow
              </span>
            </h2>

            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              header<span className="text-orange-600">.io</span> keeps your
              tasks, docs, and discussions in one, elegant place. Less clutter.
              More momentum.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Real-time collaboration",
                  desc: "Comments, mentions, and presence.",
                },
                {
                  title: "Powerful search",
                  desc: "Find anything in milliseconds.",
                },
                {
                  title: "Secure by default",
                  desc: "SSO, 2FA, least-privilege.",
                },
                { title: "Beautiful API", desc: "Type-safe SDKs & webhooks." },
              ].map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-md bg-orange-500/10 text-orange-600 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m9 16.2l-3.5-3.5l1.4-1.4L9 13.4l8.1-8.1l1.4 1.42z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">{f.title}</p>
                    <p className="text-sm text-slate-600">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["A", "B", "C"].map((x) => (
                  <div
                    key={x}
                    className="h-8 w-8 rounded-full bg-slate-200 border border-white flex items-center justify-center text-xs font-semibold"
                  >
                    {x}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500">
                Trusted by teams at startups & enterprises
              </p>
            </div>
          </div>

          {/* Right: Centered signup card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <SignupForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>
            © {new Date().getFullYear()} header.io — All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="hover:text-slate-900 bg-transparent border-none p-0 m-0 cursor-pointer underline-offset-2"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
              }}
            >
              Privacy
            </button>
            <button
              type="button"
              className="hover:text-slate-900 bg-transparent border-none p-0 m-0 cursor-pointer underline-offset-2"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
              }}
            >
              Terms
            </button>
            <button
              type="button"
              className="hover:text-slate-900 bg-transparent border-none p-0 m-0 cursor-pointer underline-offset-2"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
              }}
            >
              Status
            </button>
            <button
              type="button"
              className="hover:text-slate-900 bg-transparent border-none p-0 m-0 cursor-pointer underline-offset-2"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
              }}
            >
              Support
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
