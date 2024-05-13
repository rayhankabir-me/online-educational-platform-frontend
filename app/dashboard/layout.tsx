import DashboardSidebar from "../components/dashboard/DashboardSidebar";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardSidebar />
      {children}
    </>
  );
}
