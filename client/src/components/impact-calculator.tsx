import { Slider } from "@/components/ui/slider";
import MetricCard from "./metric-card";
import { ImpactData } from "@/lib/impact-calculations";
import forestImage from "@assets/image_1758920068131.png";
import co2Image from "@assets/image_1758920073899.png";
import bioProductsImage from "@assets/image_1758920077640.png";
import familyImage from "@assets/image_1758920081283.png";
import birdImage from "@assets/image_1758920085197.png";
import economyImage from "@assets/image_1758920089323.png";

interface ImpactCalculatorProps {
  investmentAmount: number;
  setInvestmentAmount: (amount: number) => void;
  impacts: ImpactData;
}

export default function ImpactCalculator({ investmentAmount, setInvestmentAmount, impacts }: ImpactCalculatorProps) {
  const formatCurrency = (amount: number) => {
    return `€${amount.toLocaleString('de-DE')}`;
  };

  const handleSliderChange = (value: number[]) => {
    setInvestmentAmount(value[0]);
  };

  const metricData = [
    {
      image: forestImage,
      value: impacts.protectedArea,
      unit: "m²",
      title: "geschützter Naturwald",
      description: `🌳 Dein Beitrag rettet ${(impacts.protectedArea / 7140).toFixed(1)} Fußballfelder Urwald für immer`,
      gradient: "from-green-500 via-green-600 to-green-500",
      hoverGradient: "from-green-500 to-green-600",
      isPrimary: true
    },
    {
      image: co2Image,
      value: impacts.co2Bound,
      unit: "Tonnen",
      title: "CO₂ dauerhaft gebunden + saubere Luft", 
      description: `🌍 Du neutralisierst ${Math.round(impacts.co2Bound / 10)} Jahre Autofahren - lebenslang`,
      gradient: "from-blue-500 via-blue-600 to-blue-500",
      hoverGradient: "from-blue-500 to-blue-600",
      isPrimary: true
    },
    {
      image: bioProductsImage,
      value: impacts.bioProduction,
      unit: "kg",
      title: "Gesunde Bio-Nahrungsmittel pro Jahr nach entsprechendem Zeitraum",
      description: "🥑 Pestizidfreie Nahrung für eine gesündere Zukunft",
      gradient: "from-green-400 via-green-500 to-green-400",
      hoverGradient: "from-green-400 to-green-500"
    },
    {
      image: familyImage,
      value: impacts.jobs,
      unit: "Familien",
      title: "mit fairem Einkommen",
      description: "💚 Du sicherst Existenzen und schaffst Perspektiven",
      gradient: "from-blue-400 via-blue-500 to-blue-400",
      hoverGradient: "from-blue-400 to-blue-500"
    },
    {
      image: birdImage,
      value: impacts.animals,
      unit: "+ Tiere",
      title: "behalten ihren Lebensraum",
      description: "🦜 Artenvielfalt bewahren - für die nächste Generation",
      gradient: "from-cyan-400 via-cyan-500 to-cyan-400",
      hoverGradient: "from-cyan-400 to-cyan-500"
    },
    {
      image: economyImage,
      value: impacts.localValue,
      unit: "€",
      title: "jährliche lokale Wertschöpfung",
      description: "🏘️ Du stärkst nachhaltige Regionalentwicklung",
      gradient: "from-amber-400 via-amber-500 to-amber-400",
      hoverGradient: "from-amber-400 to-amber-500"
    }
  ];

  return (
    <section className="glass-morphism rounded-3xl p-8 sm:p-12 mb-12 animate-slide-in-bottom" data-testid="calculator-section">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12 title-gradient" data-testid="calculator-title">
        Berechne deinen persönlichen Impact
      </h3>


      {/* Input Section */}
      <div className="max-w-2xl mx-auto mb-12 sm:mb-16" data-testid="input-section">
        <div className="relative">
          <label htmlFor="investment-slider" className="block text-center text-lg sm:text-xl text-secondary-foreground mb-6 sm:mb-8 font-medium" data-testid="input-label">
            Dein Beitrag für eine bessere Welt (EUR)
          </label>
          
          {/* Empfohlene Investition Badge */}
          {investmentAmount >= 150000 && investmentAmount <= 300000 && (
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse" data-testid="recommended-investment-badge">
                💫 Empfohlener Beitrag
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center mb-6 sm:mb-8 relative">
          <span className="text-5xl sm:text-6xl lg:text-7xl font-black amount-gradient relative inline-block" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }} data-testid="amount-display">
            {formatCurrency(investmentAmount)}
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer"></div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 px-2 sm:px-4 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-green-400/10 border border-primary/20">
          <span className="text-sm sm:text-base text-primary font-semibold whitespace-nowrap" data-testid="slider-min-label">€25.000</span>
          <div className="flex-1 relative">
            <div className="relative">
              <div className="absolute inset-0 h-3 bg-gradient-to-r from-primary/30 via-green-400/50 to-cyan-400/30 rounded-full"></div>
              <Slider
                value={[investmentAmount]}
                onValueChange={handleSliderChange}
                min={25000}
                max={1000000}
                step={5000}
                className="w-full relative z-10"
                data-testid="investment-slider"
              />
            </div>
          </div>
          <span className="text-sm sm:text-base text-primary font-semibold whitespace-nowrap" data-testid="slider-max-label">€1.000.000</span>
        </div>
      </div>

      {/* Impact Results */}
      <div className="impact-results" data-testid="impact-results">
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-center mb-3 sm:mb-4" data-testid="impact-results-title">
          🌟 Dein direkter Impact:
        </h4>
        <p className="text-center text-lg text-secondary-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
          Mit jedem Euro schaffst du <strong className="text-primary-lighter">messbare Veränderung</strong> - für eine lebenswertere Zukunft aller
        </p>

        {/* Metric Grid - 3x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16" data-testid="metric-grid" style={{ gridTemplateRows: 'repeat(2, 1fr)' }}>
          {metricData.map((metric, index) => (
            <MetricCard key={index} {...metric} testId={`metric-card-${index}`} />
          ))}
        </div>
      </div>

      {/* Financial Scenarios */}
      <div className="glass-morphism rounded-3xl p-8 sm:p-12 mb-12" data-testid="scenario-section">
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-center mb-6 sm:mb-8" data-testid="scenario-title">
          Mögliche Pacht-Beispiele* <span className="text-lg ml-2" title="Basierend auf Erfahrungswerten">ℹ️</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-testid="scenarios-grid">
          {/* Example Scenario 1 */}
          <div className="glass-card rounded-2xl p-6 border border-border hover:bg-white/10 transition-all duration-300" data-testid="scenario-conservative">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
              <span className="text-lg font-semibold text-white">Beispiel: 100.000€</span>
              <span className="bg-gradient-to-r from-accent to-accent-light text-white px-3 py-1 rounded-full text-sm font-semibold">8% p.a.</span>
            </div>
            <div className="text-center">
              <p className="text-sm text-secondary-foreground mb-2">Fixe Pacht</p>
              <p className="text-base text-white mb-2">Monatlich: <span className="text-accent font-bold text-lg">667€</span></p>
              <p className="text-base text-white">Jährlich: <span className="text-accent font-bold text-lg">8.000€</span></p>
            </div>
          </div>

          {/* Current Investment Scenario - Highlighted */}
          <div className="glass-card rounded-2xl p-6 border-2 border-primary/50 bg-primary/10 hover:bg-primary/15 transition-all duration-300 transform scale-105" data-testid="scenario-realistic">
            <div className="text-center mb-4">
              <span className="text-lg font-semibold text-white block mb-2">Vereinbarte jährliche Pachteinnahmen</span>
              <p className="text-primary-lighter font-bold text-2xl">{formatCurrency(investmentAmount)}</p>
            </div>
            <div className="flex justify-center mb-4 pb-3 border-b border-white/20">
              <span className="bg-gradient-to-r from-primary to-primary-light text-white px-3 py-1 rounded-full text-sm font-semibold">8% p.a.</span>
            </div>
            <div className="text-center">
              <p className="text-sm text-secondary-foreground mb-2">Fixe Pacht</p>
              <p className="text-base text-white mb-2">Monatlich: <span className="text-primary-lighter font-bold text-lg">{impacts.monthlyPacht.toLocaleString('de-DE')}€</span></p>
              <p className="text-base text-white">Jährlich: <span className="text-primary-lighter font-bold text-lg">{impacts.yearlyPacht.toLocaleString('de-DE')}€</span></p>
            </div>
          </div>

          {/* Example Scenario 3 */}
          <div className="glass-card rounded-2xl p-6 border border-border hover:bg-white/10 transition-all duration-300" data-testid="scenario-optimistic">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
              <span className="text-lg font-semibold text-white">Beispiel: 1.000.000€</span>
              <span className="bg-gradient-to-r from-accent to-accent-light text-white px-3 py-1 rounded-full text-sm font-semibold">8% p.a.</span>
            </div>
            <div className="text-center">
              <p className="text-sm text-secondary-foreground mb-2">Fixe Pacht</p>
              <p className="text-base text-white mb-2">Monatlich: <span className="text-accent font-bold text-lg">6.667€</span></p>
              <p className="text-base text-white">Jährlich: <span className="text-accent font-bold text-lg">80.000€</span></p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-4 border border-yellow-500/30 bg-yellow-500/10" data-testid="scenario-disclaimer">
          <p className="text-sm text-secondary-foreground leading-relaxed">
            <strong className="text-yellow-300">*Wichtiger Hinweis:</strong> Landwirtschaftliche Erträge unterliegen natürlichen Schwankungen. Die tatsächlichen Ausschüttungen können 
            je nach Wetterbedingungen, Marktpreisen und Ernteerfolg variieren. Diese Darstellung basiert auf 
            Erfahrungswerten und stellt keine Garantie dar.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="glass-morphism rounded-3xl p-8 sm:p-12 mb-12 border border-primary/30" data-testid="cta-section">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <h4 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              🌱 Bereit für deinen Impact?
            </h4>
            <p className="text-lg text-secondary-foreground mb-8">
              Werde Teil einer nachhaltigen Zukunft. Schütze Natur, schaffe Arbeitsplätze und erhalte faire Pachteinnahmen.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-primary/20 border border-green-500/30" data-testid="trust-indicator-legal">
              <div className="text-2xl">🛡️</div>
              <div className="text-sm text-left">
                <p className="font-semibold text-green-300">100% Rechtssicher</p>
                <p className="text-secondary-foreground">Notarielle Eintragung</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30" data-testid="trust-indicator-transparency">
              <div className="text-2xl">✅</div>
              <div className="text-sm text-left">
                <p className="font-semibold text-blue-300">100% Transparent</p>
                <p className="text-secondary-foreground">Jährliche Reports</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30" data-testid="trust-indicator-sustainability">
              <div className="text-2xl">🌍</div>
              <div className="text-sm text-left">
                <p className="font-semibold text-purple-300">100% Nachhaltig</p>
                <p className="text-secondary-foreground">Bio-zertifiziert</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-bold text-lg rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-primary/50" data-testid="cta-consultation-button">
                🚀 Jetzt Impact-Beratung vereinbaren
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-primary font-bold text-lg rounded-2xl border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300" data-testid="cta-webinar-button">
                Zum Info-Webinar
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              Kostenlose Beratung • Keine Verpflichtungen • Individuelle Lösungen
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
