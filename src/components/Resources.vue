<template>
    <section id="languages-resources" class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold text-center mb-8">Languages & Resources</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">Languages I Know</h3>
          <ul class="list-disc list-inside">
            <li>C/C++</li>
            <li>C#</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-4">Resources to Learn</h3>
          <ul class="list-disc list-inside">
            <li>
              <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" class="text-accent-primary hover:underline">
                FreeCodeCamp
              </a> - A great platform for learning web development.
            </li>
            <li>
              <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" class="text-accent-primary hover:underline">
                Codecademy
              </a> - Interactive coding lessons for various languages.
            </li>
            <li>
              <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" class="text-accent-primary hover:underline">
                Udemy
              </a> - A wide range of courses on programming and development.
            </li>
            <li>
              <a href="https://www.khanacademy.org/computing" target="_blank" rel="noopener noreferrer" class="text-accent-primary hover:underline">
                Khan Academy
              </a> - Offers courses on computer programming and more.
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'LanguagesAndResources'
  }
  </script>
  
  <style scoped>
  /* Scoped styles for the Languages and Resources component */
  </style>