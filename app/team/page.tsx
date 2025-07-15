'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Github, Twitter } from 'lucide-react';

const teamStructure = [
  {
    category: 'Leadership',
    members: [
      {
        name: 'Dr. Sanjay Verma',
        position: 'Head of Department',
        year: 'Faculty',
        branch: 'Electronics & Communication',
        image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Professor with 15+ years of experience in electronics and communication. Guides the forum with academic expertise.',
        skills: ['Academic Leadership', 'Research', 'Curriculum Development'],
        social: { linkedin: '#', email: 'sanjay.verma@example.com' }
      },
      {
        name: 'Arjun Sharma',
        position: 'Research Head',
        year: 'Final Year',
        branch: 'Electronics & Communication',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Passionate about embedded systems and IoT. Leading research initiatives with a vision for innovation.',
        skills: ['Research', 'IoT', 'Embedded Systems'],
        social: { linkedin: '#', email: 'arjun.sharma@example.com', github: '#' }
      },
      {
        name: 'Priya Patel',
        position: 'Technical Coordinator',
        year: 'Final Year',
        branch: 'Electronics & Telecommunication',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Expert in telecommunications and signal processing. Coordinating technical excellence in all initiatives.',
        skills: ['Signal Processing', 'Telecommunications', 'Technical Coordination'],
        social: { linkedin: '#', email: 'priya.patel@example.com', twitter: '#' }
      }
    ]
  },
  {
    category: 'Technical Team',
    members: [
      {
        name: 'Vikram Singh',
        position: 'Technical Head',
        year: 'Final Year',
        branch: 'Electronics & Communication',
        image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Leading technical initiatives and workshop development. Expert in circuit design and PCB development.',
        skills: ['Circuit Design', 'PCB Design', 'Technical Leadership'],
        social: { linkedin: '#', email: 'vikram.singh@example.com', github: '#' }
      },
      {
        name: 'Anitha Krishnan',
        position: 'Workshop Head',
        year: 'Third Year',
        branch: 'Electronics & Telecommunication',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Coordinating technical workshops and training programs. Specializing in microcontroller programming.',
        skills: ['Microcontrollers', 'Training', 'Workshop Management'],
        social: { linkedin: '#', email: 'anitha.krishnan@example.com', twitter: '#' }
      },
      {
        name: 'Karthik Raj',
        position: 'Project Lead',
        year: 'Final Year',
        branch: 'Electronics & Communication',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Managing student projects and research initiatives. Expert in power electronics and renewable energy.',
        skills: ['Power Electronics', 'Renewable Energy', 'Project Management'],
        social: { linkedin: '#', email: 'karthik.raj@example.com', github: '#' }
      }
    ]
  },
  {
    category: 'Operations',
    members: [
      {
        name: 'Rohit Kumar',
        position: 'Event Coordinator',
        year: 'Third Year',
        branch: 'Electronics & Communication',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Organizing events and managing operations. Ensuring smooth functioning of all forum activities.',
        skills: ['Event Management', 'Operations', 'Communication'],
        social: { linkedin: '#', email: 'rohit.kumar@example.com', github: '#' }
      },
      {
        name: 'Meera Jain',
        position: 'Events Head',
        year: 'Third Year',
        branch: 'Electronics & Telecommunication',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Organizing technical competitions and symposiums. Ensuring memorable and impactful events.',
        skills: ['Event Planning', 'Coordination', 'Public Speaking'],
        social: { linkedin: '#', email: 'meera.jain@example.com', twitter: '#' }
      },
      {
        name: 'Ravi Gupta',
        position: 'Marketing Head',
        year: 'Second Year',
        branch: 'Electronics & Communication',
        image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Managing social media and promoting forum activities. Creating engaging content for our community.',
        skills: ['Digital Marketing', 'Social Media', 'Content Creation'],
        social: { linkedin: '#', email: 'ravi.gupta@example.com', twitter: '#', github: '#' }
      }
    ]
  },
  {
    category: 'Research Team',
    members: [
      {
        name: 'Amit Desai',
        position: 'R&D Head',
        year: 'Final Year',
        branch: 'Electronics & Communication',
        image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Leading research projects and innovation initiatives. Specializing in AI applications in electronics.',
        skills: ['AI/ML', 'Research', 'Innovation'],
        social: { linkedin: '#', email: 'amit.desai@example.com', github: '#' }
      },
      {
        name: 'Divya Nair',
        position: 'R&D Coordinator',
        year: 'Third Year',
        branch: 'Electronics & Telecommunication',
        image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Coordinating research activities and paper publications. Focused on signal processing applications.',
        skills: ['Signal Processing', 'Research Coordination', 'Technical Writing'],
        social: { linkedin: '#', email: 'divya.nair@example.com', twitter: '#' }
      },
      {
        name: 'Rajiv Khanna',
        position: 'Innovation Lead',
        year: 'Third Year',
        branch: 'Electronics & Communication',
        image: 'https://images.pexels.com/photos/2182977/pexels-photo-2182977.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Driving innovation and patent initiatives. Specializing in IoT and smart device development.',
        skills: ['IoT', 'Patent Research', 'Product Development'],
        social: { linkedin: '#', email: 'rajiv.khanna@example.com', github: '#' }
      }
    ]
  },
  {
    category: 'Student Representatives',
    members: [
      {
        name: 'Preeti Joshi',
        position: 'First Year Rep',
        year: 'First Year',
        branch: 'Electronics & Communication',
        image: 'https://images.pexels.com/photos/1181693/pexels-photo-1181693.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Representing first year students and organizing beginner-friendly workshops and events.',
        skills: ['Communication', 'Event Coordination', 'Mentoring'],
        social: { linkedin: '#', email: 'preeti.joshi@example.com', twitter: '#' }
      },
      {
        name: 'Aditya Rao',
        position: 'Second Year Rep',
        year: 'Second Year',
        branch: 'Electronics & Telecommunication',
        image: 'https://images.pexels.com/photos/2182978/pexels-photo-2182978.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Representing second year students and helping bridge the gap between junior and senior students.',
        skills: ['Teamwork', 'Leadership', 'Technical Skills'],
        social: { linkedin: '#', email: 'aditya.rao@example.com', github: '#' }
      },
      {
        name: 'Neha Gupta',
        position: 'Programming Lead',
        year: 'Third Year',
        branch: 'Electronics & Telecommunication',
        image: 'https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?auto=compress&cs=tinysrgb&w=300',
        bio: 'Leading programming and software development initiatives. Specializing in embedded C and Python.',
        skills: ['Embedded C', 'Python', 'Algorithms'],
        social: { linkedin: '#', email: 'neha.gupta@example.com', github: '#' }
      }
    ]
  }
];

export default function Team() {
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
              Meet Our <span className="gradient-text">Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Dedicated students and faculty passionate about electronics and telecommunications engineering
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      {teamStructure.map((section, sectionIndex) => (
        <section key={section.category} className={`py-16 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                {section.category}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.members.map((member, memberIndex) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (memberIndex * 0.1) }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-sm opacity-90">{member.position}</p>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {member.year}
                          </Badge>
                          <CardDescription>{member.branch}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Skills:</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        {member.social.linkedin && (
                          <Button size="sm" variant="outline" className="p-2">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        )}
                        {member.social.email && (
                          <Button size="sm" variant="outline" className="p-2">
                            <Mail className="h-4 w-4" />
                          </Button>
                        )}
                        {member.social.github && (
                          <Button size="sm" variant="outline" className="p-2">
                            <Github className="h-4 w-4" />
                          </Button>
                        )}
                        {member.social.twitter && (
                          <Button size="sm" variant="outline" className="p-2">
                            <Twitter className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Join Team CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We're always looking for passionate students to join our team and contribute to the growth of our technical community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}