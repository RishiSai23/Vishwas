import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-sm">BC</span>
              </div>
              <span className="text-base font-semibold">
                Beneficiary Credit System
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering genuine beneficiaries through smart digital lending with AI-powered credit scoring.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/beneficiaries" className="text-sm text-muted-foreground hover:text-primary">
                  Beneficiaries
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-sm text-muted-foreground hover:text-primary">
                  Upload Data
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Ministry of Social Justice & Empowerment
              </li>
              <li className="text-sm text-muted-foreground">
                SIH Problem Statement ID: 25150
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by AI for Inclusive Growth • © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;