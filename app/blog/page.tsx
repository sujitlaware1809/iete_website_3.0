'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const blogCategories = [
  { name: 'All', count: 12, active: true },
  { name: 'Technology', count: 8, active: false },
  { name: 'Projects', count: 6, active: false },
  { name: 'Tutorials', count: 4, active: false },
  { name: 'News', count: 3, active: false },
];

const blogPosts = [
  {
    id: 1,
    slug: 'future-of-5g-technology',
    title: 'The Future of 5G Technology: What Students Need to Know',
    excerpt: 'Exploring the latest developments in 5G technology and its impact on telecommunications engineering.',
    content: 'As we stand at the threshold of a new era in telecommunications, 5G technology promises to revolutionize how we communicate, work, and interact with technology...',
    author: 'Dr. Rajesh Kumar',
    date: '2024-03-10',
    category: 'Technology',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: true,
  },
  {
    id: 2,
    slug: 'iot-project-smart-home',
    title: 'Building a Smart Home IoT System: A Complete Guide',
    excerpt: 'Learn how to create a comprehensive IoT-based smart home system using Arduino and Raspberry Pi.',
    content: 'Internet of Things (IoT) has become one of the most exciting fields in electronics engineering. In this comprehensive guide, we will walk through building a complete smart home system...',
    author: 'Priya Patel',
    date: '2024-03-08',
    category: 'Projects',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: true,
  },
  {
    id: 3,
    slug: 'pcb-design-best-practices',
    title: 'PCB Design Best Practices for Electronics Engineers',
    excerpt: 'Essential guidelines and techniques for designing professional-grade printed circuit boards.',
    content: 'Printed Circuit Board (PCB) design is a critical skill for electronics engineers. This article covers the fundamental principles and best practices that every engineer should know...',
    author: 'Vikram Singh',
    date: '2024-03-05',
    category: 'Tutorials',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: false,
  },
  {
    id: 4,
    slug: 'embedded-systems-career-guide',
    title: 'Career Opportunities in Embedded Systems Engineering',
    excerpt: 'A comprehensive guide to career paths and opportunities in the embedded systems field.',
    content: 'Embedded systems engineering offers diverse career opportunities in various industries. This guide explores different career paths and the skills required to succeed...',
    author: 'Anitha Krishnan',
    date: '2024-03-03',
    category: 'News',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: false,
  },
  {
    id: 5,
    slug: 'signal-processing-fundamentals',
    title: 'Digital Signal Processing: Fundamentals and Applications',
    excerpt: 'Understanding the core concepts of digital signal processing and its practical applications.',
    content: 'Digital Signal Processing (DSP) is a fundamental aspect of modern electronics and telecommunications. This article provides an introduction to DSP concepts and applications...',
    author: 'Meera Jain',
    date: '2024-02-28',
    category: 'Technology',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: false,
  },
  {
    id: 6,
    slug: 'power-electronics-renewable-energy',
    title: 'Power Electronics in Renewable Energy Systems',
    excerpt: 'Exploring the role of power electronics in modern renewable energy applications.',
    content: 'Power electronics plays a crucial role in renewable energy systems. This article examines how power electronic devices and systems enable efficient energy conversion...',
    author: 'Karthik Raj',
    date: '2024-02-25',
    category: 'Technology',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: true,
  },
];

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

export default function Blog() {
  return (
    <div className="pt-14">
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
              Technical <span className="gradient-text">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Insights, tutorials, and updates from the world of electronics and telecommunications engineering
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  size="sm"
                  className={category.active ? "gradient-bg" : ""}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured <span className="gradient-text">Articles</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
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
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            All <span className="gradient-text">Articles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
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
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}