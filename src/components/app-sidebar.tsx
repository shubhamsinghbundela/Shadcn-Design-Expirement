import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { NavUser } from "@/components/nav-user"
import { IconChartBar, IconDashboard } from "@tabler/icons-react"
import { NavMain } from "@/components/nav-main"

export function AppSidebar() {
  //   const {
  //     state,
  //     open,
  //     setOpen,
  //     openMobile,
  //     setOpenMobile,
  //     isMobile,
  //     toggleSidebar,
  //   } = useSidebar()

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: IconDashboard,
      },
      {
        title: "Check Balance",
        url: "#",
        icon: IconChartBar,
      },
    ],
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <span className="text-base font-semibold">Payments</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
