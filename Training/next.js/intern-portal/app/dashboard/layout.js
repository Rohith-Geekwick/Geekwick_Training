import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "200px",
        background: "#ddd",
        padding: "10px"
      }}>
        <h3>Dashboard</h3>
        <Link href="/dashboard/profile">Profile</Link><br />
        <Link href="/dashboard/settings">Settings</Link>
      </div>

      {/* Page Content */}
      <div style={{ padding: "20px" }}>
        {children}
      </div>

    </div>
  );
}