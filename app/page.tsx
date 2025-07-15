'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, BookOpen, Zap, BrainCircuit as Circuit, Wifi, Cpu, Star } from 'lucide-react';

const features = [
  {
    icon: Circuit,
    title: 'Electronics Innovation',
    description: 'Explore cutting-edge electronics projects and circuit designs',
  },
  {
    icon: Wifi,
    title: 'Telecommunication Tech',
    description: 'Dive into wireless communication and network technologies',
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    description: 'Learn microcontroller programming and IoT development',
  },
  {
    icon: Zap,
    title: 'Power Electronics',
    description: 'Master power systems and renewable energy solutions',
  },
];

const stats = [
  { value: '500+', label: 'Annual Applicants' },
  { value: '100+', label: 'Active Members' },
  { value: '10+', label: 'Industry Partners' },
  { value: '10+', label: 'Technical Workshops' },
];

const upcomingEvents = [
  {
    title: 'IoT Workshop',
    date: 'March 15, 2025',
    type: 'Workshop',
    description: 'Hands-on session on Internet of Things development',
  },
  {
    title: 'Circuit Design Competition',
    date: 'March 22, 2025',
    type: 'Competition',
    description: 'Showcase your analog and digital circuit design skills',
  },
  {
    title: 'Industry Expert Talk',
    date: 'March 28, 2025',
    type: 'Seminar',
    description: 'Learn from leading professionals in telecommunications',
  },
];

export default function Home() {
  return (
    <div className="space-bg min-h-screen">
      {/* Particles Background */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge className="bg-white/10 text-white border-white/20 mb-6 px-4 py-2">
              India's leading professional forum for Electronics & Telecommunication engineers, empowering members nationwide.
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title text-white mb-8 float-animation"
          >
            IETE Student Forum
            <br />
            <span className="gradient-text">SRM IST Vadapalani</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle text-white/80 mb-12 max-w-3xl mx-auto"
          >
            Join us to explore the world of Electronics and Telecommunication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Button size="lg" className="glow-button text-white font-semibold px-8 py-4 text-lg">
              Join Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-2 text-green-400"
          >
            <div className="status-indicator">
              <span className="text-sm font-medium">All Applications Live!</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-card rounded-lg p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our <span className="gradient-text">Technical Domains</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Dive deep into the world of electronics and telecommunications with our specialized programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full space-card text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-blue-500/20 rounded-full w-fit">
                      <feature.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/60">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Upcoming <span className="gradient-text">Events</span>
              </h2>
              <p className="text-xl text-white/60">
                Don't miss our exciting technical events and workshops
              </p>
            </div>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full space-card">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-white/60">{event.date}</span>
                    </div>
                    <CardTitle className="text-xl text-white">{event.title}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 w-fit">
                      {event.type}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/60">{event.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-card rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Connect with fellow engineers, participate in exciting projects, and build your technical skills in the world of electronics and telecommunications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-button text-white font-semibold px-8">
                <Users className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}