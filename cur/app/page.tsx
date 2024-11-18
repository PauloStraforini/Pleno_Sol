import { AppSidebar } from "@/components/ui/app-sidebar";
import { ChartContainer } from "@/components/ui/chart";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


export default function Home() {
  return (
    <div>
      <SidebarProvider className="w-7 h-7">
      <AppSidebar />
          <main>
            <SidebarTrigger/>   
          </main>
      </SidebarProvider>
    </div>
  );

}
