import { MenuItems } from "@/components/menu-items";
import { StatsCards } from "@/components/state-card";
import { UserHeader } from "@/components/user-header";

export default function RoutesPage() {
  return (
    <>
      {/* Cruise Type Selection */}
      <div className="flex flex-col justify-center gap-4 mb-6">
      <UserHeader />
      <StatsCards />
      <MenuItems />
      
      </div>
    </>
  )
}

