'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Users, Calendar, BookOpen } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Fostering creativity and technological advancement in electronics and telecommunications',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building a strong community of like-minded engineers and technology enthusiasts',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Sharing',
    description: 'Promoting continuous learning and knowledge exchange among members',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Striving for excellence in all technical and professional endeavors',
  },
];

const milestones = [
  {
    year: '2019',
    title: 'Forum Establishment',
    description: 'IETE Student Forum established at SRM Vadapalani Campus',
  },
  {
    year: '2020',
    title: 'First Technical Symposium',
    description: 'Organized our first major technical event with 200+ participants',
  },
  {
    year: '2021',
    title: 'Industry Partnerships',
    description: 'Established partnerships with leading tech companies',
  },
  {
    year: '2022',
    title: 'Research Initiatives',
    description: 'Launched student research projects in emerging technologies',
  },
  {
    year: '2023',
    title: 'Innovation Lab',
    description: 'Set up dedicated innovation lab for student projects',
  },
  {
    year: '2024',
    title: 'Global Recognition',
    description: 'Received recognition from IETE National Headquarters',
  },
];

export default function About() {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="gradient-text">IETE Student Forum</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Empowering the next generation of electronics and telecommunications engineers through innovation, collaboration, and technical excellence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To provide a platform for students to explore, learn, and excel in the fields of electronics and telecommunications engineering. We aim to bridge the gap between theoretical knowledge and practical applications through hands-on projects, workshops, and industry interactions.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To be the leading student organization in electronics and telecommunications engineering, fostering innovation, research, and professional development. We envision creating a community of skilled engineers who contribute to technological advancement and societal progress.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About IETE Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="gradient-text">IETE</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading recognized professional society devoted to the advancement of Science and Technology of Electronics, Telecommunications, Computers, and Information Technology.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Established in 1953, IETE has been serving the nation for over seven decades, fostering the growth and development of electronics and telecommunications engineering in India.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">70+</div>
                  <div className="text-sm text-muted-foreground">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Student Forums</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-center">SRM Vadapalani Campus</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Electronics</Badge>
                      <span className="text-sm">Circuit Design & Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Telecommunications</Badge>
                      <span className="text-sm">Wireless Communications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Embedded Systems</Badge>
                      <span className="text-sm">IoT & Microcontrollers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Power Electronics</Badge>
                      <span className="text-sm">Renewable Energy</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our forum's growth and achievements
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-secondary"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="relative">
                      <div className={`absolute top-6 w-4 h-4 bg-primary rounded-full ${index % 2 === 0 ? '-right-2' : '-left-2'}`}></div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <Badge variant="outline">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}