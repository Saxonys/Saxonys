<template>
  <section id="skills" class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold text-center mb-16 relative inline-block">
      Skills
      <span class="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded transition-all duration-300 group-hover:w-full"></span>
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <article 
        v-for="skill in skills" 
        :key="skill.name"
        class="bg-gradient-to-br from-card-bg/80 to-card-bg/70 backdrop-blur-lg border border-border-color rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
      >
        <div class="flex justify-between items-center mb-4">
          <span class="text-text-primary font-medium">{{ skill.name }}</span>
          <span class="text-text-secondary text-sm">{{ skill.level }}</span>
        </div>
        <div class="h-2 bg-border-color rounded-full overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full transition-all duration-1000 ease-out"
            :style="{ width: skill.percentage + '%' }"
            :class="{ 'animate-shimmer': skill.animate }"
          ></div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProgrammingLanguages',
  data() {
    return {
      skills: [
        {
          name: 'Application Development',
          level: 'Advanced',
          percentage: 90,
          animate: false,
          description: 'Applications in C/C++, C#, Python, and more.'
        },
        {
          name: 'Scripting',
          level: 'Advanced',
          percentage: 90,
          animate: false,
          description: 'Automation, scripting, malware analysis, and rapid prototyping.'
        },
        {
          name: 'C#',
          level: 'Intermediate',
          percentage: 70,
          animate: false,
          description: 'Application development, tooling, and game scripting.'
        },
        {
          name: 'Web Technologies',
          level: 'Intermediate',
          percentage: 75,
          animate: false,
          description: 'JavaScript, TypeScript, HTML, CSS, Vue, Astro. Fullstack web development and modern frontend frameworks.'
        }
      ]
    }
  },
  mounted() {
    // Animate skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillIndex = this.skills.findIndex(skill => 
            entry.target.textContent.includes(skill.name)
          );
          if (skillIndex !== -1) {
            this.skills[skillIndex].animate = true;
          }
        }
      });
    }, { threshold: 0.2 });

    // Observe all skill cards
    this.$nextTick(() => {
      const skillCards = document.querySelectorAll('#skills article');
      skillCards.forEach(card => observer.observe(card));
    });
  }
}
</script>

<style scoped>
.animate-shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style> 