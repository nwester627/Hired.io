import React, { useMemo, useState } from "react";

const passwordStrength = (pwd) => {
  let score = 0;
  if (!pwd) return { score, label: "Too short" };
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[a-z]/.test(pwd)) score++;
  if (/\d/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  const labels = ["Very weak", "Weak", "Okay", "Good", "Strong", "Elite"];
  return { score: Math.min(score, 5), label: labels[Math.min(score, 5)] };
};

const SignupForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // success | error
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const pwd = form.password;
  const strength = useMemo(() => passwordStrength(pwd), [pwd]);

  const backendUrl = "http://localhost:8000/auth/register";

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setStatus("");

    if (!form.agree) {
      setMessage("Please accept the Terms to continue.");
      setStatus("error");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      if (res.status === 201) {
        setStatus("success");
        setMessage("Welcome aboard! Your account was created.");
        setForm({ name: "", email: "", password: "", agree: false });
        if (onSuccess) onSuccess();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(data?.detail || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage(
        "Could not reach the server. Check your backend and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Glassy card */}
      <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-md shadow-xl">
        <div className="px-8 pt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Create your account</h3>
            <p className="mt-1 text-sm text-slate-600">
              Start free. No credit card required.
            </p>
          </div>

          {/* Social auth */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white py-2.5 px-4 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition"
            >
              {/* Tiny inline Google mark */}
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#FFC107"
                  d="M22 12.2c0-.8-.1-1.6-.3-2.3H12v4.4h5.6c-.2 1-.8 1.9-1.7 2.5v2H20c1.2-1.1 2-2.9 2-4.6z"
                />
                <path
                  fill="#4CAF50"
                  d="M12 22c2.4 0 4.4-.8 5.9-2.2l-2.9-2.3c-.8.5-1.9.9-3 .9-2.3 0-4.3-1.6-5-3.7H4v2.3A10 10 0 0 0 12 22z"
                />
                <path
                  fill="#1976D2"
                  d="M7 12a5 5 0 0 1 0-3.1V6.6H4A10 10 0 0 0 2 12a10 10 0 0 0 2 5.4l3-2.3A5.9 5.9 0 0 1 7 12z"
                />
                <path
                  fill="#FF3D00"
                  d="M12 6.1c1.3 0 2.6.4 3.6 1.3l2.7-2.7A9.8 9.8 0 0 0 12 2 10 10 0 0 0 4 6.6l3 2.3c.7-2.1 2.7-3.7 5-3.7z"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="relative my-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs font-medium text-slate-500">
                or
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Full name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={onChange}
              required
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={onChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPwd((s) => !s)}
                className="text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                {showPwd ? "Hide" : "Show"}
              </button>
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPwd ? "text" : "password"}
                autoComplete="new-password"
                value={form.password}
                onChange={onChange}
                required
                placeholder="At least 8 characters"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition pr-10"
              />
              {/* Lock icon */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 17a2 2 0 0 0 2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 0 2 2m6-6h-1V9a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2m-8-2a3 3 0 0 1 6 0v2H10z"
                  />
                </svg>
              </div>
            </div>

            {/* Strength bar */}
            <div className="mt-2">
              <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    strength.score <= 1
                      ? "bg-red-400"
                      : strength.score === 2
                      ? "bg-yellow-400"
                      : strength.score === 3
                      ? "bg-lime-500"
                      : "bg-green-600"
                  }`}
                  style={{ width: `${(strength.score / 5) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Strength: {strength.label}
              </p>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={onChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
            />
            <label htmlFor="agree" className="text-sm text-slate-600">
              I agree to the{" "}
              <a
                href="#"
                className="text-slate-900 underline-offset-2 hover:underline"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-slate-900 underline-offset-2 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-white text-sm font-semibold shadow-sm hover:bg-orange-700 disabled:opacity-60 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {loading && (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 0 1 8-8v4A4 4 0 0 0 8 12H4z"
                />
              </svg>
            )}
            Create account
          </button>

          {/* Feedback */}
          {message && (
            <div
              className={`rounded-lg border px-3 py-2 text-sm ${
                status === "success"
                  ? "border-green-300 bg-green-50 text-green-700"
                  : "border-red-300 bg-red-50 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          {/* Small print */}
          <p className="text-[11px] text-slate-500 text-center">
            We’ll never share your email. You can delete your account anytime.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
