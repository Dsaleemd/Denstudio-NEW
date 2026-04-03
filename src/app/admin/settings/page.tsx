"use client";

import { useEffect, useState, useCallback } from "react";

interface AdminUser {
  id: string;
  email: string;
  created_at: string;
}

export default function AdminSettingsPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const fetchUsers = useCallback(async () => {
    const res = await fetch("/api/admin/users");
    if (res.ok) {
      const data = await res.json();
      setUsers(data.users || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Failed to create admin");
      setSaving(false);
      return;
    }

    setEmail("");
    setPassword("");
    setShowAdd(false);
    setSaving(false);
    fetchUsers();
  }

  async function handleDelete(id: string) {
    if (!confirm("Remove this admin?")) return;

    const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchUsers();
    } else {
      const data = await res.json();
      alert(data.error || "Failed to remove admin");
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-5 h-5 border-2 border-admin-primary/30 border-t-admin-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-admin-text tracking-tight">
          Settings
        </h1>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="bg-admin-primary text-white px-4 py-1.5 rounded-md text-[13px] font-medium hover:bg-admin-primary-hover transition-colors"
        >
          {showAdd ? "Cancel" : "Add Admin"}
        </button>
      </div>

      {/* Add form */}
      {showAdd && (
        <form
          onSubmit={handleAdd}
          className="bg-admin-surface rounded-lg border border-admin-border p-4 space-y-3"
        >
          {error && (
            <div className="text-[13px] text-red-700 bg-red-50 border border-red-100 rounded-md px-3 py-2">
              {error}
            </div>
          )}
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-admin-border rounded-md px-3 py-2 text-[13px] text-admin-text placeholder:text-admin-muted focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 border border-admin-border rounded-md px-3 py-2 text-[13px] text-admin-text placeholder:text-admin-muted focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="bg-admin-primary text-white px-4 py-1.5 rounded-md text-[13px] font-medium hover:bg-admin-primary-hover disabled:opacity-50 transition-colors"
          >
            {saving ? "Creating..." : "Create Admin"}
          </button>
        </form>
      )}

      {/* Users table */}
      <div>
        <h2 className="text-[12px] font-semibold text-admin-text-secondary uppercase tracking-wider mb-2">
          Admin Users
        </h2>
        <div className="bg-admin-surface rounded-lg border border-admin-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-admin-border">
                <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider">
                  Email
                </th>
                <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider hidden sm:table-cell">
                  Added
                </th>
                <th className="px-4 py-2.5 w-16"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-admin-border/60 last:border-0"
                >
                  <td className="px-4 py-3 text-[13px] text-admin-text">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-admin-muted hidden sm:table-cell">
                    {new Date(user.created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-[12px] text-red-500 hover:text-red-700 font-medium transition-colors"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
