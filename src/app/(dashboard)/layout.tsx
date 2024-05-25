import { Header, Sidebar } from "@/components/layouts";
import { ScrollArea } from "@/components/ui";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row gap-10 h-full">
      <div className="sm:flex hidden md:pb-10 pb-4">
        <Sidebar />
      </div>
      <main className="flex-1">
        <Header />
        <ScrollArea className="mt-[30px]">{children}</ScrollArea>
      </main>
    </div>
  );
}