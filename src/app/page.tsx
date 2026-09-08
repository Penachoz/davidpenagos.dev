import { MaintenanceScreen } from "@/components/maintenance-screen";
import { PortfolioHome } from "@/components/portfolio-home";
import { MAINTENANCE_MODE } from "@/content/site";

export default function HomePage() {
  if (MAINTENANCE_MODE) {
    return <MaintenanceScreen />;
  }

  return <PortfolioHome />;
}
