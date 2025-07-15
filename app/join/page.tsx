'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { UserPlus, Star, CheckCircle, Users, Calendar, Trophy, BookOpen } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const joinSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  studentId: z.string().min(5, 'Student ID must be at least 5 characters'),
  year: z.string().min(1, 'Please select your year'),
  branch: z.string().min(1, 'Please select your branch'),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  experience: z.string().min(10, 'Please describe your experience (minimum 10 characters)'),
  motivation: z.string().min(20, 'Please explain your motivation (minimum 20 characters)'),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
});

type JoinForm = z.infer<typeof joinSchema>;

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
    icon: Trophy,
    title: 'Skill Development',
    description: 'Enhance your technical and leadership skills',
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description: 'Access to technical resources and research materials',
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
  'Renewable Energy',
  'Automotive Electronics',
];

const requirements = [
  'Must be a current student at SRM Institute',
  'Maintain good academic standing',
  'Commit to active participation',
  'Attend at least 70% of events',
  'Contribute to forum activities',
];

export default function Join() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<JoinForm>({
    resolver: zodResolver(joinSchema),
  });

  const handleInterestToggle = (interest: string) => {
    const newInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter(i => i !== interest)
      : [...selectedInterests, interest];
    
    setSelectedInterests(newInterests);
    setValue('interests', newInterests);
  };

  const onSubmit = async (data: JoinForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Membership application submitted:', data);
    alert('Thank you for your application! We will review it and get back to you within 5 business days.');
    reset();
    setSelectedInterests([]);
    setIsSubmitting(false);
  };

  return (
    <div className="pt-16">
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
              Join Our <span className="gradient-text">Community</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Become part of a vibrant community of electronics and telecommunications engineering students. Connect, learn, and grow together!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why <span className="gradient-text">Join Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the benefits of being part of our technical community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <UserPlus className="h-6 w-6 text-primary" />
                  Membership Application
                </CardTitle>
                <CardDescription>
                  Fill out this form to apply for membership in the IETE Student Forum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Your first name"
                          {...register('firstName')}
                        />
                        {errors.firstName && (
                          <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Your last name"
                          {...register('lastName')}
                        />
                        {errors.lastName && (
                          <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@srmist.edu.in"
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+91 XXXXX XXXXX"
                          {...register('phone')}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input
                          id="studentId"
                          placeholder="Your student ID"
                          {...register('studentId')}
                        />
                        {errors.studentId && (
                          <p className="text-sm text-red-500 mt-1">{errors.studentId.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="year">Year of Study</Label>
                        <Select onValueChange={(value) => setValue('year', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">First Year</SelectItem>
                            <SelectItem value="2">Second Year</SelectItem>
                            <SelectItem value="3">Third Year</SelectItem>
                            <SelectItem value="4">Final Year</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.year && (
                          <p className="text-sm text-red-500 mt-1">{errors.year.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="branch">Branch</Label>
                        <Select onValueChange={(value) => setValue('branch', value)}>
                          <SelectTrigger>
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
                        {errors.branch && (
                          <p className="text-sm text-red-500 mt-1">{errors.branch.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Technical Interests */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Technical Interests</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select the areas you're most interested in (choose at least one):
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {techInterests.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={selectedInterests.includes(interest)}
                            onCheckedChange={() => handleInterestToggle(interest)}
                          />
                          <Label htmlFor={interest} className="text-sm cursor-pointer">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {errors.interests && (
                      <p className="text-sm text-red-500 mt-1">{errors.interests.message}</p>
                    )}
                  </div>

                  {/* Experience and Motivation */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Tell Us About Yourself</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="experience">Technical Experience</Label>
                        <Textarea
                          id="experience"
                          placeholder="Describe your technical background, projects, or relevant experience..."
                          rows={4}
                          {...register('experience')}
                        />
                        {errors.experience && (
                          <p className="text-sm text-red-500 mt-1">{errors.experience.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="motivation">Why do you want to join?</Label>
                        <Textarea
                          id="motivation"
                          placeholder="Tell us why you want to join IETE Student Forum and what you hope to achieve..."
                          rows={4}
                          {...register('motivation')}
                        />
                        {errors.motivation && (
                          <p className="text-sm text-red-500 mt-1">{errors.motivation.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Terms and Conditions</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-muted-foreground">
                        By joining the IETE Student Forum, you agree to:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        {...register('agreeToTerms')}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm cursor-pointer">
                        I agree to the terms and conditions
                      </Label>
                    </div>
                    {errors.agreeToTerms && (
                      <p className="text-sm text-red-500 mt-1">{errors.agreeToTerms.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-bg"
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

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of students who are already part of our thriving technical community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                500+ Active Members
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                50+ Events Annually
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                25+ Industry Partners
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}