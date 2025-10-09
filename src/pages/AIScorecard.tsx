import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Shield, AlertCircle } from "lucide-react";

const AIScorecard = () => {
  const sampleBeneficiary = {
    name: "Rajesh Kumar",
    id: "BEN-2024-001",
    compositeScore: 720,
    riskBand: "Low Risk",
    incomeEstimate: "₹25,000 - ₹30,000",
    factors: [
      { name: "Loan Repayment History", score: 85, weight: 35 },
      { name: "Income Stability", score: 78, weight: 25 },
      { name: "Consumption Patterns", score: 72, weight: 20 },
      { name: "Credit Utilization", score: 68, weight: 15 },
      { name: "Financial Behavior", score: 75, weight: 5 },
    ],
    insights: [
      "Strong repayment history with no defaults in the past 24 months",
      "Consistent income pattern observed over 6 months",
      "Responsible spending behavior with regular savings",
      "Low debt-to-income ratio indicates good financial health",
    ],
  };

  const getScoreColor = (score: number) => {
    if (score >= 700) return "text-accent";
    if (score >= 600) return "text-primary";
    return "text-secondary";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 700) return "bg-accent/10";
    if (score >= 600) return "bg-primary/10";
    return "bg-secondary/10";
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container px-4 py-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">AI Credit Scorecard</h1>
            <p className="text-muted-foreground">
              Comprehensive credit assessment powered by artificial intelligence
            </p>
          </div>

          {/* Beneficiary Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{sampleBeneficiary.name}</h2>
                    <p className="text-sm text-muted-foreground">{sampleBeneficiary.id}</p>
                  </div>
                  <Badge className="text-base px-4 py-2 bg-accent/10 text-accent border-accent/20">
                    {sampleBeneficiary.riskBand}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Composite Score */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-1">
              <Card className="shadow-card h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Composite Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-6">
                    <div className={`text-6xl font-bold mb-4 ${getScoreColor(sampleBeneficiary.compositeScore)}`}>
                      {sampleBeneficiary.compositeScore}
                    </div>
                    <div className={`text-sm font-medium px-4 py-2 rounded-full ${getScoreBgColor(sampleBeneficiary.compositeScore)}`}>
                      Range: 300 - 850
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Income Estimation */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
              <Card className="shadow-card h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Income Estimation
                  </CardTitle>
                  <CardDescription>AI-predicted monthly income range based on multiple data sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-primary">{sampleBeneficiary.incomeEstimate}</div>
                    <p className="text-sm text-muted-foreground">
                      This estimation is based on consumption patterns, transaction history, and verified income data. The model confidence level is 87%.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Score Factors */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Score Breakdown
                </CardTitle>
                <CardDescription>Individual factors contributing to the composite score</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {sampleBeneficiary.factors.map((factor, index) => (
                    <motion.div
                      key={factor.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{factor.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">Weight: {factor.weight}%</span>
                          <span className={`text-sm font-bold ${getScoreColor(factor.score)}`}>{factor.score}/100</span>
                        </div>
                      </div>
                      <Progress value={factor.score} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Explainable AI Insights */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  AI-Generated Insights
                </CardTitle>
                <CardDescription>Key factors identified by the AI model</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sampleBeneficiary.insights.map((insight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                      <p className="text-sm">{insight}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong className="text-primary">Model Information:</strong> This scorecard uses a composite AI model trained on over 50,000 verified beneficiary records. The model is regularly updated to ensure accuracy and fairness.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AIScorecard;