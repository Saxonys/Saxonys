<template>
  <section id="projects" class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold text-center mb-16 relative inline-block">
      Projects
      <span class="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded transition-all duration-300 group-hover:w-full"></span>
    </h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <article 
        v-for="project in projects" 
        :key="project.title"
        class="bg-gradient-to-br from-card-bg/80 to-card-bg/70 backdrop-blur-lg border border-border-color rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group"
      >
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-text-primary text-xl font-bold">{{ project.title }}</h3>
            <div class="flex gap-2">
              <a 
                v-if="project.liveUrl"
                :href="project.liveUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-accent-primary hover:text-accent-secondary transition-colors duration-200"
                aria-label="Visit live project"
              >
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a 
                v-if="project.githubUrl"
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-accent-primary hover:text-accent-secondary transition-colors duration-200"
                aria-label="View on GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          <p class="text-text-secondary mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full text-sm font-medium border border-transparent hover:border-accent-primary transition-all duration-200 hover:transform hover:-translate-y-1"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'StormSS',
          description: 'Advanced security scanner that identifies malicious activity and provides detailed insights into its origin and execution.',
          technologies: ['C++', 'TypeScript', 'Forensics', 'Windows'],
          liveUrl: 'https://stormss.cc',
          githubUrl: 'https://github.com/Storm-Development-Group'
        },
        {
          title: 'Paragon',
          description: 'Cutting-edge anti-forensic solution designed to evade forensic analysis on Windows systems.',
          technologies: ['C++', 'Flask', 'Anti-Forensics', 'Windows'],
          liveUrl: 'https://paragonbp.xyz/'
        },
        {
          title: 'NoPhish',
          description: 'Artificial intelligence-powered phishing detection and passwordless authentication.',
          technologies: ['Artificial Intelligence', 'Deep Learning', 'Security']
        }
      ]
    }
  }
}
</script> 