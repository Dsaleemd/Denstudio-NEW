import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = {
  title: "Admin | Denstudio",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-admin-bg">
      <AdminSidebar />
      <div className="flex-1 min-w-0">
        <div className="p-4 lg:p-6 pt-16 lg:pt-6">{children}</div>
      </div>
    </div>
  );
}
