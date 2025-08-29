import { Search, Menu, X, ChevronDown, Activity } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 px-4 pt-4">
      {/* Pill-shaped container with glassmorphism */}
      <div className="max-w-6xl mx-auto bg-background-card/70 backdrop-blur-xl border border-primary/20 rounded-3xl shadow-2xl">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo Section - Medora Style */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="w-4 h-4 text-background font-bold" />
              </div>
            </div>
            <span className="text-secondary font-bold text-lg tracking-tight">Medora</span>
          </div>

          {/* Center Navigation - Compact Pills */}
          <div className="hidden lg:flex items-center gap-1">
            <a href="#" className="px-4 py-2 text-white hover:text-primary font-medium rounded-2xl hover:bg-primary/10 transition-all duration-200 text-sm">
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center gap-1 px-4 py-2 text-white hover:text-primary font-medium rounded-2xl hover:bg-primary/10 transition-all duration-200 text-sm"
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`absolute top-full left-0 mt-2 w-56 bg-background-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/20 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="p-2">
                  <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-white hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200">
                    <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xs">🏥</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Emergency Care</div>
                      <div className="text-xs text-white/60">24/7 services</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-white hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200">
                    <div className="w-6 h-6 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <span className="text-secondary text-xs">👨‍⚕️</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Specialist Care</div>
                      <div className="text-xs text-white/60">Expert doctors</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a href="#" className="px-4 py-2 text-white hover:text-primary font-medium rounded-2xl hover:bg-primary/10 transition-all duration-200 text-sm">
              About us
            </a>
            <a href="#" className="px-4 py-2 text-white hover:text-primary font-medium rounded-2xl hover:bg-primary/10 transition-all duration-200 text-sm">
              Products
            </a>
            <a href="#" className="px-4 py-2 text-white hover:text-primary font-medium rounded-2xl hover:bg-primary/10 transition-all duration-200 text-sm">
              Blog
            </a>
            <a href="#" className="px-4 py-2 text-white hover:text-primary font-medium rounded-2xl hover:bg-primary/10 transition-all duration-200 text-sm">
              Careers
            </a>
          </div>

          {/* Right Section - Compact Design */}
          <div className="flex items-center gap-3">
            {/* Search - Pill Style */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="w-48 bg-background/40 text-white placeholder-white/50 px-4 py-2 pl-9 rounded-2xl border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-200 text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
            </div>

            {/* Contact Button - Pill Style */}
            <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-background px-5 py-2 rounded-2xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-primary rounded-xl hover:bg-primary/10 transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-6 pb-4 space-y-1 border-t border-primary/20 pt-4">
            <a href="#" className="block px-4 py-2.5 text-white hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 text-sm">
              Home
            </a>
            <a href="#" className="block px-4 py-2.5 text-white hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 text-sm">
              Services
            </a>
            <a href="#" className="block px-4 py-2.5 text-white hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 text-sm">
              About us
            </a>
            <a href="#" className="block px-4 py-2.5 text-white hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 text-sm">
              Products
            </a>
            <a href="#" className="block px-4 py-2.5 text-white hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 text-sm">
              Blog
            </a>
            <a href="#" className="block px-4 py-2.5 text-white hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 text-sm">
              Careers
            </a>
            <div className="pt-2">
              <button className="w-full bg-gradient-to-r from-secondary to-secondary-dark text-background px-4 py-2.5 rounded-xl font-semibold text-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
