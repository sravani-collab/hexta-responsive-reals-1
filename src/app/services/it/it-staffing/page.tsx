"use client"

import React, { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, Users, Building, Globe, Zap, Target, CheckCircle } from "lucide-react";
import Image from "next/image";

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}

const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header: React.FC<{ translate: MotionValue<number>; titleComponent: ReactNode }> = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

const Card: React.FC<{
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}> = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ITStaffingPage: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Permanent Staffing",
      description: "Find the perfect full-time talent for your long-term technology needs.",
      features: [
        "Executive search & placement",
        "Technical skill assessment",
        "Cultural fit evaluation",
        "90-day guarantee"
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Contract Staffing",
      description: "Flexible contract professionals for project-based requirements.",
      features: [
        "Short & long-term contracts",
        "Rapid deployment",
        "Specialized expertise",
        "Cost-effective solutions"
      ]
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Contract to Hire",
      description: "Evaluate talent through contract work before permanent placement.",
      features: [
        "Risk-free evaluation period",
        "Seamless conversion process",
        "Reduced hiring costs",
        "Better cultural alignment"
      ]
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Offshore Design Centres",
      description: "Dedicated offshore teams for scalable development solutions.",
      features: [
        "Dedicated development teams",
        "24/7 development cycle",
        "Cost optimization",
        "Quality assurance"
      ]
    },
    {
      icon: <Building className="w-6 h-6 text-blue-600" />,
      title: "Flexi Projects",
      description: "Agile project-based solutions with flexible engagement models.",
      features: [
        "Agile methodologies",
        "Scalable team size",
        "Milestone-based delivery",
        "Flexible engagement terms"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 my-4`">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  Scale Your Tech Team
                  <span className="text-blue-600 block">With Expert Talent</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  From permanent placements to flexible project teams, we deliver the right IT professionals to accelerate your business growth.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200">
                  Learn More
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Avg Response</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60"
                  alt="IT Team Collaboration"
                  width={600}
                  height={400}
                  priority
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 dark:bg-blue-800 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Z-Pattern */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our IT Staffing Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive staffing solutions tailored to meet your unique technology requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Animation Section */}
      <section className="">
        <ContainerScroll
          titleComponent={
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Experience Our
                <span className="text-blue-600 block">Staffing Platform</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                See how our advanced matching algorithms and comprehensive vetting process deliver the perfect IT talent for your needs.
              </p>
            </div>
          }
        >
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 h-full w-full rounded-2xl p-8 flex items-center justify-center" >
            <div className="text-center space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Talent Pool</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">10,000+ Professionals</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Match Rate</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">98% Accuracy</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Deployment</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">48h Average</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Global Reach</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">50+ Countries</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                Advanced Talent Matching Platform
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                AI-powered matching • Real-time availability • Skill verification • Cultural fit assessment
              </div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Scale Your IT Team?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Let us help you find the perfect IT professionals to drive your business forward. Get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200">
                Start Hiring Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITStaffingPage;