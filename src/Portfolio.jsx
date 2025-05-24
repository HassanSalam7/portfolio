import React, { useState } from 'react';
import { ExternalLink, Eye, Code, Github, Mail, Linkedin } from 'lucide-react';

// بيانات المشاريع - يمكنك تعديلها حسب مشاريعك
const projects = [
  {
    id: 1,
    title: "Career Craft",
    description: " منصة إلكترونية متكاملة للتوظيف والتدريب مدعومة بالذكاء الاصطناعي",
    technologies: ["React.js", "Python", "APIs", "Local LLM"],
    thumbnail: "../src/assets/Career Craft/1.jpg", // صورة الواجهة الرئيسية
    images: [
      "../src/assets/Career Craft/1.jpg",
      "../src/assets/Career Craft/2.jpg",
      "../src/assets/Career Craft/3.jpg",
      "../src/assets/Career Craft/4.jpg",
      "../src/assets/Career Craft/5.jpg"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/HassanSalam7",
    longDescription: " منصة إلكترونية متكاملة للتوظيف والتدريب مدعومة بالذكاء الاصطناعي"
  },
  {
    id: 2,
    title: "Face Constellation App",
    description: "موقع ترفيهي يقوم بتحويل نجوم الوجوه إلى أشكال كونية",
    technologies: ["React.js"],
    thumbnail: "../src/assets/Face/1.jpg", // صورة الواجهة الرئيسية
    images: [
      "../src/assets/Face/1.jpg",
      "../src/assets/Face/2.jpg",
      "../src/assets/Face/3.jpg",
      "../src/assets/Face/4.jpg",
      "../src/assets/Face/5.jpg",
      "../src/assets/Face/6.jpg"
    ],
    liveUrl: "https://hassansalam7.github.io/face-constellation",
    githubUrl: "https://github.com/HassanSalam7",
    longDescription:"موقع ترفيهي يقوم بتحويل نجوم الوجوه إلى أشكال كونية"
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "موقع بسيط يقوم بتحويل النص الى صور باستخدام تقنيات الذكاء الاصطناعي",
    technologies: ["React.js", "Hugging Face API"],
    thumbnail: "../src/assets/AI image gene/1.jpg", // صورة الواجهة الرئيسية
    images: [
      "../src/assets/AI image gene/1.jpg"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/HassanSalam7",
    longDescription: "موقع بسيط يقوم بتحويل النص الى صور باستخدام تقنيات الذكاء الاصطناعي"
  },
  {
    id: 4,
    title: "Student Attendance System",
    description: "نظام متكامل لحضور الطلاب مدعوم بخاصية تسجيل الصوت",
    technologies: ["Vanilla.js", "Whisper OpenAI Model", "Python"],
    thumbnail: "../src/assets/Attendence/1.png", // صورة الواجهة الرئيسية
    images: [
      "../src/assets/Attendence/1.png",
      "../src/assets/Attendence/2.png",
      "../src/assets/Attendence/3.png",
      "../src/assets/Attendence/5.png",
      "../src/assets/Attendence/6.png",
      "../src/assets/Attendence/7.png",
      "../src/assets/Attendence/8.png",
      "../src/assets/Attendence/9.png",
      "../src/assets/Attendence/10.png"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/HassanSalam7",
    longDescription: "نظام متكامل لحضور الطلاب مدعوم بخاصية تسجيل الصوت"
  },
  {
    id: 5,
    title: "Auto Care",
    description: "واجهة موقع لمنصة خاصة بالعناية بالسيارات",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    thumbnail: "../src/assets/car/1.jpg", // صورة الواجهة الرئيسية
    images: [
      "../src/assets/car/1.jpg",
      "../src/assets/car/2.jpg",
      "../src/assets/car/3.jpg"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/HassanSalam7",
    longDescription: "واجهة موقع لمنصة خاصة بالعناية بالسيارات"
  },
    {
    id: 5,
    title: "Graduation Project Management System",
    description: "نظام ارشفة مشاريع التخرج للطلاب ",
    technologies: ["Flutter", "Dart", "SQLite"],
    thumbnail: "../src/assets/GPMS/1.jpg", // صورة الواجهة الرئيسية
    images: [
      "../src/assets/GPMS/1.jpg",
      "../src/assets/GPMS/2.jpg",
      "../src/assets/GPMS/3.jpg",
      "../src/assets/GPMS/4.jpg",
      "../src/assets/GPMS/5.jpg"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/HassanSalam7",
    longDescription: "نظام ارشفة مشاريع التخرج للطلاب "
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">معرض المشاريع</h1>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://github.com/HassanSalam7" className="text-white hover:text-blue-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hassan-salam-788138233/" className="text-white hover:text-blue-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:aldoonhasan7@gmail.com" className="text-white hover:text-blue-300 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-6">
            مرحباً، أنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">مطور ويب</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            أقوم بتطوير تطبيقات ومواقع ويب حديثة باستخدام أحدث التقنيات
            والعمل على تقنيات مختلفه بمساعدة الذكاء الاصطناعي
          </p>
          <div className="flex justify-center space-x-4 space-x-reverse">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              عرض المشاريع
            </button>
            <a 
              href="https://web.telegram.org/a/"
              className="border-2 border-blue-400 text-blue-300 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              تواصل معي
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white text-center mb-16">مشاريعي</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjNGIzOGRmIi8+CjxwYXRoIGQ9Ik0yMjUgMTI1SDE3NVYxNzVIMjI1VjEyNVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNMzI1IDEyNUgyNzVWMTc1SDMyNVYxMjVaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZD0iTTI3NSAxNzVIMjI1VjIyNUgyNzVWMTc1WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij7HhNiz2YPYrNuONzwvdGV4dD4KPC9zdmc+';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 space-x-reverse">
                    <button
                      onClick={() => openProjectDetails(project)}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                    >
                      <Eye size={16} />
                      <span>عرض التفاصيل</span>
                    </button>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                      >
                        <ExternalLink size={16} />
                        <span>زيارة الموقع</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© Hassan Salam Makki</p>
        </div>
      </footer>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Image Gallery */}
              <div className="mb-6">
                <div className="relative h-64 md:h-80 bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - صورة ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain bg-gray-900"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0zNjAgMjUwSDMxMFYzMDBIMzYwVjI1MFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNNDkwIDI1MEg0NDBWM0gwSDQ5MFYyNTBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZD0iTTQ0MCAzMDBIMzYwVjM1MEg0NDBWM0gwWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4Ij7Fg9mD2Ibg2KfZhNmA2LPZlNn42KfZhNzZnR+</dGV4dD4KPC9zdmc+';
                    }}
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        →
                      </button>
                    </>
                  )}
                </div>
                
                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center space-x-2 space-x-reverse">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">وصف المشروع</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">التقنيات المستخدمة</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 space-x-reverse">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <ExternalLink size={20} />
                    <span>زيارة الموقع المباشر</span>
                  </a>
                )}
                
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Github size={20} />
                  <span>عرض الكود المصدري</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;