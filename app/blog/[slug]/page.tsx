'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Share2, Clock, ThumbsUp, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data - In a real app, this would come from an API or database
const blogData = {
  'future-of-5g-technology': {
    id: 1,
    title: 'The Future of 5G Technology: What Students Need to Know',
    excerpt: 'Exploring the latest developments in 5G technology and its impact on telecommunications engineering.',
    content: `
      <p>As we stand at the threshold of a new era in telecommunications, 5G technology promises to revolutionize how we communicate, work, and interact with technology. For electronics and telecommunications engineering students, understanding 5G is not just about keeping up with trends—it's about preparing for a future where this technology will be fundamental to virtually every digital interaction.</p>

      <h2>What Makes 5G Different?</h2>
      <p>5G represents a quantum leap from previous generations of mobile technology. Unlike 4G, which primarily focused on improving internet speed, 5G is designed to enable an entire ecosystem of connected devices and applications. The key differentiators include:</p>
      
      <ul>
        <li><strong>Ultra-low latency:</strong> Response times as low as 1 millisecond</li>
        <li><strong>Massive connectivity:</strong> Supporting up to 1 million devices per square kilometer</li>
        <li><strong>Enhanced mobile broadband:</strong> Speeds up to 100 times faster than 4G</li>
        <li><strong>Network slicing:</strong> Creating virtual networks for specific applications</li>
      </ul>

      <h2>Technical Architecture</h2>
      <p>The 5G architecture represents a fundamental shift from traditional cellular networks. It incorporates:</p>
      
      <h3>New Radio (NR) Technology</h3>
      <p>5G New Radio operates across multiple frequency bands, from sub-6 GHz to millimeter wave (mmWave) frequencies. This diversity allows for different use cases and deployment scenarios.</p>
      
      <h3>Cloud-Native Core</h3>
      <p>The 5G core network is built on cloud-native principles, enabling greater flexibility, scalability, and efficiency compared to traditional hardware-centric approaches.</p>

      <h2>Applications and Use Cases</h2>
      <p>The applications of 5G extend far beyond faster smartphones. Key areas include:</p>
      
      <h3>Internet of Things (IoT)</h3>
      <p>5G enables massive IoT deployments with its ability to connect millions of devices simultaneously while maintaining low power consumption for battery-operated sensors.</p>
      
      <h3>Autonomous Vehicles</h3>
      <p>The ultra-low latency of 5G is crucial for vehicle-to-everything (V2X) communication, enabling real-time decision-making for autonomous driving systems.</p>
      
      <h3>Industrial Automation</h3>
      <p>Private 5G networks are transforming manufacturing with precise control of robotic systems and real-time monitoring of production processes.</p>

      <h2>Challenges and Considerations</h2>
      <p>Despite its promise, 5G deployment faces several challenges:</p>
      
      <ul>
        <li><strong>Infrastructure requirements:</strong> Massive investment in new base stations and fiber backhaul</li>
        <li><strong>Security concerns:</strong> Expanded attack surface requiring new security paradigms</li>
        <li><strong>Regulatory compliance:</strong> Complex spectrum allocation and international coordination</li>
        <li><strong>Energy consumption:</strong> Balancing performance with sustainability goals</li>
      </ul>

      <h2>Career Opportunities</h2>
      <p>For engineering students, 5G opens numerous career paths:</p>
      
      <ul>
        <li><strong>Network Engineering:</strong> Design and optimization of 5G networks</li>
        <li><strong>RF Engineering:</strong> Antenna design and propagation modeling</li>
        <li><strong>Software Development:</strong> Applications leveraging 5G capabilities</li>
        <li><strong>Security Engineering:</strong> Protecting 5G infrastructure and services</li>
      </ul>

      <h2>Preparing for the Future</h2>
      <p>To succeed in the 5G era, students should focus on:</p>
      
      <ul>
        <li>Understanding software-defined networking (SDN) and network function virtualization (NFV)</li>
        <li>Learning cloud computing and containerization technologies</li>
        <li>Gaining experience with AI and machine learning for network optimization</li>
        <li>Studying cybersecurity principles for telecommunications</li>
        <li>Participating in 5G research projects and internships</li>
      </ul>

      <h2>Conclusion</h2>
      <p>5G technology represents more than just an incremental improvement—it's a foundational technology that will enable the next generation of digital innovation. For electronics and telecommunications engineering students, now is the time to dive deep into 5G concepts, gain hands-on experience, and prepare for a career at the forefront of this technological revolution.</p>
      
      <p>The future belongs to those who understand not just how to use 5G, but how to build, secure, and optimize it. Start your journey today by exploring the technical specifications, participating in related projects, and staying current with industry developments.</p>
    `,
    author: 'Dr. Rajesh Kumar',
    date: '2024-03-10',
    category: 'Technology',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['5G', 'Telecommunications', 'Technology', 'Engineering'],
    likes: 45,
    comments: 12,
  },
  'iot-project-smart-home': {
    id: 2,
    title: 'Building a Smart Home IoT System: A Complete Guide',
    excerpt: 'Learn how to create a comprehensive IoT-based smart home system using Arduino and Raspberry Pi.',
    content: `
      <p>Internet of Things (IoT) has become one of the most exciting fields in electronics engineering. In this comprehensive guide, we will walk through building a complete smart home system that demonstrates the power of connected devices working together seamlessly.</p>

      <h2>Project Overview</h2>
      <p>Our smart home system will include:</p>
      
      <ul>
        <li>Automated lighting control</li>
        <li>Temperature and humidity monitoring</li>
        <li>Security system with motion detection</li>
        <li>Remote control via mobile app</li>
        <li>Data logging and analytics</li>
      </ul>

      <h2>Components Required</h2>
      <p>For this project, you will need:</p>
      
      <h3>Microcontrollers</h3>
      <ul>
        <li>Arduino Uno (for sensor nodes)</li>
        <li>Raspberry Pi 4 (central hub)</li>
        <li>ESP8266 WiFi modules</li>
      </ul>
      
      <h3>Sensors and Actuators</h3>
      <ul>
        <li>DHT22 temperature and humidity sensors</li>
        <li>PIR motion sensors</li>
        <li>Light-dependent resistors (LDR)</li>
        <li>Servo motors for automated blinds</li>
        <li>Relay modules for device control</li>
      </ul>

      <h2>System Architecture</h2>
      <p>Our smart home system follows a hub-and-spoke architecture:</p>
      
      <h3>Central Hub (Raspberry Pi)</h3>
      <p>The Raspberry Pi serves as the central controller, running:</p>
      <ul>
        <li>MQTT broker for device communication</li>
        <li>Web server for user interface</li>
        <li>Database for data storage</li>
        <li>Automation logic</li>
      </ul>
      
      <h3>Sensor Nodes (Arduino)</h3>
      <p>Multiple Arduino-based nodes collect data and control devices:</p>
      <ul>
        <li>Living room node: lighting and temperature</li>
        <li>Security node: motion detection and alerts</li>
        <li>Kitchen node: appliance control</li>
      </ul>

      <h2>Implementation Steps</h2>
      
      <h3>Step 1: Setting Up the Central Hub</h3>
      <p>Install Raspberry Pi OS and configure the following services:</p>
      
      <pre><code>
# Install MQTT broker
sudo apt-get install mosquitto mosquitto-clients

# Install Node.js for web server
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install database
sudo apt-get install sqlite3
      </code></pre>
      
      <h3>Step 2: Programming Sensor Nodes</h3>
      <p>Each Arduino node runs code to collect sensor data and publish to MQTT:</p>
      
      <pre><code>
#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

const char* ssid = "your_wifi_ssid";
const char* password = "your_wifi_password";
const char* mqtt_server = "192.168.1.100";

WiFiClient espClient;
PubSubClient client(espClient);
DHT dht(2, DHT22);

void setup() {
  Serial.begin(115200);
  dht.begin();
  setup_wifi();
  client.setServer(mqtt_server, 1883);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  client.publish("home/living_room/temperature", String(temperature).c_str());
  client.publish("home/living_room/humidity", String(humidity).c_str());
  
  delay(30000); // Send data every 30 seconds
}
      </code></pre>

      <h3>Step 3: Creating the Web Interface</h3>
      <p>Develop a responsive web interface using HTML5, CSS3, and JavaScript:</p>
      
      <ul>
        <li>Real-time dashboard showing sensor data</li>
        <li>Device control panels</li>
        <li>Automation rule configuration</li>
        <li>Historical data visualization</li>
      </ul>

      <h2>Advanced Features</h2>
      
      <h3>Machine Learning Integration</h3>
      <p>Implement predictive analytics for:</p>
      <ul>
        <li>Energy consumption optimization</li>
        <li>Occupancy pattern recognition</li>
        <li>Predictive maintenance alerts</li>
      </ul>
      
      <h3>Voice Control</h3>
      <p>Integrate with voice assistants for natural language control:</p>
      <ul>
        <li>Amazon Alexa integration</li>
        <li>Google Assistant compatibility</li>
        <li>Custom voice commands</li>
      </ul>

      <h2>Security Considerations</h2>
      <p>Implement robust security measures:</p>
      
      <ul>
        <li>Encrypted communication protocols</li>
        <li>Regular security updates</li>
        <li>Network segmentation</li>
        <li>Access control and authentication</li>
      </ul>

      <h2>Testing and Deployment</h2>
      <p>Follow these steps for successful deployment:</p>
      
      <ol>
        <li>Unit testing of individual components</li>
        <li>Integration testing of the complete system</li>
        <li>Performance optimization</li>
        <li>User acceptance testing</li>
        <li>Production deployment and monitoring</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Building a smart home IoT system provides hands-on experience with modern electronics engineering concepts. This project demonstrates how multiple technologies work together to create intelligent, responsive systems that improve daily life.</p>
      
      <p>The skills learned in this project—sensor integration, wireless communication, data processing, and user interface design—are directly applicable to industrial IoT applications and emerging technologies like smart cities and Industry 4.0.</p>
    `,
    author: 'Priya Patel',
    date: '2024-03-08',
    category: 'Projects',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['IoT', 'Arduino', 'Raspberry Pi', 'Smart Home', 'Projects'],
    likes: 67,
    comments: 23,
  },
  'pcb-design-best-practices': {
    id: 3,
    title: 'PCB Design Best Practices for Electronics Engineers',
    excerpt: 'Essential guidelines and techniques for designing professional-grade printed circuit boards.',
    content: `
      <p>Printed Circuit Board (PCB) design is a critical skill for electronics engineers. This article covers the fundamental principles and best practices that every engineer should know to create reliable, manufacturable, and cost-effective PCBs.</p>

      <h2>Design Fundamentals</h2>
      
      <h3>Layer Stack-up Planning</h3>
      <p>The foundation of good PCB design starts with proper layer stack-up planning:</p>
      
      <ul>
        <li><strong>Signal layers:</strong> Dedicated layers for high-speed signals</li>
        <li><strong>Power planes:</strong> Solid copper planes for power distribution</li>
        <li><strong>Ground planes:</strong> Continuous ground reference</li>
        <li><strong>Mixed layers:</strong> Combining signals and power when necessary</li>
      </ul>
      
      <h3>Component Placement Strategy</h3>
      <p>Strategic component placement is crucial for optimal performance:</p>
      
      <ul>
        <li>Group related components together</li>
        <li>Consider thermal management</li>
        <li>Minimize signal path lengths</li>
        <li>Plan for mechanical constraints</li>
      </ul>

      <h2>Signal Integrity Considerations</h2>
      
      <h3>Trace Routing Guidelines</h3>
      <p>Proper trace routing ensures signal integrity:</p>
      
      <ul>
        <li>Maintain consistent trace impedance</li>
        <li>Avoid right-angle bends</li>
        <li>Use appropriate via strategies</li>
        <li>Implement proper spacing rules</li>
      </ul>
      
      <h3>High-Speed Design Techniques</h3>
      <p>For high-speed circuits, additional considerations apply:</p>
      
      <ul>
        <li>Controlled impedance routing</li>
        <li>Differential pair design</li>
        <li>Length matching for critical signals</li>
        <li>Proper termination strategies</li>
      </ul>

      <h2>Power Distribution Networks</h2>
      
      <h3>Power Plane Design</h3>
      <p>Effective power distribution requires careful planning:</p>
      
      <ul>
        <li>Minimize power plane impedance</li>
        <li>Use multiple power planes for different voltages</li>
        <li>Implement proper decoupling strategies</li>
        <li>Consider current density limitations</li>
      </ul>
      
      <h3>Decoupling Capacitor Placement</h3>
      <p>Strategic decoupling is essential for clean power delivery:</p>
      
      <ul>
        <li>Place capacitors close to IC power pins</li>
        <li>Use multiple capacitor values</li>
        <li>Consider parasitic inductance</li>
        <li>Implement proper grounding</li>
      </ul>

      <h2>EMI/EMC Considerations</h2>
      
      <h3>Minimizing Electromagnetic Interference</h3>
      <p>Design techniques to reduce EMI:</p>
      
      <ul>
        <li>Use ground planes effectively</li>
        <li>Implement proper shielding</li>
        <li>Control clock signal routing</li>
        <li>Use differential signaling</li>
      </ul>
      
      <h3>Compliance Testing Preparation</h3>
      <p>Design for EMC compliance from the start:</p>
      
      <ul>
        <li>Follow regulatory guidelines</li>
        <li>Design for specific test requirements</li>
        <li>Plan for shielding and filtering</li>
        <li>Consider cable and connector placement</li>
      </ul>

      <h2>Thermal Management</h2>
      
      <h3>Heat Dissipation Strategies</h3>
      <p>Effective thermal management prevents component failure:</p>
      
      <ul>
        <li>Use thermal vias for heat transfer</li>
        <li>Implement copper pour for heat spreading</li>
        <li>Consider component derating</li>
        <li>Plan for external heat sinking</li>
      </ul>
      
      <h3>Thermal Simulation</h3>
      <p>Use simulation tools to validate thermal design:</p>
      
      <ul>
        <li>Model heat sources accurately</li>
        <li>Simulate different operating conditions</li>
        <li>Validate cooling strategies</li>
        <li>Iterate design based on results</li>
      </ul>

      <h2>Manufacturing Considerations</h2>
      
      <h3>Design for Manufacturing (DFM)</h3>
      <p>Ensure your design can be manufactured reliably:</p>
      
      <ul>
        <li>Follow fabrication house capabilities</li>
        <li>Use standard drill sizes</li>
        <li>Maintain minimum feature sizes</li>
        <li>Consider panelization requirements</li>
      </ul>
      
      <h3>Assembly Guidelines</h3>
      <p>Design for efficient assembly:</p>
      
      <ul>
        <li>Use consistent component orientations</li>
        <li>Provide adequate spacing</li>
        <li>Include fiducial markers</li>
        <li>Consider test point placement</li>
      </ul>

      <h2>Testing and Validation</h2>
      
      <h3>Design Rule Checking (DRC)</h3>
      <p>Implement comprehensive design rule checking:</p>
      
      <ul>
        <li>Electrical rule checking</li>
        <li>Physical constraint validation</li>
        <li>Manufacturing rule compliance</li>
        <li>Signal integrity verification</li>
      </ul>
      
      <h3>Prototyping and Testing</h3>
      <p>Validate your design through proper testing:</p>
      
      <ul>
        <li>Functional testing procedures</li>
        <li>Signal integrity measurements</li>
        <li>Thermal testing</li>
        <li>EMC pre-compliance testing</li>
      </ul>

      <h2>Tools and Software</h2>
      
      <h3>Professional CAD Tools</h3>
      <p>Industry-standard PCB design software:</p>
      
      <ul>
        <li>Altium Designer</li>
        <li>Cadence Allegro</li>
        <li>Mentor Graphics PADS</li>
        <li>KiCad (open source)</li>
      </ul>
      
      <h3>Simulation Tools</h3>
      <p>Specialized tools for analysis:</p>
      
      <ul>
        <li>Signal integrity simulators</li>
        <li>Thermal analysis software</li>
        <li>EMC simulation tools</li>
        <li>Power integrity analyzers</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Mastering PCB design requires understanding both theoretical principles and practical constraints. By following these best practices, engineers can create robust, manufacturable designs that meet performance requirements while minimizing cost and time-to-market.</p>
      
      <p>Remember that PCB design is an iterative process. Each project provides learning opportunities that contribute to your expertise. Stay updated with industry trends, new technologies, and evolving best practices to maintain your competitive edge in electronics engineering.</p>
    `,
    author: 'Vikram Singh',
    date: '2024-03-05',
    category: 'Tutorials',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['PCB Design', 'Electronics', 'Engineering', 'Tutorial'],
    likes: 34,
    comments: 8,
  },
};

function getCategoryColor(category: string) {
  switch (category) {
    case 'Technology':
      return 'bg-blue-100 text-blue-800';
    case 'Projects':
      return 'bg-green-100 text-green-800';
    case 'Tutorials':
      return 'bg-purple-100 text-purple-800';
    case 'News':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogData[params.slug as keyof typeof blogData];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button asChild variant="outline" size="sm">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Badge className={getCategoryColor(post.category)}>
                {post.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-sm text-muted-foreground">Author</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tags and Actions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card>
              <CardContent className="py-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="mr-2 h-4 w-4" />
                      Like ({post.likes})
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Comment ({post.comments})
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}