import { Users, CheckCircle, Clock, TrendingUp } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import StatsCard from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const Dashboard = () => {
  const monthlyData = [
    { month: "Jan", applications: 45, approved: 35 },
    { month: "Feb", applications: 52, approved: 42 },
    { month: "Mar", applications: 48, approved: 38 },
    { month: "Apr", applications: 61, approved: 51 },
    { month: "May", applications: 55, approved: 45 },
    { month: "Jun", applications: 67, approved: 58 },
  ];

  const creditScoreDistribution = [
    { range: "300-450", count: 12 },
    { range: "450-550", count: 28 },
    { range: "550-650", count: 45 },
    { range: "650-750", count: 38 },
    { range: "750-850", count: 22 },
  ];

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening with beneficiary applications.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Beneficiaries"
              value="2,847"
              subtitle="Registered users"
              icon={Users}
              trend={{ value: "12%", isPositive: true }}
              delay={0}
            />
            <StatsCard
              title="Approved Loans"
              value="1,234"
              subtitle="Successfully processed"
              icon={CheckCircle}
              trend={{ value: "8%", isPositive: true }}
              delay={0.1}
            />
            <StatsCard
              title="Pending Applications"
              value="145"
              subtitle="Awaiting review"
              icon={Clock}
              trend={{ value: "3%", isPositive: false }}
              delay={0.2}
            />
            <StatsCard
              title="Average Credit Score"
              value="648"
              subtitle="System-wide average"
              icon={TrendingUp}
              trend={{ value: "5%", isPositive: true }}
              delay={0.3}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Monthly Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="applications" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      name="Applications"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="approved" 
                      stroke="hsl(var(--accent))" 
                      strokeWidth={2}
                      name="Approved"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Credit Score Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={creditScoreDistribution}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="range" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "New application submitted", user: "Rajesh Kumar", time: "2 minutes ago", status: "pending" },
                  { action: "Loan approved", user: "Priya Sharma", time: "15 minutes ago", status: "approved" },
                  { action: "Credit score updated", user: "Amit Patel", time: "1 hour ago", status: "updated" },
                  { action: "Document verification completed", user: "Sunita Devi", time: "2 hours ago", status: "completed" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.user}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activity.status === "approved" ? "bg-accent/10 text-accent" :
                        activity.status === "pending" ? "bg-primary/10 text-primary" :
                        "bg-secondary/10 text-secondary"
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;