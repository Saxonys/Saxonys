<template>
  <section id="blogs" class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold text-center mb-16 relative inline-block">
      Blogs
      <span class="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded transition-all duration-300 group-hover:w-full"></span>
    </h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <article 
        v-for="blog in blogs" 
        :key="blog.title"
        class="bg-gradient-to-br from-card-bg/80 to-card-bg/70 backdrop-blur-lg border border-border-color rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group"
      >
        <div class="p-6">
          <h3 class="text-text-primary text-xl font-bold mb-4">{{ blog.title }}</h3>
          <p class="text-text-secondary">{{ blog.description }}</p>
          <button
            class="mt-4 inline-block px-4 py-2 bg-accent-primary text-white rounded-full font-medium transition-colors duration-200 hover:bg-accent-secondary focus:outline-none"
            type="button"
            aria-label="Read more about blog"
          >
            Read More
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blogs',
  data() {
    return {
      blogs: [
        {
          title: 'Blog #1',
          description: 'Just a blog example'
        },
        {
          title: 'Blog #2',
          description: 'Another placeholder'
        },
        {
            title: 'Blog #3',
            description: 'No clue man!'
        }
      ]
    }
  }
}
</script> 