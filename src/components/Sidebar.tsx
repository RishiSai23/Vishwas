import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Upload,
  Brain,
  Settings,
  FileText,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Beneficiaries", path: "/beneficiaries", icon: Users },
    { label: "Upload Data", path: "/upload", icon: Upload },
    { label: "AI Scorecard", path: "/scorecard", icon: Brain },
    { label: "Reports", path: "/reports", icon: FileText },
    { label: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r bg-card h-screen sticky top-0">
      <div className="p-6 border-b">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-hero flex items-center justify-center">
            <span className="text-white font-bold">BC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Beneficiary</span>
            <span className="text-xs text-muted-foreground">Credit System</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground text-center">
          <p>Ministry of Social Justice</p>
          <p className="mt-1">& Empowerment</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;