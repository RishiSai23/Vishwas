import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Beneficiary {
  id: number;
  name: string;
  loanAmount: string;
  riskBand: string;
  status: string;
  score: number;
}

const BeneficiaryManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const beneficiaries: Beneficiary[] = [
    { id: 1, name: "Rajesh Kumar", loanAmount: "₹50,000", riskBand: "Low", status: "Approved", score: 720 },
    { id: 2, name: "Priya Sharma", loanAmount: "₹75,000", riskBand: "Medium", status: "Pending", score: 650 },
    { id: 3, name: "Amit Patel", loanAmount: "₹30,000", riskBand: "Low", status: "Approved", score: 740 },
    { id: 4, name: "Sunita Devi", loanAmount: "₹45,000", riskBand: "High", status: "Review", score: 580 },
    { id: 5, name: "Mohammed Ali", loanAmount: "₹60,000", riskBand: "Medium", status: "Pending", score: 670 },
    { id: 6, name: "Kavita Singh", loanAmount: "₹40,000", riskBand: "Low", status: "Approved", score: 700 },
    { id: 7, name: "Ramesh Yadav", loanAmount: "₹55,000", riskBand: "Medium", status: "Pending", score: 640 },
    { id: 8, name: "Lakshmi Iyer", loanAmount: "₹35,000", riskBand: "Low", status: "Approved", score: 730 },
  ];

  const filteredBeneficiaries = beneficiaries.filter((b) => {
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || b.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getRiskBadgeColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "bg-accent/10 text-accent border-accent/20";
      case "medium":
        return "bg-primary/10 text-primary border-primary/20";
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-accent/10 text-accent border-accent/20";
      case "pending":
        return "bg-primary/10 text-primary border-primary/20";
      case "review":
        return "bg-secondary/10 text-secondary border-secondary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="container px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Beneficiary Management</h1>
            <p className="text-muted-foreground">View and manage all beneficiary records and applications</p>
          </div>

          <Card className="shadow-card mb-6">
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <CardTitle>All Beneficiaries</CardTitle>
                <Button className="shadow-button">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Beneficiary
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent className="bg-card z-50">
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Table */}
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Loan Amount</TableHead>
                      <TableHead className="font-semibold">Risk Band</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                      <TableHead className="font-semibold">Credit Score</TableHead>
                      <TableHead className="font-semibold text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBeneficiaries.map((beneficiary, index) => (
                      <motion.tr
                        key={beneficiary.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-muted/30 transition-colors"
                      >
                        <TableCell className="font-medium">{beneficiary.name}</TableCell>
                        <TableCell>{beneficiary.loanAmount}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getRiskBadgeColor(beneficiary.riskBand)}>
                            {beneficiary.riskBand}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusBadgeColor(beneficiary.status)}>
                            {beneficiary.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="font-semibold">{beneficiary.score}</span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredBeneficiaries.length} of {beneficiaries.length} beneficiaries
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BeneficiaryManagement;