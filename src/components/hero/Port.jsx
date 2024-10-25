'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Menu, X, GitHub, Linkedin, Mail, ChevronRight, ArrowRight, Code, Briefcase, User, Monitor, Server, Database, Cloud } from 'lucide-react'

const projects = [
  { 
    id: 1, 
    title: 'E-commerce Platform', 
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    image: '/placeholder.svg?height=200&width=300&text=E-commerce'
  },
  { 
    id: 2, 
    title: 'AI-Powered Analytics Dashboard', 
    description: 'An analytics dashboard using machine learning for predictive insights.',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    image: '/placeholder.svg?height=200&width=300&text=Analytics'
  },
  { 
    id: 3, 
    title: 'Blockchain Voting System', 
    description: 'A secure, transparent voting system built on blockchain technology.',
    tags: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
    image: '/placeholder.svg?height=200&width=300&text=Blockchain'
  },
]

const skills = [
  { category: 'Frontend', icon: Monitor, items: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'TypeScript'], color: 'bg-blue-500' },
  { category: 'Backend', icon: Server, items: ['Node.js', 'Python', 'Java', 'GraphQL', 'RESTful APIs'], color: 'bg-green-500' },
  { category: 'Database', icon: Database, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'], color: 'bg-yellow-500' },
  { category: 'DevOps', icon: Cloud, items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'], color: 'bg-purple-500' },
]

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            John Doe
          </motion.a>
          <div className="hidden md:flex space-x-4">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-800"
            >
              <ScrollArea className="h-[calc(100vh-4rem)]">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="block py-2 px-4 text-sm hover:bg-gray-800 text-gray-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Experiences</span>
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Full Stack Developer specializing in creating innovative and efficient web solutions.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <a href="#projects">View My Work <Briefcase className="ml-2 h-5 w-5" /></a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white" asChild>
                    <a href="#contact">Get in Touch <Mail className="ml-2 h-5 w-5" /></a>
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img src="/placeholder.svg?height=400&width=400" alt="John Doe" className="rounded-full w-64 h-64 mx-auto md:w-96 md:h-96 object-cover shadow-2xl border-4 border-blue-400" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-12">
              <motion.div 
                className="md:w-1/3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img src="/placeholder.svg?height=400&width=400" alt="John Doe" className="rounded-lg w-full h-auto shadow-xl" />
              </motion.div>
              <motion.div 
                className="md:w-2/3"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 leading-relaxed mb-4">
                  With over a decade of experience in software development, I specialize in building scalable, efficient, and user-friendly applications. My expertise spans the entire development lifecycle, from conceptualization to deployment and maintenance.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm passionate about leveraging cutting-edge technologies to solve complex problems and create innovative solutions that drive business growth and enhance user experiences.
                </p>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white" asChild>
                  <a href="#" download>Download CV <ChevronRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-400">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">View Project</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Skills & Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillSet, index) => (
                <motion.div 
                  key={skillSet.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="bg-gray-900 border-gray-700 overflow-hidden h-full">
                    <CardHeader className={`${skillSet.color} bg-opacity-20`}>
                      <CardTitle className="text-xl flex items-center space-x-2">
                        <skillSet.icon className="h-6 w-6" />
                        <span>{skillSet.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2">
                        {skillSet.items.map((skill) => (
                          <li key={skill} className="flex items-center space-x-2">
                            <span className={`h-2 w-2 rounded-full ${skillSet.color}`}></span>
                            <span>{skill}</span>
                          </li>
                        
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">Get in Touch</CardTitle>
                  <CardDescription className="text-gray-400">Have a project in mind or just want to say hello? I'd love to hear from you!</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">Name</Label>
                        <Input id="name" placeholder="John Doe" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">Message</Label>
                      <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">John Doe</h3>
              <p className="text-sm text-gray-400">Full Stack Developer & Tech Enthusiast</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: john@example.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Location: New York, NY</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Follow Me</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400" asChild>
                  <a href="#" aria-label="GitHub">
                    <GitHub className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400" asChild>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400" asChild>
                  <a href="#" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              Designed and built with <span className="text-red-500">♥</span> by John Doe
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}