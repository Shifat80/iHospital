import { Play, TrendingUp, Users, Activity, Heart, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left Content */}
  <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mx-auto lg:mx-0">
            <Zap className="w-4 h-4" />
            Online Platforms offer icons
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Smarter AI
              <br />
              Healthcare Starts
              <br />
              With{" "}
              <span className="text-secondary relative">
                Medora
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/30 rounded-full"></div>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-md leading-relaxed mx-auto lg:mx-0">
              Medora is an AI-powered medical platform built to transform
              complex healthcare data into clear, actionable insights.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-background px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Book a Free Consultation
            </button>

            <button className="flex items-center gap-3 bg-info/20 backdrop-blur-xl  text-white hover:text-primary font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 sm:w-4 sm:h-4 text-primary ml-0.5" />
              </div>
              Watch a Demo
            </button>
          </div>

          {/* Partner Logos */}

        </div>

        {/* Right Content - Healthcare Professional with Dashboard */}
  <div className="relative mt-10 lg:mt-0 lg:ml-8">
          {/* Main Healthcare Professional Image */}
          <div className="relative z-10">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto relative">
              {/* Background with subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-info/10 rounded-3xl blur-3xl"></div>

              {/* Main image container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/doctor.png"
                  alt="Healthcare Professional"
                  className="w-80 h-80 object-cover object-center rounded-2xl shadow-2xl"
                />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-2xl"></div>

                {/* Floating medical elements */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-12 sm:h-12 bg-secondary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-float">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-background animate-pulse" />
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-8 h-8 sm:w-10 sm:h-10 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-background" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Dashboard Cards */}

          {/* Dashboard Report Card - Top Right */}
          <div className="hidden md:block absolute -top-4 -right-4 bg-background-card/95 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl w-64 animate-float">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold text-sm">Dashboard Report</h3>
              <div className="text-xs text-white/60 bg-primary/10 px-2 py-1 rounded-full">1390</div>
            </div>

            {/* Mini Chart */}
            <div className="h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg mb-3 relative overflow-hidden">
              <div className="absolute inset-0 flex items-end justify-center gap-1 p-2">
                <div className="w-2 bg-gradient-to-t from-secondary to-secondary-dark h-8 rounded-full animate-pulse"></div>
                <div className="w-2 bg-gradient-to-t from-primary to-primary-dark h-12 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 bg-gradient-to-t from-secondary to-secondary-dark h-6 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-2 bg-gradient-to-t from-primary to-primary-dark h-10 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <div className="w-2 bg-gradient-to-t from-secondary to-secondary-dark h-14 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                <div className="w-2 bg-gradient-to-t from-primary to-primary-dark h-8 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Trending line overlay */}
              <div className="absolute top-2 right-2 bg-success/20 rounded-full p-1">
                <TrendingUp className="w-3 h-3 text-success" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-white/60">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          {/* Progress Card - Middle Right */}
          <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 bg-background-card/95 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl w-56 animate-float-delayed">
            <h3 className="text-white font-semibold mb-3 text-sm">Your daily progress</h3>

            {/* Circular Progress */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                {/* Background circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>

                {/* Progress circle */}
                <svg className="absolute top-0 left-0 w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-primary/30"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={`${65 * 1.75} ${100 * 1.75}`}
                    className="text-primary transition-all duration-1000 ease-out"
                  />
                </svg>

                {/* Center content */}
                <div className="absolute inset-2 bg-background-card rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">65</span>
                </div>
              </div>

              <div>
                <div className="text-white/60 text-xs">BPM</div>
                <div className="text-white font-semibold">Normal</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs text-success">Healthy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards - Bottom */}
          <div className="hidden sm:flex absolute -bottom-8 left-1/2 transform -translate-x-1/2 gap-3 sm:gap-4 z-10">
            {/* Patients Card */}
            <div className="bg-info/20 backdrop-blur-xl rounded-2xl p-4 border border-info/30 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-info" />
                <span className="text-info font-medium text-sm">Patients</span>
              </div>
              <div className="text-2xl font-bold text-white">120</div>
            </div>

            {/* Activity Card */}
            <div className="bg-warning/20 backdrop-blur-xl rounded-2xl p-4 border border-warning/30 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-warning" />
                <span className="text-warning font-medium text-sm">Active</span>
              </div>
              <div className="text-2xl font-bold text-white">3,570</div>
            </div>
          </div>

          {/* Floating Elements for Visual Interest */}
          <div className="hidden sm:block absolute top-8 left-4 w-3 h-3 bg-secondary rounded-full animate-ping"></div>
          <div className="hidden sm:block absolute bottom-16 right-12 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="hidden sm:block absolute top-32 -left-4 w-4 h-4 bg-info rounded-full animate-bounce"></div>
        </div>
      </div>

  {/* Animations moved to global index.css */}
    </section>
  );
}
