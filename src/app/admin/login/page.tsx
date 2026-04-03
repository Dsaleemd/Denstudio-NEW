"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createSupabaseBrowser();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-admin-bg px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold tracking-[0.2em] text-admin-sidebar">
            DENSTUDIO
          </h1>
          <p className="text-[12px] text-admin-muted mt-1 tracking-wide">
            Admin Portal
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-admin-surface rounded-xl border border-admin-border p-7 space-y-4"
        >
          {error && (
            <div className="text-[13px] text-red-700 bg-red-50 border border-red-100 rounded-md px-3 py-2">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-admin-border rounded-md px-3 py-2 text-sm text-admin-text focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-admin-border rounded-md px-3 py-2 text-sm text-admin-text focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-admin-primary text-white font-semibold rounded-md py-2 text-[13px] hover:bg-admin-primary-hover transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
