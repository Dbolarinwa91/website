import React, { useState, useEffect } from 'react';

// Icon imports from Lucide React
import { 
  Server, 
  Cloud, 
  GitBranch, 
  Shield, 
  CheckCircle, 
  ChevronRight,
  ArrowRight,
  Code,
  Clock,
  Zap
} from 'lucide-react';

// Component imports
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Theme configuration
const THEME = {
  primary: { light: 'blue-300', medium: 'blue-500', dark: 'blue-700' },
  secondary: { light: 'green-300', medium: 'green-500', dark: 'green-700' },
  accent: {
    pink: { light: 'pink-300', medium: 'pink-500', dark: 'pink-700' },
    green: { light: 'emerald-300', medium: 'emerald-500', dark: 'emerald-700' },
    cyan: { light: 'cyan-300', medium: 'cyan-500', dark: 'cyan-700' }
  },
  background: { light: 'gray-100', medium: 'gray-200', dark: 'gray-300' },
  text: { primary: 'gray-900', secondary: 'gray-700', muted: 'gray-500' }
};

// Animation settings
const ANIMATIONS = {
  scrollTriggers: { services: 400, transform: 1000, testimonials: 1700, cta: 2300 },
  durations: { transition: '1000ms', gradient: '8s', float: '6s', pulse: '3s', spin: '30s', blob: '7s' }
};

