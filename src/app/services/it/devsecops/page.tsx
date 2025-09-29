"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Cloud, 
  Server, 
  Shield, 
  GitBranch, 
  Container, 
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Users,
  Globe,
  Lock
} from "lucide-react";

// Custom components implementation
const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          style={{
            translateY: translate,
          }}
          className="div max-w-5xl mx-auto text-center"
        >
          {titleComponent}
        </motion.div>
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
          }}
          className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-border p-2 md:p-6 bg-background rounded-[30px] shadow-2xl"
        >
          <div className="h-full w-full overflow-hidden rounded-2xl bg-muted md:rounded-2xl md:p-4">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const TextShimmer = ({
  children,
  className = "",
  duration = 2,
}: {
  children: string;
  className?: string;
  duration?: number;
}) => {
  return (
    <motion.div
      className={`relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box] dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] ${className}`}
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
      style={{
        '--spread': '50px',
        backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
      } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
};

interface TechStackItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: 'cloud' | 'devops' | 'security' | 'database';
}

const techStack: TechStackItem[] = [
  { name: 'AWS', icon: <Cloud className="w-8 h-8" />, description: 'Primary cloud platform', category: 'cloud' },
  { name: 'Azure', icon: <Cloud className="w-8 h-8" />, description: 'Microsoft cloud services', category: 'cloud' },
  { name: 'GCP', icon: <Cloud className="w-8 h-8" />, description: 'Google Cloud Platform', category: 'cloud' },
  { name: 'Docker', icon: <Container className="w-8 h-8" />, description: 'Containerization', category: 'devops' },
  { name: 'Kubernetes', icon: <Server className="w-8 h-8" />, description: 'Container orchestration', category: 'devops' },
  { name: 'Jenkins', icon: <GitBranch className="w-8 h-8" />, description: 'CI/CD automation', category: 'devops' },
  { name: 'GitLab', icon: <GitBranch className="w-8 h-8" />, description: 'DevOps platform', category: 'devops' },
  { name: 'Security', icon: <Shield className="w-8 h-8" />, description: 'Enterprise security', category: 'security' },
];

const DevSecOpsPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef);
  const servicesInView = useInView(servicesRef);
  const techInView = useInView(techRef);
  const ctaInView = useInView(ctaRef);

  useEffect(() => {
    if (heroInView) setActiveSection(0);
    else if (servicesInView) setActiveSection(1);
    else if (techInView) setActiveSection(2);
    else if (ctaInView) setActiveSection(3);
  }, [heroInView, servicesInView, techInView, ctaInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const zigzagVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const zagzigVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 text-center z-10"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              DevSecOps Excellence
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Secure Your
            <br />
            <TextShimmer className="text-primary font-bold">
              Cloud Journey
            </TextShimmer>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Expert DevSecOps solutions across AWS, Azure, and GCP. We adapt our tech stack to meet your unique requirements.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              <Play className="w-5 h-5 mr-2" />
              Get Started
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-colors" onClick={() => {
              const section = document.getElementById('services-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth'});
              }
            }}>
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </motion.div>

        {/* Floating tech icons */}
        <motion.div
          className="absolute top-20 left-10 text-primary/30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Cloud className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-primary/30"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Container className="w-10 h-10" />
        </motion.div>
      </section>

      {/* Services Section - Z Pattern */}
      <section ref={servicesRef} id="services-section" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          {/* Service 1 - Left Text, Right Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={zigzagVariants} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud Infrastructure
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Multi-Cloud Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                We specialize in AWS but are equally proficient with Azure and GCP. Our team designs scalable, secure cloud architectures tailored to your business needs.
              </p>
              <ul className="space-y-3">
                {['Infrastructure as Code', 'Auto-scaling Solutions', 'Cost Optimization', 'Disaster Recovery'].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={zagzigVariants} className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-border">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-background/80 rounded-lg p-4 text-center">
                    <Cloud className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <span className="text-sm font-medium">AWS</span>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 text-center">
                    <Cloud className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <span className="text-sm font-medium">Azure</span>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 text-center">
                    <Cloud className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    <span className="text-sm font-medium">GCP</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Service 2 - Right Text, Left Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={zigzagVariants} className="lg:order-2 space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <GitBranch className="w-4 h-4 mr-2" />
                CI/CD Pipeline
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Automated DevOps
              </h2>
              <p className="text-lg text-muted-foreground">
                Streamline your development workflow with our advanced CI/CD pipelines using Jenkins, GitLab, and other cutting-edge tools.
              </p>
              <ul className="space-y-3">
                {['Automated Testing', 'Continuous Integration', 'Deployment Automation', 'Monitoring & Alerts'].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={zagzigVariants} className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <GitBranch className="w-6 h-6 text-green-500" />
                    <div className="flex-1 h-2 bg-green-500/30 rounded-full">
                      <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Container className="w-6 h-6 text-blue-500" />
                    <div className="flex-1 h-2 bg-blue-500/30 rounded-full">
                      <div className="h-full w-1/2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <div className="flex-1 h-2 bg-yellow-500/30 rounded-full">
                      <div className="h-full w-5/6 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Service 3 - Left Text, Right Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={zigzagVariants} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Security First
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Enterprise Security
              </h2>
              <p className="text-lg text-muted-foreground">
                Security is integrated into every layer of our solutions. From infrastructure to application level, we ensure your data and systems are protected.
              </p>
              <ul className="space-y-3">
                {['Zero Trust Architecture', 'Compliance Management', 'Threat Detection', 'Vulnerability Assessment'].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={zagzigVariants} className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/80 rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-red-500" />
                    <span className="text-sm font-medium">Security</span>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 text-center">
                    <Lock className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                    <span className="text-sm font-medium">Compliance</span>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 text-center">
                    <Database className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <span className="text-sm font-medium">Data Protection</span>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 text-center">
                    <Globe className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    <span className="text-sm font-medium">Network Security</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={techRef} className="py-20">
        <ContainerScroll
          titleComponent={
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We leverage the best tools and technologies, adapting our stack based on your specific requirements
              </p>
            </div>
          }
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/80 backdrop-blur-sm rounded-lg p-6 text-center border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="text-primary group-hover:scale-110 transition-transform mb-4">
                  {tech.icon}
                </div>
                <h3 className="font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </ContainerScroll>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-primary/5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center"
        >
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s discuss how our DevSecOps expertise can accelerate your cloud journey while maintaining the highest security standards.
            </p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="inline-flex items-center px-8 py-4 bg-primary rounded-lg font-semibold hover:bg-accent transition-colors">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-colors">
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Successful Projects</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default DevSecOpsPage;
