"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("authUser", JSON.stringify(data.user));
      router.replace("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7f8fc", padding: 24, fontFamily: "Arial, sans-serif" }}>
      <form onSubmit={submit} style={{ width: "100%", maxWidth: 420, background: "#fff", border: "1px solid #e4e6ee", borderRadius: 16, padding: 28, boxShadow: "0 12px 35px rgba(20,24,40,.08)" }}>
        <h1 style={{ margin: 0, fontSize: 30, color: "#182033" }}>ZCode CRM</h1>
        <p style={{ marginTop: 8, color: "#75809a" }}>Sign in to continue</p>
        {error && <div style={{ marginTop: 16, background: "#fff1f1", border: "1px solid #f3c7c7", color: "#b42318", padding: 12, borderRadius: 10 }}>{error}</div>}
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Email" style={{ width: "100%", boxSizing: "border-box", marginTop: 18, padding: 12, border: "1px solid #dfe2ea", borderRadius: 10, fontSize: 14 }} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required minLength={8} placeholder="Password" style={{ width: "100%", boxSizing: "border-box", marginTop: 12, padding: 12, border: "1px solid #dfe2ea", borderRadius: 10, fontSize: 14 }} />
        <button type="submit" disabled={loading} style={{ width: "100%", marginTop: 18, padding: 12, border: 0, borderRadius: 10, background: "#5936df", color: "#fff", fontSize: 15, fontWeight: 700, cursor: loading ? "wait" : "pointer", opacity: loading ? 0.7 : 1 }}>{loading ? "Signing in..." : "Sign in"}</button>
      </form>
    </main>
  );
}

