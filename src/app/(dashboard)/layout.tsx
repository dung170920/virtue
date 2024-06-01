import { Header, Sidebar } from "@/components/layouts";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-full">
      <div className="sm:flex hidden md:pb-10 pb-4">
        <Sidebar />
      </div>
      <main className="flex flex-col flex-1 max-w-screen-2xl mx-auto overflow-hidden">
        <Header />
        <div className="mt-[30px] flex-1 md:px-10 md:pb-10 pb-4 w-full overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}