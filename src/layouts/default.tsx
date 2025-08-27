import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative font-geist flex h-screen bg-[#0F1014] text-[#D8D9D9]">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