const ModernUIServicePage = () => {
  const [activeService, setActiveService] = useState('infrastructure');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = {
    infrastructure: {
      title: "Infrastructure Automation",
      description: "Automate your infrastructure with security and scalability built in.",
      icon: <Server className="h-8 w-8" />,
      color: `from-${THEME.primary.medium} to-indigo-600`,
      metrics: ["99.99% uptime", "42% cost reduction", "10x faster deployments"]
    },
    cloud: {
      title: "Cloud Architecture",
      description: "Optimize your cloud infrastructure for performance and cost.",
      icon: <Cloud className="h-8 w-8" />,
      color: `from-${THEME.accent.cyan.medium} to-${THEME.primary.dark}`,
      metrics: ["$150K annual savings", "Zero downtime migrations", "Multi-cloud strategy"]
    },
    cicd: {
      title: "CI/CD Pipeline Optimization",
      description: "Streamline your development pipeline for maximum efficiency.",
      icon: <GitBranch className="h-8 w-8" />,
      color: `from-violet-500 to-${THEME.secondary.dark}`,
      metrics: ["97% faster releases", "Zero failed deployments", "Automated testing"]
    },
    security: {
      title: "DevSecOps Implementation",
      description: "Secure your infrastructure at every layer with automated protection.",
      icon: <Shield className="h-8 w-8" />,
      color: `from-${THEME.accent.green.medium} to-green-600`,
      metrics: ["100% compliance", "Breach protection", "Automatic patching"]
    }
  };

  const transformationSteps = [
    { title: "Assess", description: "Comprehensive analysis of your infrastructure.", delay: 0 },
    { title: "Design", description: "Tailored blueprint with cutting-edge tech.", delay: 150 },
    { title: "Implement", description: "Deploy automation with precision.", delay: 300 },
    { title: "Optimize", description: "Continuous monitoring for efficiency.", delay: 450 }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "CTO, TechCorp", quote: "Reduced AWS costs by 42%.", color: `from-${THEME.primary.dark} to-indigo-600`, delay: 0 },
    { name: "Michael Chen", role: "VP Engineering, DataFlow", quote: "Deployment time cut to 6 minutes.", color: `from-${THEME.secondary.dark} to-${THEME.accent.pink.dark}`, delay: 200 },
    { name: "Jennifer Rodriguez", role: "CISO, SecureFinance", quote: "Reduced incidents by 94%.", color: `from-${THEME.accent.green.dark} to-teal-600`, delay: 400 },
    { name: "Alex Patel", role: "Director, GlobeScale", quote: "Handles 300% more traffic.", color: `from-${THEME.accent.cyan.dark} to-${THEME.primary.medium}`, delay: 600 }
  ];

  const getParallaxStyle = (strength = 20) => {
    const maxMove = strength;
    const x = (mousePosition.x / window.innerWidth - 0.5) * maxMove;
    const y = (mousePosition.y / window.innerHeight - 0.5) * maxMove;
    return { transform: `translate(${x}px, ${y}px)` };
  };

  const shouldBeVisible = (triggerPoint) => {
    return {
      opacity: scrollY > triggerPoint ? 1 : 0,
      transform: scrollY > triggerPoint ? 'translateY(0)' : 'translateY(10px)'
    };
  };

  return (
    <div className="overflow-x-hidden">
      <div className="relative z-50 bg-black text-white">
        <Header />
      </div>
      <div className={`bg-${THEME.background.medium} text-${THEME.text.secondary} overflow-x-hidden`}>
        <div className="fixed inset-0 z-0 opacity-50">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-${THEME.primary.dark} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}></div>
          <div className={`absolute top-1/3 right-1/4 w-96 h-96 bg-${THEME.secondary.dark} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}></div>
        </div>
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0" 
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%)`,
              transition: 'background 0.3s ease'
            }}
          ></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className={`inline-block backdrop-blur-xl bg-white/10 px-6 py-2 rounded-full text-sm font-medium mb-6 border border-white/20 shadow-xl animate-float`} style={getParallaxStyle(10)}>
              NEXT-GENERATION DEVOPS SOLUTIONS
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 relative z-10" style={getParallaxStyle(15)}>
              <span className={`bg-clip-text text-transparent bg-gradient-to-r from-${THEME.primary.light} via-indigo-500 to-${THEME.secondary.medium} animate-gradient`}>Infrastructure</span>
              <br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r from-${THEME.secondary.light} via-${THEME.accent.pink.medium} to-red-500 animate-gradient animation-delay-2000`}>Reimagined</span>
            </h1>
            <p className={`text-xl sm:text-2xl text-${THEME.text.secondary} mb-10 max-w-3xl`} style={getParallaxStyle(5)}>
              Elevating enterprise infrastructure with automation and scalability.
            </p>
            <div className="group relative inline-block" style={getParallaxStyle(8)}>
              <div className={`absolute -inset-1 bg-gradient-to-r from-${THEME.primary.dark} to-${THEME.secondary.dark} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow`}></div>
              <button className={`relative px-8 py-4 bg-${THEME.background.medium} rounded-lg leading-none flex items-center`}>
                <span className={`text-${THEME.text.secondary} group-hover:text-${THEME.text.primary} transition duration-200`}>Schedule Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        <div className={`relative z-10 py-24 bg-gradient-to-b from-${THEME.background.medium} via-${THEME.background.light} to-${THEME.background.medium}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 opacity-0 transform translate-y-10 transition duration-1000 ease-out" style={shouldBeVisible(ANIMATIONS.scrollTriggers.services - 100)}>
              <h2 className={`text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${THEME.primary.light} to-${THEME.secondary.medium}`}>Enterprise Solutions</h2>
              <p className={`mt-4 text-xl text-${THEME.text.secondary} max-w-3xl mx-auto`}>Precision-crafted for performance and reliability.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(services).map(([key, service], index) => (
                <div 
                  key={key}
                  className="group opacity-0 transform translate-y-10 transition duration-1000 ease-out hover:shadow-xl"
                  style={{ ...shouldBeVisible(ANIMATIONS.scrollTriggers.services), transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveService(key)}
                >
                  <div className={`w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br ${service.color} p-0.5`}>
                    <div className={`bg-${THEME.background.light} h-full w-full rounded-2xl p-6 flex flex-col transition-transform duration-300 group-hover:scale-105`}>
                      <div className={`p-4 rounded-xl bg-gradient-to-br from-${THEME.background.light} to-${THEME.background.medium} mb-4 inline-block`}>
                        {React.cloneElement(service.icon, { className: `h-10 w-10 text-${service.color.split(' ')[0].split('-')[0]}-400` })}
                      </div>
                      <h3 className={`text-2xl font-bold mb-2 text-${THEME.text.primary}`}>{service.title}</h3>
                      <p className={`text-${THEME.text.secondary} mb-6`}>{service.description}</p>
                      <ul className="space-y-2 mt-auto">
                        {service.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-center text-sm text-${THEME.text.muted}">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`relative z-10 py-24 bg-${THEME.background.medium}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 opacity-0 transform translate-y-10 transition duration-1000 ease-out" style={shouldBeVisible(ANIMATIONS.scrollTriggers.transform)}>
              <h2 className={`text-3xl sm:text-5xl font-bold text-${THEME.text.primary}`}>How We <span className={`text-${THEME.primary.light}`}>Transform</span></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-96 opacity-0 transform translate-x-10 transition duration-1000 ease-out" style={shouldBeVisible(ANIMATIONS.scrollTriggers.transform + 100)}>
                <div className="absolute inset-0">
                  <div className="relative h-full w-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className={`h-20 w-20 rounded-2xl bg-${THEME.primary.medium} flex items-center justify-center shadow-lg animate-pulse-slow`}>
                        <Server className={`h-10 w-10 text-${THEME.text.primary}`} />
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 animate-spin-slow">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className={`h-12 w-12 rounded-xl bg-${THEME.secondary.medium} flex items-center justify-center shadow-lg`}>
                          <Code className={`h-6 w-6 text-${THEME.text.primary}`} />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className={`h-12 w-12 rounded-xl bg-${THEME.accent.green.medium} flex items-center justify-center shadow-lg`}>
                          <Shield className={`h-6 w-6 text-${THEME.text.primary}`} />
                        </div>
                      </div>
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className={`h-12 w-12 rounded-xl bg-${THEME.accent.cyan.medium} flex items-center justify-center shadow-lg`}>
                          <Clock className={`h-6 w-6 text-${THEME.text.primary}`} />
                        </div>
                      </div>
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                        <div className="h-12 w-12 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg">
                          <Zap className={`h-6 w-6 text-${THEME.text.primary}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {transformationSteps.map((step, index) => (
                  <div 
                    key={index}
                    className="mb-8 opacity-0 transform translate-y-10 transition duration-1000 ease-out"
                    style={{ ...shouldBeVisible(ANIMATIONS.scrollTriggers.transform + 100), transitionDelay: `${step.delay}ms` }}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 h-12 w-12 rounded-full bg-${THEME.primary.dark}/30 border border-${THEME.primary.medium} flex items-center justify-center mr-4`}>
                        <span className={`text-2xl font-bold text-${THEME.primary.light}`}>{index + 1}</span>
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold text-${THEME.text.primary} mb-2`}>{step.title}</h3>
                        <p className={`text-${THEME.text.secondary}`}>{step.description}</p>
                      </div>
                    </div>
                    {index < transformationSteps.length - 1 && <div className={`h-12 ml-6 border-l-2 border-${THEME.primary.dark}/30 my-2`}></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`relative z-10 py-24 bg-gradient-to-b from-${THEME.background.medium} to-${THEME.background.light}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 opacity-0 transform translate-y-10 transition duration-1000 ease-out" style={shouldBeVisible(ANIMATIONS.scrollTriggers.testimonials)}>
              <h2 className={`text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${THEME.primary.light} to-${THEME.secondary.medium}`}>Success Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="opacity-0 transform translate-y-10 transition duration-1000 ease-out"
                  style={{ ...shouldBeVisible(ANIMATIONS.scrollTriggers.testimonials + 100), transitionDelay: `${testimonial.delay}ms` }}
                >
                  <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-0.5 shadow-xl">
                    <div className={`bg-${THEME.background.light}/60 rounded-2xl p-8`}>
                      <div className="flex items-center mb-6">
                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-${THEME.text.primary} font-bold text-xl`}>
                          {testimonial.name[0]}
                        </div>
                        <div className="ml-4">
                          <h4 className={`text-lg font-bold text-${THEME.text.primary}`}>{testimonial.name}</h4>
                          <p className={`text-${THEME.text.muted}`}>{testimonial.role}</p>
                        </div>
                      </div>
                      <p className={`text-lg text-${THEME.text.secondary} italic`}>{testimonial.quote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`relative z-10 py-24 bg-${THEME.background.dark}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden p-0.5 opacity-0 transform translate-y-10 transition duration-1000 ease-out" style={shouldBeVisible(ANIMATIONS.scrollTriggers.cta)}>
              <div className={`absolute inset-0 bg-gradient-to-r from-${THEME.primary.dark} via-${THEME.secondary.dark} to-${THEME.accent.pink.dark} animate-gradient-xy`}></div>
              <div className={`relative bg-${THEME.background.medium} rounded-2xl p-12 text-center`}>
                <h2 className={`text-3xl sm:text-4xl font-bold text-${THEME.text.primary} mb-6`}>Ready to Transform?</h2>
                <p className={`text-xl text-${THEME.text.secondary} mb-8 max-w-2xl mx-auto`}>Schedule a consultation to optimize your systems.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className={`group relative px-8 py-4 bg-gradient-to-r from-${THEME.primary.medium} to-indigo-600 rounded-lg font-medium text-${THEME.text.primary} overflow-hidden`}>
                    <span className="relative z-10 flex items-center justify-center">
                      Schedule Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                  </button>
                  <button className={`px-8 py-4 bg-transparent border border-${THEME.primary.medium} rounded-lg font-medium text-${THEME.primary.light} hover:bg-${THEME.primary.dark}/20 transition duration-300`}>
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`fixed w-12 h-12 rounded-full pointer-events-none z-50 border-2 border-${THEME.primary.medium} opacity-50 hidden lg:block`}
          style={{ transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px)`, transition: 'transform 0.1s ease-out', mixBlendMode: 'difference' }}
        ></div>
        <style jsx>{`
          .animate-float { animation: float ${ANIMATIONS.durations.float} ease-in-out infinite; }
          .animate-gradient { animation: gradient ${ANIMATIONS.durations.gradient} linear infinite; background-size: 200% 200%; }
          .animate-gradient-xy { animation: gradient-xy 15s linear infinite; background-size: 400% 400%; }
          .animate-blob { animation: blob ${ANIMATIONS.durations.blob} infinite; }
          .animate-pulse-slow { animation: pulse ${ANIMATIONS.durations.pulse} infinite; }
          .animate-spin-slow { animation: spin ${ANIMATIONS.durations.spin} linear infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
          @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
          @keyframes gradient-xy { 0% { background-position: 0% 0%; } 50% { background-position: 100% 100%; } 100% { background-position: 0% 0%; } }
          @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          @keyframes spin { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
        `}</style>
        <div className="relative z-50 bg-black text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ModernUIServicePage;