"use client"

import { CreditCard, ExternalLink, Receipt, Smartphone } from "lucide-react"
import { useEffect, useState } from "react"

export default function ProfessionalZainSplash() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const links = [
    {
      name: "الدفع السريع",
      description: "دفع آمن وسريع لجميع الخدمات",
      href: "https://shorturl.at/pIb1M",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-400 to-blue-500",
      icon: CreditCard,
      accent: "blue",
    },
    {
      name: "شحن رصيد eeZee",
      description: "شحن فوري لرصيد eeZee",
      href: "https://shorturl.at/st942",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-400 to-blue-500",
      icon: Smartphone,
      accent: "blue",
    },
    {
      name: "دفع الفواتير",
      description: "ادفع فواتيرك بسهولة وأمان",
      href: "https://shorturl.at/oMv5y",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-500 to-blue-600",
      icon: Receipt,
      accent: "gray",
    },
  ]

  useEffect(() => {
    // Trigger animations on mount
    setIsLoaded(true)

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
<img className="absolute left-8 top-0 bottom-0 w-full h-32" src="/121.svg" alt="left" />

      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-22 border-2 border-white/10 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-16 w-24 h-24 border-2 border-cyan-400/20 rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-8 w-28 h-28 border-2 border-white/10 -rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-60 right-12 w-20 h-20 border-2 border-blue-400/20 rotate-45 animate-pulse"></div>
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center px-3 pt-16 relative z-10">
        {/* Awards Section with Staggered Animation */}
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
              {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <div
                key={link.name}
                className="group animate-fade-in-up w-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <a
                  href={link.href}
                  className="block relative w-full"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <div
                    className={`
                    relative bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100
                    transition-all duration-500 ease-out w-full
                    hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2
                    ${hoveredLink === link.name ? "shadow-2xl -translate-y-1 sm:-translate-y-2" : ""}
                  `}
                  >
                    {/* Background Gradient Overlay */}
                    <div
                      className={`
                      absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-500
                      bg-gradient-to-br ${link.color}
                      ${hoveredLink === link.name ? "opacity-5" : ""}
                    `}
                    />

                    {/* Icon */}
                    <div
                      className={`
                      relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full mb-3 sm:mb-4 lg:mb-6 
                      flex items-center justify-center bg-gradient-to-br ${link.color} shadow-lg
                      transition-all duration-500
                      ${hoveredLink === link.name ? "scale-110 shadow-xl" : ""}
                    `}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 mb-1 sm:mb-2 truncate">
                            {link.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink
                          className={`
                          w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 flex-shrink-0 ml-2
                          ${hoveredLink === link.name ? "text-gray-600 rotate-45 scale-110" : ""}
                        `}
                        />
                      </div>

                      {/* Progress Bar */}
                      <div className="h-0.5 sm:h-1 bg-gray-100 rounded-full overflow-hidden mb-2 sm:mb-4">
                        <div
                          className={`
                          h-full rounded-full transition-all duration-700 ease-out
                          bg-gradient-to-r ${link.color}
                          ${hoveredLink === link.name ? "w-full" : "w-0"}
                        `}
                        />
                      </div>

                      {/* Call to Action - Hidden on very small screens */}
                      <div className="hidden sm:block">
                        <div
                          className={`
                          inline-flex items-center text-xs sm:text-sm font-medium transition-all duration-300
                          ${hoveredLink === link.name ? "text-pink-600" : "text-gray-500"}
                        `}
                        >
                          <span>اضغط للاستكشاف</span>
                          <div
                            className={`
                            w-3 h-3 sm:w-4 sm:h-4 mr-2 rounded-full transition-all duration-300
                            ${hoveredLink === link.name ? "bg-pink-100" : "bg-gray-100"}
                          `}
                          >
                            <div
                              className={`
                              w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full m-0.5 sm:m-1 transition-all duration-300
                              ${hoveredLink === link.name ? "bg-blue-500" : "bg-gray-300"}
                            `}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`
                            absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-1000
                            ${hoveredLink === link.name ? "opacity-20 animate-float" : "opacity-0"}
                          `}
                          style={{
                            left: `${20 + i * 25}%`,
                            top: `${20 + i * 15}%`,
                            animationDelay: `${i * 200}ms`,
                            background: `linear-gradient(135deg, #ec4899, #db2777)`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        </div>

        {/* Animated Divider */}
        <div
          className={`w-64 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-12 transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
        ></div>

        {/* Main Title Section */}
        <div
          className={`text-center transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Arabic Text */}
          <h1 className="text-white text-3xl font-bold text-center mb-3 tracking-wide" dir="rtl">
            الشبكة الأسرع في الكويت
          </h1>

          {/* English Text */}
          <h2 className="text-cyan-200 text-xl font-light text-center mb-20 tracking-wider">
            Kuwait's Fastest Network
          </h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-8 relative z-10">
        {/* Enhanced Zain Logo */}
        <div
          className={`mb-6 transition-all duration-1000 delay-1500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-slate-200 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-full flex items-center justify-center animate-pulse-slow">
                  <span className="text-white text-lg font-bold">Z</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Arabic Subtitle */}
        <p
          className={`text-slate-300 text-base mb-8 font-light transition-all duration-1000 delay-1700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          dir="rtl"
        >
          القادم في كل جميل
        </p>

        {/* Enhanced Loading Animation */}
        <div
          className={`flex gap-3 mb-6 transition-all duration-1000 delay-1900 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${dot * 0.3}s` }}
            ></div>
          ))}
        </div>

        {/* Professional Progress Bar */}
        <div
          className={`w-72 h-2 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-700/50 transition-all duration-1000 delay-2000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          >
            <div className="h-full bg-gradient-to-r from-white/20 to-transparent rounded-full animate-shimmer"></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <div
          className={`text-slate-400 text-sm mt-3 font-light transition-all duration-1000 delay-2200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          {progress}%
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-8px) rotate(-12deg); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
