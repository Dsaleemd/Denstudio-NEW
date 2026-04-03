"use client";

import { useEffect, useState, useCallback } from "react";

interface Task {
  id: string;
  title: string;
  description: string | null;
  assigned_to_email: string | null;
  enquiry_id: string | null;
  status: string;
  due_date: string | null;
  created_by_email: string | null;
  created_at: string;
}

const statusLabels: Record<string, string> = {
  todo: "To Do",
  in_progress: "In Progress",
  done: "Done",
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [filter, setFilter] = useState("");

  // Add form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [saving, setSaving] = useState(false);

  const fetchTasks = useCallback(async () => {
    const params = new URLSearchParams();
    if (filter) params.set("status", filter);
    const res = await fetch(`/api/admin/tasks?${params}`);
    if (res.ok) {
      const data = await res.json();
      setTasks(data.tasks || []);
    }
    setLoading(false);
  }, [filter]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    setSaving(true);

    const res = await fetch("/api/admin/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description: description || null,
        assigned_to_email: assignedTo || null,
        due_date: dueDate || null,
      }),
    });

    if (res.ok) {
      setTitle("");
      setDescription("");
      setAssignedTo("");
      setDueDate("");
      setShowAdd(false);
      fetchTasks();
    }
    setSaving(false);
  }

  async function handleStatusToggle(task: Task) {
    const next =
      task.status === "todo"
        ? "in_progress"
        : task.status === "in_progress"
          ? "done"
          : "todo";

    await fetch(`/api/admin/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    fetchTasks();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this task?")) return;
    await fetch(`/api/admin/tasks/${id}`, { method: "DELETE" });
    fetchTasks();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-5 h-5 border-2 border-admin-primary/30 border-t-admin-primary rounded-full animate-spin" />
      </div>
    );
  }

  const grouped = {
    todo: tasks.filter((t) => t.status === "todo"),
    in_progress: tasks.filter((t) => t.status === "in_progress"),
    done: tasks.filter((t) => t.status === "done"),
  };

  return (
    <div className="max-w-3xl space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-admin-text tracking-tight">
          Tasks
        </h1>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="bg-admin-primary text-white px-4 py-1.5 rounded-md text-[13px] font-medium hover:bg-admin-primary-hover transition-colors"
        >
          {showAdd ? "Cancel" : "Add Task"}
        </button>
      </div>

      {/* Filter */}
      <div className="flex gap-1.5">
        {["", "todo", "in_progress", "done"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-md text-[12px] font-medium transition-colors ${
              filter === f
                ? "bg-admin-primary text-white"
                : "bg-admin-surface border border-admin-border text-admin-text-secondary hover:bg-admin-bg"
            }`}
          >
            {f === "" ? "All" : statusLabels[f]}
          </button>
        ))}
      </div>

      {/* Add form */}
      {showAdd && (
        <form
          onSubmit={handleAdd}
          className="bg-admin-surface rounded-lg border border-admin-border p-4 space-y-3"
        >
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-admin-border rounded-md px-3 py-2 text-[13px] text-admin-text placeholder:text-admin-muted focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
            autoFocus
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="w-full border border-admin-border rounded-md px-3 py-2 text-[13px] text-admin-text placeholder:text-admin-muted resize-none focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
          />
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Assign to (email)"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="flex-1 border border-admin-border rounded-md px-3 py-2 text-[13px] text-admin-text placeholder:text-admin-muted focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
            />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border border-admin-border rounded-md px-3 py-2 text-[13px] text-admin-text focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="bg-admin-primary text-white px-4 py-1.5 rounded-md text-[13px] font-medium hover:bg-admin-primary-hover disabled:opacity-50 transition-colors"
          >
            {saving ? "Adding..." : "Add Task"}
          </button>
        </form>
      )}

      {/* Task groups */}
      {(filter ? [[filter, grouped[filter as keyof typeof grouped]]] : Object.entries(grouped))
        .filter(([, items]) => (items as Task[]).length > 0)
        .map(([status, items]) => (
          <div key={status as string}>
            <h2 className="text-[12px] font-semibold text-admin-text-secondary uppercase tracking-wider mb-2">
              {statusLabels[status as string]} ({(items as Task[]).length})
            </h2>
            <div className="space-y-1.5">
              {(items as Task[]).map((task) => (
                <div
                  key={task.id}
                  className="bg-admin-surface rounded-lg border border-admin-border px-4 py-3 flex items-start gap-3 group"
                >
                  <button
                    onClick={() => handleStatusToggle(task)}
                    className={`
                      mt-0.5 w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors
                      ${task.status === "done"
                        ? "bg-admin-primary border-admin-primary text-white"
                        : task.status === "in_progress"
                          ? "border-admin-accent bg-admin-accent/10"
                          : "border-admin-border hover:border-admin-primary/50"
                      }
                    `}
                  >
                    {task.status === "done" && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 5l2.5 2.5L8 3" />
                      </svg>
                    )}
                    {task.status === "in_progress" && (
                      <div className="w-1.5 h-1.5 bg-admin-accent rounded-full" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[13px] font-medium ${task.status === "done" ? "text-admin-muted line-through" : "text-admin-text"}`}>
                      {task.title}
                    </p>
                    {task.description && (
                      <p className="text-[12px] text-admin-muted mt-0.5 line-clamp-1">
                        {task.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-1">
                      {task.assigned_to_email && (
                        <span className="text-[11px] text-admin-text-secondary">
                          {task.assigned_to_email}
                        </span>
                      )}
                      {task.due_date && (
                        <span className={`text-[11px] ${isOverdue(task.due_date, task.status) ? "text-red-600" : "text-admin-muted"}`}>
                          Due {new Date(task.due_date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="text-admin-muted hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 4h8M5.5 4V3a1 1 0 011-1h1a1 1 0 011 1v1M10 4v7a1 1 0 01-1 1H5a1 1 0 01-1-1V4" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

      {tasks.length === 0 && (
        <p className="text-sm text-admin-muted text-center py-12">
          No tasks yet
        </p>
      )}
    </div>
  );
}

function isOverdue(dateStr: string, status: string): boolean {
  if (status === "done") return false;
  return new Date(dateStr) < new Date(new Date().toDateString());
}
