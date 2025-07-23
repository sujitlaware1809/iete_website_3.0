'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, BookOpen, Zap, BrainCircuit as Circuit, Wifi, Cpu, Star, UserPlus, CheckCircle } from 'lucide-react';
import Image from 'next/image';

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

const techInterests = [
  'Electronics Design',
  'Embedded Systems',
  'IoT Development',
  'Signal Processing',
  'Power Electronics',
  'Telecommunications',
  'VLSI Design',
  'PCB Design',
  'Robotics',
  'Machine Learning',
];

const benefits = [
  {
    icon: Users,
    title: 'Networking Opportunities',
    description: 'Connect with like-minded students and industry professionals',
  },
  {
    icon: Calendar,
    title: 'Exclusive Events',
    description: 'Access to workshops, seminars, and technical competitions',
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description: 'Access to technical resources and research materials',
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    studentId: '',
    year: '',
    branch: '',
    experience: '',
    motivation: '',
    agreeToTerms: false,
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your application! We will review it and get back to you within 5 business days.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      studentId: '',
      year: '',
      branch: '',
      experience: '',
      motivation: '',
      agreeToTerms: false,
    });
    setSelectedInterests([]);
    setIsSubmitting(false);
  };
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
            <Button 
              size="lg" 
              className="glow-button text-white font-semibold px-8 py-4 text-lg"
              onClick={() => document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-6"
          >
  <div className="px-4 py-2 text-xl font-bold text-green-300 bg-green-800/30 rounded-full">
    2024–2026 Team
  </div>

            
            {/* Group Photo with Animation and Border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl border-4 border-white/20 shadow-lg"
            >
             <Image
  src="/iete_group.jpg"
  alt="IETE Group Photo"
  width={800} // Reduced from 800
  height={450} // Reduced proportionally from 450
 className="object-cover w-full h-auto"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-3 px-4 sm:px-6 lg:px-8">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why <span className="gradient-text">Join Us?</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Discover the benefits of being part of our technical community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full space-card text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-blue-500/20 rounded-full w-fit">
                      <benefit.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/60">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section id="join-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="space-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-white">
                  <UserPlus className="h-6 w-6 text-blue-400" />
                  Join Our Community
                </CardTitle>
                <CardDescription className="text-white/60">
                  Fill out this form to apply for membership in the IETE Student Forum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Your first name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <Label htmlFor="email" className="text-white">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@srmist.edu.in"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="studentId" className="text-white">Student ID</Label>
                        <Input
                          id="studentId"
                          placeholder="Your student ID"
                          value={formData.studentId}
                          onChange={(e) => handleInputChange('studentId', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="year" className="text-white">Year of Study</Label>
                        <Select onValueChange={(value) => handleInputChange('year', value)}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">First Year</SelectItem>
                            <SelectItem value="2">Second Year</SelectItem>
                            <SelectItem value="3">Third Year</SelectItem>
                            <SelectItem value="4">Final Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="branch" className="text-white">Branch</Label>
                        <Select onValueChange={(value) => handleInputChange('branch', value)}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select branch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ece">Electronics & Communication</SelectItem>
                            <SelectItem value="eee">Electrical & Electronics</SelectItem>
                            <SelectItem value="ete">Electronics & Telecommunication</SelectItem>
                            <SelectItem value="eie">Electronics & Instrumentation</SelectItem>
                            <SelectItem value="cse">Computer Science</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Technical Interests */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Technical Interests</h3>
                    <p className="text-sm text-white/60 mb-4">
                      Select the areas you're most interested in:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {techInterests.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={selectedInterests.includes(interest)}
                            onCheckedChange={() => handleInterestToggle(interest)}
                            className="border-white/20"
                          />
                          <Label htmlFor={interest} className="text-sm cursor-pointer text-white">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience and Motivation */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Tell Us About Yourself</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="experience" className="text-white">Technical Experience</Label>
                        <Textarea
                          id="experience"
                          placeholder="Describe your technical background, projects, or relevant experience..."
                          rows={4}
                          value={formData.experience}
                          onChange={(e) => handleInputChange('experience', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="motivation" className="text-white">Why do you want to join?</Label>
                        <Textarea
                          id="motivation"
                          placeholder="Tell us why you want to join IETE Student Forum and what you hope to achieve..."
                          rows={4}
                          value={formData.motivation}
                          onChange={(e) => handleInputChange('motivation', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                        className="border-white/20"
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm cursor-pointer text-white">
                        I agree to the terms and conditions and commit to active participation
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full glow-button text-white font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Submitting Application...'
                    ) : (
                      <>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}