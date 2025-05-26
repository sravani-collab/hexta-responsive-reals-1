"use client"

import BlurImage from "@/components/blur-image";
import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTeamImageUrl } from "@/lib/s3";
import { Phone, Target, Eye, Users, Zap, Award, Lightbulb, Rocket, Handshake, ShieldCheck, UserCheck, BarChart3 } from "lucide-react";
import  {motion} from "framer-motion" 
import Link from "next/link";
import { Button } from "@heroui/react"

// export const metadata = {
//   title: "About Us | HextaSphere",
//   description: "Learn more about HextaSphere, our mission, vision, values, and leadership team.",
// };

export default function AboutPage() {
  const coreValues = [
    { title: "Innovation", icon: <Lightbulb className="w-8 h-8 mb-2 text-primary" />, description: "We continuously explore new technologies and approaches to deliver creative solutions that address evolving business needs." },
    { title: "Expertise", icon: <Award className="w-8 h-8 mb-2 text-primary" />, description: "We maintain deep technical knowledge and industry insights to provide informed guidance and superior solutions." },
    { title: "Reliability", icon: <ShieldCheck className="w-8 h-8 mb-2 text-primary" />, description: "We deliver reliable solutions with consistent communication, ensuring accountability throughout every project." },
    { title: "Collaboration", icon: <Handshake className="w-8 h-8 mb-2 text-primary" />, description: "We work closely with our clients, fostering partnerships built on open communication and shared goals." },
    { title: "Integrity", icon: <UserCheck className="w-8 h-8 mb-2 text-primary" />, description: "We operate with transparency, honesty, and ethical practices in all our business relationships." },
    { title: "Client Success", icon: <BarChart3 className="w-8 h-8 mb-2 text-primary" />, description: "We measure our success by the value we create for our clients and their achievement of business objectives." },
  ];

  const leadershipTeam = [
    { name: "Srinivasa Rao Vavilapalli", role: "Managing Director", image: getTeamImageUrl("srinivasa-rao-vavilapalli.jpeg") },
    { name: "Santosh Kumar Bogela", role: "Business Head", image: getTeamImageUrl("santosh-kumar-bogela.jpeg") },
    { name: "D. Sudheer Babu", role: "Head - IT Operations", image: getTeamImageUrl("sudheer.jpeg") },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 {...fadeIn} className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Innovating for a Digital Future
          </motion.h1>
          <motion.p {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            HextaSphere is dedicated to empowering businesses with cutting-edge IT and Engineering solutions, driving growth and efficiency in an ever-evolving technological landscape.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 flex items-center">
                <Rocket className="w-8 h-8 mr-3 text-primary" />
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2018, HextaSphere began with a simple goal: to help
                businesses leverage technology to achieve their full potential.
                What started as a small team of passionate engineers has grown
                into a comprehensive technology solutions provider serving
                clients worldwide.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our name, HextaSphere, represents the six core principles that
                guide our work: innovation, expertise, reliability,
                collaboration, integrity, and client success. These principles
                are embedded in everything we do, from our development processes
                to our client relationships.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we&apos;re proud to be a trusted technology partner for
                businesses ranging from startups to multinational corporations,
                delivering solutions that drive real business value.
              </p>
            </motion.div>
            <motion.div 
              className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BlurImage
                src="/images/about-us/hexta-about-1.webp"
                alt="HextaSphere team at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeIn}>
              <Card className="bg-card border-border shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                    <Target className="w-7 h-7 mr-3" /> Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground leading-relaxed">
                    To empower organizations through innovative technology
                    solutions that solve complex challenges, drive growth, and
                    create sustainable competitive advantages.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
              <Card className="bg-card border-border shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                    <Eye className="w-7 h-7 mr-3" /> Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground leading-relaxed">
                    To be a globally recognized leader in technology and engineering services,
                    renowned for our commitment to excellence, innovation, and client success.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 mr-3 text-primary" />
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles are the bedrock of our culture and guide every decision we make.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MagicCard className="h-full" gradientColor="var(--primary-hsl)" gradientSize={150}>
                  <Card className="bg-card text-card-foreground h-full p-6 flex flex-col items-center text-center">
                    {value.icon}
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </Card>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 mr-3 text-primary" />
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who guide our company&apos;s
              vision and strategy.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="bg-card text-card-foreground text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary/50">
                    <BlurImage
                      src={member.image}
                      alt={`${member.name} portrait`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Build the Future Together?
          </motion.h2>
          <motion.p {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Let HextaSphere be your trusted partner in navigating the complexities of technology and engineering.
          </motion.p>
          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.4 }}>
          <Button variant="bordered" as={Link} href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
            >
              Get in Touch <Phone className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
