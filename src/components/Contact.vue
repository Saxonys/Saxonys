<template>
  <section id="contact" class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold text-center mb-16 relative inline-block">
      Contact
      <span class="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded transition-all duration-300 group-hover:w-full"></span>
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <article 
        v-for="contact in contacts" 
        :key="contact.title"
        class="bg-gradient-to-br from-card-bg/80 to-card-bg/70 backdrop-blur-lg border border-border-color rounded-xl p-6 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative"
      >
        <button 
          @click="copyToClipboard(contact.value)"
          class="absolute top-4 right-4 bg-card-bg border border-border-color rounded p-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent-primary"
          :aria-label="`Copy ${contact.title}`"
        >
          <i class="fas fa-copy text-text-primary"></i>
        </button>
        
        <i :class="contact.icon + ' text-3xl text-accent-primary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-accent-secondary'"></i>
        <h3 class="text-text-primary text-xl font-bold mb-2">{{ contact.title }}</h3>
        <a 
          :href="contact.href" 
          :target="contact.external ? '_blank' : undefined"
          :rel="contact.external ? 'noopener noreferrer' : undefined"
          class="text-text-secondary font-medium hover:text-accent-primary transition-colors duration-200"
        >
          {{ contact.value }}
        </a>
      </article>
    </div>

    <div v-if="visitorName" class="text-center mt-8">
      <p class="text-text-secondary">
        Welcome back, <span class="text-accent-primary font-medium">{{ visitorName }}</span>! 👋
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contacts: [
        {
          title: 'Email',
          value: 'saxony@stormss.cc',
          href: 'mailto:saxony@stormss.cc',
          icon: 'fas fa-envelope',
          external: false
        },
        {
          title: 'LinkedIn',
          value: 'N/A',
          href: '',
          icon: 'fab fa-linkedin',
          external: true
        },
        {
          title: 'GitHub',
          value: 'github.com/Saxonys',
          href: 'https://github.com/Saxonys',
          icon: 'fab fa-github',
          external: true
        }
      ],
      visitorName: null
    }
  },
  mounted() {
    this.setCookie('greeting', 'hi there', 30); // Set the cookie
  },
  methods: {
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {

      }
    },
    
    setCookie(name, value, days) {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }
  }
}
</script>

<style scoped>
/* Scoped styles for the Contact component */
</style> 