<template>
  <section class="min-h-screen grid place-items-center relative pt-16 overflow-hidden">
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-accent-secondary/3"></div>
    </div>
    
    <div class="container mx-auto px-4 text-center max-w-4xl">
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
        <span class="text-text-secondary">hello, i'm</span>
        <span class="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"> saxony</span>
        <span class="text-text-secondary">.</span>
      </h1>
      <p class="text-xl text-text-secondary mb-12 animate-fade-in">
        i do fullstack development and have a passion for cybersecurity.
      </p>
      
      <div class="bg-bg-secondary border border-border-color rounded-xl overflow-hidden shadow-2xl animate-fade-in">
        <div class="bg-bg-primary px-4 py-2 border-b border-border-color flex gap-2">
          <div class="w-3 h-3 rounded-full bg-error"></div>
          <div class="w-3 h-3 rounded-full bg-warning"></div>
          <div class="w-3 h-3 rounded-full bg-success"></div>
        </div>
        <div class="p-6 font-mono text-sm">
          <div v-for="(line, index) in terminalHistory" :key="index" class="mb-2">
            <div v-if="line.type === 'input'" class="flex gap-2">
              <span class="text-accent-primary">$</span>
              <span class="text-text-secondary">{{ line.content }}</span>
            </div>
            <div v-else-if="line.type === 'output'" class="flex gap-2">
              <span class="text-accent-primary">></span>
              <span class="text-text-secondary">{{ line.content }}</span>
            </div>
            <div v-else-if="line.type === 'error'" class="flex gap-2">
              <span class="text-error">!</span>
              <span class="text-error">{{ line.content }}</span>
            </div>
          </div>
          
          <div class="flex gap-2 items-center">
            <span class="text-accent-primary">$</span>
            <input 
              v-model="currentInput" 
              @keyup.enter="executeCommand"
              @keydown="handleKeydown"
              class="flex-1 bg-transparent text-text-secondary outline-none border-none"
              placeholder="Type a command..."
              ref="terminalInput"
              autocomplete="off"
            />
            <span v-if="showCursor" class="w-2 h-4 bg-accent-primary animate-blink"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      currentInput: '',
      terminalHistory: [],
      commandHistory: [],
      historyIndex: -1,
      showCursor: true,
      commands: {
        'whoami': () => 'saxony@stormss.cc',
        'cat skills.txt': () => 'C/C++, C#, Python, JavaScript, HTML/CSS',
        'cat resources.txt': () => 'C++ - https://learncpp.com/ | Web - https://developer.mozilla.org/ | Stack Overflow - https://stackoverflow.com/questions',
        'help': () => [
          'Available commands:',
          '| whoami: Show current user',
          '| cat skills.txt: Show skills',
          '| cat resources.txt: Show helpful developer resources',
          '| clear: Clear terminal',
          '| help: Show this help'
        ].join('\n'),
        'clear': () => {
          this.terminalHistory = [];
          return '';
        }
      }
    }
  },
  mounted() {
    this.initializeTerminal();
    this.$nextTick(() => {
      this.$refs.terminalInput.focus();
    });
  },
  methods: {
    initializeTerminal() {
      this.addInput('saxony@stormss.cc');
      this.addOutput('Welcome! Type "help" for a list of commands.');
      this.typeText('help');
    },
    
    executeCommand() {
      const command = this.currentInput;
      if (!command.trim()) return;

      this.addInput(command);
      this.commandHistory.push(command);
      this.historyIndex = this.commandHistory.length;

      let result = '';
      if (this.commands[command]) {
        try {
          result = this.commands[command]();
        } catch (error) {
          result = `Error: ${error.message}`;
        }
      } else {
        result = this.runCommand(command);
      }

      if (result !== '') {
        const formattedResult = result
        this.addOutput(formattedResult);
      }

      this.currentInput = '';
    },

    runCommand(command) {
      const parts = command.split(' ');
      const cmd = parts[0].toLowerCase();
      const args = parts.slice(1);

      if (this.commands[cmd]) {
        try {
          return this.commands[cmd](args);
        } catch (error) {
          return `Error: ${error.message}`;
        }
      } else {
        return `Command not found: ${cmd}. Type "help" for available commands.`;
      }
    },

    addInput(input) {
      this.terminalHistory.push({
        type: 'input',
        content: input
      });
    },

    addOutput(output) {
      if (output) {
        this.terminalHistory.push({
          type: 'output',
          content: output
        });
      }
    },

    addError(error) {
      this.terminalHistory.push({
        type: 'error',
        content: error
      });
    },

    handleKeydown(event) {
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.currentInput = this.commandHistory[this.historyIndex];
        }
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (this.historyIndex < this.commandHistory.length - 1) {
          this.historyIndex++;
          this.currentInput = this.commandHistory[this.historyIndex];
        } else if (this.historyIndex === this.commandHistory.length - 1) {
          this.historyIndex++;
          this.currentInput = '';
        }
      }
    },

    typeText(text, callback) {
      let i = 0;
      const speed = 50;
      
      const type = () => {
        if (i < text.length) {
          this.currentInput = text.substring(0, i + 1);
          i++;
          setTimeout(type, speed);
        } else {
          if (callback) callback();
        }
      };
      
      type();
    }
  }
}
</script>

<style scoped>
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s infinite;
}
</style> 