import BottomBar from "@/components/shared/bottom-bar";
import Sidebar from "@/components/shared/sidebar";

export default function DefaultLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={` relative dark overflow-x-hidden font-inter flex min-h-screen  text-[#D8D9D9] `}
    >
      <Sidebar />
      <BottomBar />
      <main
        className={`w-full pl-5 pb-20 sm:pl-[120px] bg-black  ${className}`}
      >
        {children}
      </main>
    </div>
  );
}
