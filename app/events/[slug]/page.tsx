import EventDetails from './EventDetails';

// Mock data - In a real app, this would come from an API or database
const eventData = {
  'iot-workshop-march-2024': {
    id: 1,
    title: 'IoT Workshop: Building Smart Solutions',
    description: 'Learn to build IoT applications using Arduino and Raspberry Pi with hands-on projects',
    fullDescription: 'This comprehensive IoT workshop will take you through the fundamentals of Internet of Things development. You\'ll learn to work with Arduino and Raspberry Pi platforms, understand sensor integration, and build real-world IoT applications. The workshop includes hands-on projects, industry best practices, and insights into the latest IoT trends.',
    date: '2024-03-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Electronics Lab, Block A',
    type: 'Workshop',
    capacity: 50,
    registered: 35,
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Dr. Rajesh Kumar',
    prerequisites: ['Basic electronics knowledge', 'Programming fundamentals'],
    agenda: [
      'Introduction to IoT ecosystem',
      'Arduino and Raspberry Pi setup',
      'Sensor integration and data collection',
      'Wireless communication protocols',
      'Building a complete IoT project',
      'Industry applications and case studies'
    ],
    materials: ['Arduino Uno kit', 'Raspberry Pi 4', 'Sensors and modules', 'Breadboards and jumper wires'],
  },
  'circuit-design-competition': {
    id: 2,
    title: 'Circuit Design Competition 2024',
    description: 'Showcase your analog and digital circuit design skills in this exciting competition',
    fullDescription: 'Join us for the annual Circuit Design Competition where students demonstrate their expertise in both analog and digital circuit design. This competition challenges participants to solve real-world engineering problems through innovative circuit solutions.',
    date: '2024-03-22',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Auditorium',
    type: 'Competition',
    capacity: 100,
    registered: 78,
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Competition Committee',
    prerequisites: ['Circuit analysis knowledge', 'Design software proficiency'],
    agenda: [
      'Registration and team formation',
      'Problem statement release',
      'Design phase (3 hours)',
      'Prototype building (2 hours)',
      'Presentation and judging',
      'Awards ceremony'
    ],
    materials: ['Design software access', 'Electronic components', 'PCB prototyping materials', 'Measurement instruments'],
  },
  'industry-expert-talk-5g': {
    id: 3,
    title: 'Industry Expert Talk: 5G Technology',
    description: 'Learn about the latest developments in 5G technology from industry experts',
    fullDescription: 'This seminar features industry experts discussing the latest developments in 5G technology, its applications, and impact on various sectors. Learn about the technical challenges, opportunities, and future prospects of 5G networks.',
    date: '2024-03-28',
    time: '2:00 PM - 4:00 PM',
    location: 'Conference Hall',
    type: 'Seminar',
    capacity: 200,
    registered: 150,
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Industry Experts Panel',
    prerequisites: ['Basic telecommunications knowledge'],
    agenda: [
      '5G technology overview',
      'Network architecture and protocols',
      'Applications in various industries',
      'Challenges and solutions',
      'Future roadmap',
      'Q&A session'
    ],
    materials: ['Presentation slides', 'Reference materials', 'Industry reports'],
  },
};

// This runs at build time to generate static paths
export async function generateStaticParams() {
  return Object.keys(eventData).map((slug) => ({
    slug: slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const event = eventData[params.slug as keyof typeof eventData];
  
  if (!event) {
    return <div>Event not found</div>;
  }

  return <EventDetails event={event} />;
}