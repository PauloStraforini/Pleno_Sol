import { Bold, Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Inicio",
    url: "#",
    icon: Home,
    size : "w-7 h-7",
  },
  {
    title: "Notificações",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendario",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Pesquisar",
    url: "#",
    icon: Search,
    font: Bold,
  },
  {
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-green border-10">
      <SidebarContent className="bg-emerald-500 ">
        <SidebarGroup >
          <SidebarGroupLabel className="text-black font-bold ">INÍCIO</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="text-black">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="text-black" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
