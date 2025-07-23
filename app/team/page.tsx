'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Github as GitHubIcon, Twitter as TwitterIcon } from 'lucide-react';

type Social = {
  linkedin?: string;
  email?: string;
  github?: string;
  twitter?: string;
};

const teamStructure = [
  {
    category: 'Faculty',
    members: [
      {
        name: 'Dr. A. Shirly Edward',
        position: 'Chairperson',
        year: 'Professor, ECE Dept.',
        branch: '',
        image: '',
        bio: '',
        skills: [],
        social: {}
      },
      {
        name: 'Dr. D. Vaishali',
        position: 'Faculty Coordinator',
        year: '',
        branch: '',
        image: '',
        bio: '',
        skills: [],
        social: {}
      },
      {
        name: 'Dr. T. S. Balaji',
        position: 'Faculty Coordinator',
        year: '',
        branch: '',
        image: '',
        bio: '',
        skills: [],
        social: {}
      }
    ]
  },
  {
    category: 'Executive Committee',
    members: [
      { name: 'SUMITHA NANDHA KUMAR', position: 'PRESIDENT', year: '4th Year', branch: 'ECE', image: '/team/president.jpg', bio: 'Leading the IETE Student Forum with a vision to foster technical excellence and innovation among students.', skills: ['Leadership', 'Strategic Planning', 'Team Management', 'Public Speaking'], social: { linkedin: '#', email: 'sumitha@iete.edu' } },
      { name: 'KISHORE N S', position: 'VICE PRESIDENT', year: '4th Year', branch: 'EEE', image: '/team/vice-president.jpg', bio: 'Supporting the president in forum initiatives and overseeing various technical and non-technical activities.', skills: ['Project Management', 'Event Coordination', 'Technical Leadership', 'Communication'], social: { linkedin: '#', github: '#' } },
      { name: 'EXECUTIVE COMMITTEE', position: 'LEADERSHIP & MANAGEMENT', year: '', branch: '', image: '', bio: 'Our executive committee leads the forum\'s strategic direction, oversees all activities, and ensures the growth and development of our technical community.', skills: ['Leadership', 'Management', 'Strategic Planning', 'Decision Making'], social: {} },
      { name: 'SAI DHARSHAN', position: 'SECRETARY', year: '3rd Year', branch: 'ECE', image: '/team/secretary.jpg', bio: 'Handling administrative responsibilities and maintaining records of all forum activities and meetings.', skills: ['Documentation', 'Organization', 'Communication', 'Time Management'], social: { linkedin: '#', email: 'sai@iete.edu' } },
      { name: 'KATE JONITA. R', position: 'JOINT SECRETARY', year: '3rd Year', branch: 'CSE', image: '/team/joint-secretary.jpg', bio: 'Assisting the secretary in administrative tasks and coordinating with various teams for smooth operations.', skills: ['Coordination', 'Documentation', 'Team Collaboration', 'Event Planning'], social: { linkedin: '#', github: '#' } },
      { name: 'SHAMITAA SARAVANAN', position: 'TREASURER', year: '3rd Year', branch: 'ECE', image: '/team/treasurer.jpg', bio: 'Managing the forum\'s finances, budget planning, and ensuring efficient resource allocation for all activities.', skills: ['Financial Management', 'Budgeting', 'Accounting', 'Resource Planning'], social: { linkedin: '#', email: 'shamitaa@iete.edu' } }
    ]
  },
  {
    category: 'Technical Team',
    members: [
      { name: 'M. MOHAMMED SHABAR', position: 'TECHNICAL HEAD', year: '3rd Year', branch: 'ECE', image: '/team/technical-head.jpg', bio: 'Leading technical initiatives and innovation projects in electronics and embedded systems.', skills: ['Embedded Systems', 'IoT', 'Circuit Design', 'PCB Design'], social: { linkedin: '#', email: 'shabar@iete.edu' } },
      { name: 'TECHNICAL TEAM', position: 'ELECTRONICS & COMMUNICATIONS', year: '', branch: '', image: '', bio: 'Our technical team specializes in electronics design, embedded systems, IoT development, and telecommunications engineering.', skills: ['Electronics', 'Embedded Systems', 'IoT', 'Telecommunications'], social: {} },
      { name: 'SUJIT LAWARE', position: 'JOINT TECHNICAL HEAD', year: '3rd Year', branch: 'EEE', image: '/team/joint-tech-head.jpg', bio: 'Expert in power electronics and renewable energy systems with multiple project implementations.', skills: ['Power Electronics', 'Renewable Energy', 'Control Systems', 'MATLAB'], social: { linkedin: '#', email: 'sujit@iete.edu' } }
    ]
  },
  {
    category: 'Editorial Team',
    members: [
      { name: 'ARJUN A.G', position: 'EDITORIAL HEAD', year: '3rd Year', branch: 'ECE', image: '/team/editorial-head.jpg', bio: 'Experienced writer and editor with a passion for technical content creation and documentation.', skills: ['Technical Writing', 'Content Editing', 'Documentation', 'Research'], social: { linkedin: '#', github: '#' } },
      { name: 'EDITORIAL TEAM', position: 'CONTENT & PUBLICATIONS', year: '', branch: '', image: '', bio: 'Our editorial team manages all publications, technical documentation, and content creation for the forum\'s newsletters and journals.', skills: ['Technical Writing', 'Editing', 'Publishing', 'Documentation'], social: {} },
      { name: 'RAHUL. S', position: 'JOINT EDITORIAL HEAD', year: '3rd Year', branch: 'CSE', image: '/team/joint-editorial-head.jpg', bio: 'Skilled in technical documentation and academic writing with experience in research paper publications.', skills: ['Academic Writing', 'Research', 'Proofreading', 'Publishing'], social: { linkedin: '#', email: 'rahul@iete.edu' } }
    ]
  },
  {
    category: 'PR and Outreach Team',
    members: [
      { name: 'LAKSSHITHA. B', position: 'PR AND OUTREACH HEAD', year: '3rd Year', branch: 'ECE', image: '/team/pr-head.jpg', bio: 'Skilled communicator with experience in building industry connections and promoting technical events.', skills: ['Public Relations', 'Event Promotion', 'Social Media', 'Networking'], social: { linkedin: '#', email: 'laksshitha@iete.edu' } },
      { name: 'PR & OUTREACH TEAM', position: 'COMMUNICATIONS & NETWORKING', year: '', branch: '', image: '', bio: 'Our PR team manages external communications, industry partnerships, and promotes forum activities to the wider community.', skills: ['Public Relations', 'Marketing', 'Social Media', 'Event Promotion'], social: {} },
      { name: 'M.S. DHARANI KUMAR', position: 'JOINT PR AND OUTREACH HEAD', year: '3rd Year', branch: 'EEE', image: '/team/joint-pr-head.jpg', bio: 'Experienced in social media management and digital marketing for technical events and forums.', skills: ['Digital Marketing', 'Content Creation', 'Social Media', 'Community Building'], social: { linkedin: '#', twitter: '#' } }
    ]
  },
  {
    category: 'Creative Team',
    members: [
      { name: 'PRIYADARSHINI. R', position: 'CREATIVE HEAD', year: '3rd Year', branch: 'ECE', image: '/team/creative-head.jpg', bio: 'Talented designer with expertise in graphic design, UI/UX, and digital media for technical events.', skills: ['Graphic Design', 'UI/UX', 'Digital Media', 'Branding'], social: { linkedin: '#', github: '#' } },
      { name: 'CREATIVE TEAM', position: 'DESIGN & MEDIA', year: '', branch: '', image: '', bio: 'Our creative team handles all design aspects including event posters, website design, promotional materials, and digital media content.', skills: ['Graphic Design', 'Web Design', 'Video Editing', 'Animation'], social: {} },
      { name: 'SHELLY RAJASEKARAN', position: 'JOINT CREATIVE HEAD', year: '3rd Year', branch: 'CSE', image: '/team/joint-creative-head.jpg', bio: 'Skilled in digital design and multimedia content creation for technical forums and events.', skills: ['Digital Design', 'Motion Graphics', 'Photography', 'Illustration'], social: { linkedin: '#', twitter: '#' } }
    ]
  },
  {
    category: 'Logistics Team',
    members: [
      { name: 'JITHENDRAN. S', position: 'HEAD OF LOGISTICS', year: '3rd Year', branch: 'ECE', image: '/team/logistics-head.jpg', bio: 'Experienced in event management and resource coordination for technical workshops and competitions.', skills: ['Event Management', 'Resource Planning', 'Coordination', 'Budgeting'], social: { linkedin: '#', email: 'jithendran@iete.edu' } },
      { name: 'LOGISTICS TEAM', position: 'EVENT OPERATIONS', year: '', branch: '', image: '', bio: 'Our logistics team handles all operational aspects of events including venue management, equipment setup, and resource allocation.', skills: ['Event Operations', 'Resource Management', 'Venue Setup', 'Equipment Handling'], social: {} },
      { name: 'S. PARAMASIVAN', position: 'JOINT HEAD OF LOGISTICS', year: '3rd Year', branch: 'EEE', image: '/team/joint-logistics-head.jpg', bio: 'Skilled in managing technical equipment and resources for workshops and technical demonstrations.', skills: ['Technical Setup', 'Inventory Management', 'Event Planning', 'Team Coordination'], social: { linkedin: '#', github: '#' } }
    ]
  },
  {
    category: 'Working Committee',
    members: [
      { name: 'VISHAL. M', position: 'WORKING COMMITTEE HEAD', year: '3rd Year', branch: 'ECE', image: '/team/working-head.jpg', bio: 'Dedicated team leader with experience in organizing technical events and coordinating volunteer activities.', skills: ['Team Leadership', 'Event Organization', 'Volunteer Management', 'Project Planning'], social: { linkedin: '#', email: 'vishal@iete.edu' } },
      { name: 'WORKING COMMITTEE', position: 'OPERATIONS & SUPPORT', year: '', branch: '', image: '', bio: 'Our working committee handles day-to-day operations, volunteer coordination, and provides support for all forum activities and events.', skills: ['Event Support', 'Volunteer Coordination', 'Operations', 'Team Management'], social: {} },
      { name: 'S. JENEFAR KEERTH', position: 'JOINT WORKING COMMITTEE HEAD', year: '3rd Year', branch: 'CSE', image: '/team/joint-working-head.jpg', bio: 'Experienced in volunteer coordination and event support for technical workshops and competitions.', skills: ['Volunteer Management', 'Event Support', 'Team Coordination', 'Documentation'], social: { linkedin: '#', github: '#' } }
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
        <section key={section.category} className={`py-16 ${sectionIndex % 2 === 0 ? 'bg-white text-black' : 'bg-gray-50 text-black'}`}>
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
              {section.members.map((member: { name: string; position: string; year: string; branch: string; image: string; bio: string; skills: string[]; social: Social }, memberIndex) => {
                // Check if this is a middle team card (team name card)
                const isTeamCard = member.name.includes('TEAM');
                
                return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (memberIndex * 0.1) }}
                >
                  {isTeamCard ? (
                    // Special design for team cards
                    <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 border border-primary/30">
                      <div className="relative">
                        <div className="h-64 bg-gradient-to-r from-primary/30 to-secondary/30 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <h3 className="text-xl font-bold text-white">{member.name.split(' ')[0]}</h3>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/80 text-primary font-bold">
                            TEAM
                          </Badge>
                        </div>
                      </div>
                      
                      <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-primary/10">
                        <div className="text-center">
                          <h3 className="text-xl font-bold gradient-text">{member.name}</h3>
                          <p className="text-sm font-medium text-secondary">{member.position}</p>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-6">
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                          {member.bio}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2 text-primary">Focus Areas:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs bg-secondary/20 text-secondary border-secondary/30">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    // Regular design for member cards
                    <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                      <div className="relative">
                        <img
                          src={member.image || '/team/default-avatar.jpg'}
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
                          {member.social && member.social.linkedin && (
                            <Button size="sm" variant="outline" className="p-2">
                              <Linkedin className="h-4 w-4" />
                            </Button>
                          )}
                          {member.social && member.social.email && (
                            <Button size="sm" variant="outline" className="p-2">
                              <Mail className="h-4 w-4" />
                            </Button>
                          )}
                          {member.social && member.social.github && (
                            <Button size="sm" variant="outline" className="p-2">
                              <GitHubIcon className="h-4 w-4" />
                            </Button>
                          )}
                          {member.social && member.social.twitter && (
                            <Button size="sm" variant="outline" className="p-2">
                              <TwitterIcon className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              )})}
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