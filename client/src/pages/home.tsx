import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import AnimatedBackground from "@/components/animated-background";
import MetricCard from "@/components/metric-card";
import ImpactCalculator from "@/components/impact-calculator";
import { calculateImpacts } from "@/lib/impact-calculations";

const quickImpacts = [
  { icon: "🌳", value: "2 ha", label: "Naturschutz pro\n1 ha Bio-Anbaufläche" },
  { icon: "💼", value: "5+", label: "Arbeitsplätze\npro 100.000€" },
  { icon: "🌱", value: "100%", label: "zertifizierte Produktion\nvon gesunden Nahrungsmitteln" }
];

export default function Home() {
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const impacts = calculateImpacts(investmentAmount);

  const handleInvestNow = () => {
    console.log('Navigate to investment flow');
    // TODO: Implement investment flow
  };

  const handleLearnMore = () => {
    console.log('Navigate to information page');
    // TODO: Implement information page navigation
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <AnimatedBackground />
      
      {/* Floating Decoration */}
      <div className="fixed top-0 right-0 w-96 h-96 opacity-30 animate-float z-0">
        <div className="w-full h-full bg-gradient-radial from-white/10 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <header className="glass-morphism rounded-3xl p-8 sm:p-12 lg:p-16 mb-12 text-center animate-slide-in-top relative overflow-hidden" data-testid="header-section">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight animate-fade-in-scale" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }} data-testid="main-title">
              <div>Berechne deinen Impact</div>
              <div>für Tier, Natur und Mensch</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mt-6">Bio-Liegenschaften mit Pachteinnahmen</div>
            </h1>
            <p className="text-xl sm:text-2xl text-green-100 mb-8 sm:mb-12 font-medium" style={{ animationDelay: '0.4s', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }} data-testid="subtitle">
              Ethisch. Wirtschaftlich. Rechtssicher.
            </p>
            <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed" style={{ animationDelay: '0.6s' }} data-testid="intro-text">
              Mit unserem Impact-Rechner siehst du transparent, welche positive Wirkung dein Einsatz in Bio-Liegenschaften hat.
              Jeder Euro schützt Naturwald, bindet CO₂ und schafft faire Arbeitsplätze vor Ort.
              Die Berechnungen basieren auf realen Projekterfahrungen.
            </p>

            {/* Quick Impact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ animationDelay: '0.8s' }} data-testid="quick-impacts">
              {quickImpacts.map((impact, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl flex items-center gap-4"
                  data-testid={`quick-impact-card-${index}`}
                >
                  <div className="text-4xl sm:text-5xl animate-icon-pulse" data-testid={`impact-icon-${index}`}>{impact.icon}</div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }} data-testid={`impact-value-${index}`}>
                      {impact.value}
                    </div>
                    <div className="text-sm text-white/90 leading-tight whitespace-pre-line text-center" data-testid={`impact-label-${index}`}>{impact.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Calculator Section */}
        <ImpactCalculator
          investmentAmount={investmentAmount}
          setInvestmentAmount={setInvestmentAmount}
          impacts={impacts}
        />


        {/* Legal Notice */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10" data-testid="legal-notice">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <strong className="text-white">Wichtige Hinweise:</strong> Diese Berechnung dient der Veranschaulichung des möglichen Impacts und stellt keine Beratung zu Kapitalanlagen dar. Die angegebenen Pachtszenarien basieren auf Erfahrungswerten und sind keine garantierten Einnahmen. Landwirtschaftliche Projekte unterliegen Markt- und Wetterrisiken. Die tatsächlichen Ergebnisse können erheblich abweichen. Vor einer Entscheidung empfehlen wir ein persönliches Beratungsgespräch. Nature Invest ist keine regulierte Kapitalanlage. Weitere Details entnehmen Sie bitte unseren Verkaufsunterlagen.
          </p>
        </section>

      </div>
    </div>
  );
}
