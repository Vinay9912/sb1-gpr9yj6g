import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, PenTool as Tool, Cpu, Gauge, Cog, Wrench, GraduationCap, Award, BookOpen, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-slate-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80"
            alt="Engineering Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Alex Morgan</h1>
          <p className="text-xl md:text-2xl mb-8">Mechanical Engineer</p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Contact Me
            </a>
            <a href="#" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
              <Download size={20} /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a recent Mechanical Engineering graduate with a passion for innovative design and sustainable solutions. 
                My academic background has equipped me with strong analytical skills and practical knowledge in mechanical systems, 
                CAD design, and manufacturing processes. I'm eager to apply my technical expertise and fresh perspective to real-world engineering challenges.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-start gap-4">
              <div className="text-blue-700">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Engineering in Mechanical Engineering</h3>
                <p className="text-gray-600 mb-2">University of Engineering & Technology | 2019 - 2023</p>
                <p className="text-gray-600">GPA: 3.8/4.0</p>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                    <li>• Thermodynamics</li>
                    <li>• Fluid Mechanics</li>
                    <li>• Machine Design</li>
                    <li>• Manufacturing Processes</li>
                    <li>• CAD/CAM</li>
                    <li>• Materials Science</li>
                    <li>• Robotics</li>
                    <li>• Control Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="text-blue-700">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Certifications</h3>
                <ul className="mt-2 space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <BookOpen size={18} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Certified SolidWorks Associate (CSWA)</p>
                      <p className="text-sm">Dassault Systèmes | 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen size={18} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">AutoCAD Professional Certification</p>
                      <p className="text-sm">Autodesk | 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen size={18} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Fundamentals of CNC Machining</p>
                      <p className="text-sm">Tooling U-SME | 2023</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-blue-700 mb-4 flex justify-center">
                <Tool size={40} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Design & Modeling</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• SolidWorks</li>
                <li>• AutoCAD</li>
                <li>• CATIA</li>
                <li>• Fusion 360</li>
                <li>• 3D Printing</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-blue-700 mb-4 flex justify-center">
                <Gauge size={40} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• FEA (ANSYS)</li>
                <li>• CFD Basics</li>
                <li>• Thermal Analysis</li>
                <li>• MATLAB</li>
                <li>• Excel (Advanced)</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-blue-700 mb-4 flex justify-center">
                <Wrench size={40} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• CNC Programming</li>
                <li>• GD&T</li>
                <li>• Machining Basics</li>
                <li>• Quality Control</li>
                <li>• Lean Manufacturing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Solar-Powered Water Purification System',
                description: 'Designed and prototyped a small-scale water purification system powered by solar energy for remote areas with limited access to clean water and electricity.',
                image: 'https://images.unsplash.com/photo-1548612324-48e436c91322?auto=format&fit=crop&q=80'
              },
              {
                title: 'Automated Waste Sorting Machine',
                description: 'Developed a small-scale automated waste sorting system using sensors to categorize different types of recyclable materials.',
                image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80'
              },
              {
                title: 'Energy-Efficient HVAC Design',
                description: 'Created a comprehensive design for an energy-efficient HVAC system for a commercial building, focusing on sustainability and cost-effectiveness.',
                image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80'
              },
              {
                title: 'Lightweight Drone Frame',
                description: 'Engineered a lightweight yet durable drone frame using composite materials, optimized for extended flight time and payload capacity.',
                image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80'
              }
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="text-blue-700 hover:text-blue-800 flex items-center gap-2">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-start gap-4">
              <div className="text-blue-700">
                <Briefcase size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Mechanical Engineering Intern</h3>
                <p className="text-gray-600 mb-2">ABC Manufacturing | Summer 2022</p>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Assisted in CAD modeling of machine components using SolidWorks</li>
                  <li>• Participated in quality control processes and documentation</li>
                  <li>• Collaborated with the R&D team on improving existing product designs</li>
                  <li>• Conducted material testing and analysis under supervision</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="text-blue-700">
                <Cog size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Research Assistant</h3>
                <p className="text-gray-600 mb-2">University Engineering Department | 2022 - 2023</p>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Supported faculty research on renewable energy applications</li>
                  <li>• Conducted literature reviews and data analysis</li>
                  <li>• Assisted in laboratory experiments and prototype testing</li>
                  <li>• Contributed to research paper on sustainable engineering solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Mail size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="mailto:alex.morgan@example.com" className="hover:text-blue-300 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;