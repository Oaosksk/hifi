import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Settings, 
  Award,
  ChevronRight 
} from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SmoothScroll from "../../components/smooth-scroll";

// Type definitions for service details
interface ServiceDetail {
  title: string;
  subtitle: string;
  overview: string;
  methodology: string[];
  equipment: string[];
  benefits: string[];
}

const SERVICES_DATA: Record<string, ServiceDetail> = {};

// Next.js static generation parameters to pre-build these routes
export async function generateStaticParams() {
  return [];
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];

  if (!data) {
    notFound();
  }

  return (
    <SmoothScroll>
      <Header />
      
      <main className="flex-1 w-full bg-white">
        
        {/* HERO BANNER SECTION */}
        <section className="bg-[#07193f] pt-32 pb-20 text-white relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-[0.03] select-none pointer-events-none">
            <svg viewBox="0 0 400 200" fill="white" className="w-full h-full">
              <path d="M0,200 L0,120 L20,120 L20,140 L40,140 L40,100 L60,100 L60,160 L80,160 L80,90 L100,90 L100,150 L120,150 L120,80 L140,80 L140,170 L160,170 L160,110 L180,110 L180,150 L200,150 L200,60 L220,60 L220,130 L240,130 L240,145 L260,145 L260,70 L280,70 L280,160 L300,160 L300,95 L320,95 L320,150 L340,150 L340,50 L360,50 Z" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs font-ui font-bold text-slate-400 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#F57C00]">{data.title}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-white">
              {data.title}
            </h1>
            <p className="font-sans text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-6 border-b border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[#0D2B6B] text-xs font-bold uppercase tracking-widest mb-3">
                Service Overview
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0D2B6B] tracking-tight leading-tight">
                Understanding Traffic Volume & Patterns
              </h3>
            </div>
            <div className="lg:col-span-8">
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                {data.overview}
              </p>
            </div>
          </div>
        </section>

        {/* METHODOLOGY SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-6 border-b border-slate-100">
          <span className="text-[#F57C00] font-bold text-xs uppercase tracking-widest block text-center mb-3">
            Execution Steps
          </span>
          <h2 className="text-3xl font-display font-bold text-[#0D2B6B] tracking-tight text-center mb-16">
            Methodology & Validation Loop
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.methodology.map((step, idx) => {
              const [title, desc] = step.split(":");
              return (
                <div key={idx} className="relative p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="absolute top-0 right-6 -translate-y-1/2 text-4xl font-extrabold text-[#F57C00]/15">
                    0{idx + 1}
                  </div>
                  <h4 className="font-ui text-sm font-bold text-[#0D2B6B] mb-2 mt-2">{title}</h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* EQUIPMENT USED SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-6 border-b border-slate-100">
          <span className="text-[#F57C00] font-bold text-xs uppercase tracking-widest block text-center mb-3">
            Field Instrumentation
          </span>
          <h2 className="text-3xl font-display font-bold text-[#0D2B6B] tracking-tight text-center mb-16">
            Equipment & Software Used
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.equipment.map((eq, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] items-start">
                <div className="w-10 h-10 bg-[#0D2B6B]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-4 h-4 text-[#0D2B6B]" />
                </div>
                <div>
                  <h4 className="font-ui text-sm font-bold text-[#0D2B6B] mb-1">Instrument 0{idx + 1}</h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">{eq}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <span className="text-[#F57C00] font-bold text-xs uppercase tracking-widest block text-center mb-3">
            Operational Value
          </span>
          <h2 className="text-3xl font-display font-bold text-[#0D2B6B] tracking-tight text-center mb-16">
            Key Study Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[#F57C00]/25 transition-all duration-300">
                <div className="w-10 h-10 bg-[#F57C00]/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-4 h-4 text-[#F57C00]" />
                </div>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </section>

        

      </main>

      <Footer />
    </SmoothScroll>
  );
}
