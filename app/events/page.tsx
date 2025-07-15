'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const eventCategories = [
  { name: 'All', active: true },
  { name: 'Workshops', active: false },
  { name: 'Competitions', active: false },
  { name: 'Seminars', active: false },
  { name: 'Projects', active: false },
];

// Updated events data with past and upcoming events
const allEvents = [
  // Upcoming Events
  {
    id: 1,
    slug: 'iot-workshop-march-2024',
    title: 'IoT Workshop: Building Smart Solutions',
    description: 'Learn to build IoT applications using Arduino and Raspberry Pi with hands-on projects',
    date: '2024-03-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Electronics Lab, Block A',
    type: 'Workshop',
    capacity: 50,
    registered: 35,
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: true,
    isPast: false,
  },
  {
    id: 2,
    slug: 'circuit-design-competition',
    title: 'Circuit Design Competition 2024',
    description: 'Showcase your analog and digital circuit design skills in this exciting competition',
    date: '2024-03-22',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Auditorium',
    type: 'Competition',
    capacity: 100,
    registered: 78,
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: true,
    isPast: false,
  },
  {
    id: 3,
    slug: 'industry-expert-talk-5g',
    title: 'Industry Expert Talk: 5G Technology',
    description: 'Learn about the latest developments in 5G technology from industry experts',
    date: '2024-03-28',
    time: '2:00 PM - 4:00 PM',
    location: 'Conference Hall',
    type: 'Seminar',
    capacity: 200,
    registered: 150,
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: false,
    isPast: false,
  },
  {
    id: 4,
    slug: 'pcb-design-workshop',
    title: 'PCB Design Workshop',
    description: 'Master PCB design using industry-standard tools and techniques',
    date: '2024-04-05',
    time: '10:00 AM - 3:00 PM',
    location: 'Design Lab',
    type: 'Workshop',
    capacity: 30,
    registered: 25,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: false,
    isPast: false,
  },
  // Past Events
  {
    id: 5,
    slug: 'embedded-systems-bootcamp',
    title: 'Embedded Systems Bootcamp',
    description: 'Intensive 2-day bootcamp covering embedded systems development',
    date: '2023-11-12',
    time: '9:00 AM - 6:00 PM',
    location: 'Embedded Systems Lab',
    type: 'Workshop',
    capacity: 40,
    registered: 32,
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: false,
    isPast: true,
  },
  {
    id: 6,
    slug: 'robotics-competition',
    title: 'Robotics Competition 2023',
    description: 'Build and compete with your autonomous robots in various challenges',
    date: '2023-10-20',
    time: '10:00 AM - 6:00 PM',
    location: 'Sports Complex',
    type: 'Competition',
    capacity: 80,
    registered: 60,
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: true,
    isPast: true,
  },
  {
    id: 7,
    slug: 'ai-seminar-2023',
    title: 'AI Seminar: Future Trends',
    description: 'Exploring the future of artificial intelligence and machine learning',
    date: '2023-09-15',
    time: '2:00 PM - 5:00 PM',
    location: 'Tech Auditorium',
    type: 'Seminar',
    capacity: 150,
    registered: 120,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: false,
    isPast: true,
  },
];

function getTypeColor(type: string) {
  switch (type) {
    case 'Workshop':
      return 'bg-blue-100 text-blue-800';
    case 'Competition':
      return 'bg-red-100 text-red-800';
    case 'Seminar':
      return 'bg-green-100 text-green-800';
    case 'Project':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  // Filter events based on current date
  const upcomingEvents = allEvents.filter(event => !event.isPast);
  const pastEvents = allEvents.filter(event => event.isPast);

  // Filter events based on active category
  const filteredUpcomingEvents = activeCategory === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === activeCategory.slice(0, -1));

  const filteredPastEvents = activeCategory === 'All'
    ? pastEvents
    : pastEvents.filter(event => event.type === activeCategory.slice(0, -1));

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
              Explore <span className="gradient-text">Events</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Join us for exciting workshops, competitions, and seminars designed to enhance your technical skills and knowledge
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
             <button
  type="button"
  onClick={() => setActiveTab('upcoming')}
  className={`px-8 py-4 text-base font-semibold rounded-l-lg ${
    activeTab === 'upcoming' 
      ? 'bg-primary text-white' 
      : 'bg-white text-gray-900 hover:bg-gray-50'
  }`}
>
  Upcoming Events
</button>
<button
  type="button"
  onClick={() => setActiveTab('past')}
  className={`px-8 py-4 text-base font-semibold rounded-r-lg ${
    activeTab === 'past' 
      ? 'bg-primary text-white' 
      : 'bg-white text-gray-900 hover:bg-gray-50'
  }`}
>
  Past Events
</button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {eventCategories.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                size="sm"
                className={activeCategory === category.name ? "gradient-bg" : ""}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {activeTab === 'upcoming' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            
            {filteredUpcomingEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No upcoming events in this category. Check back later!</p>
              </div>
            ) : (
              <>
                {/* Featured Events */}
                <h3 className="text-xl font-semibold mb-6">Featured Events</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {filteredUpcomingEvents.filter(event => event.featured).map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>

                {/* All Upcoming Events */}
                <h3 className="text-xl font-semibold mb-6">All Upcoming Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredUpcomingEvents.filter(event => !event.featured).map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Past Events Section */}
      {activeTab === 'past' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Past <span className="gradient-text">Events</span>
            </h2>
            
            {filteredPastEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No past events in this category.</p>
              </div>
            ) : (
              <>
                {/* Featured Past Events */}
                <h3 className="text-xl font-semibold mb-6">Highlighted Past Events</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {filteredPastEvents.filter(event => event.featured).map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} isPast={true} />
                  ))}
                </div>

                {/* All Past Events */}
                <h3 className="text-xl font-semibold mb-6">All Past Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPastEvents.filter(event => !event.featured).map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} isPast={true} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

// Extracted EventCard component for reusability
function EventCard({ event, index, isPast = false }: { event: any, index: number, isPast?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge className={getTypeColor(event.type)}>
              {event.type}
            </Badge>
            {isPast && (
              <Badge className="bg-gray-100 text-gray-800 ml-2">
                Past Event
              </Badge>
            )}
          </div>
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {new Date(event.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
          </div>
          <CardTitle className="text-xl">{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4">{event.description}</CardDescription>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{event.registered}/{event.capacity} registered</span>
            </div>
          </div>
          <div className="mt-4">
            <Button asChild size="sm" className="w-full">
              <Link href={`/events/${event.slug}`}>
                {isPast ? 'View Recap' : 'Learn More'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}