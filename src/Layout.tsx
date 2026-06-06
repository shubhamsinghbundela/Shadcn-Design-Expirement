import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "16rem",
          "--sidebar-width-mobile": "18rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
      {/* <Sidebar variant="sidebar" collapsible="icon" />
      <SidebarInset>
        <main>{children}</main>
      </SidebarInset> */}
    </SidebarProvider>
  )
}
