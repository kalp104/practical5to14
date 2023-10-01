// Function to perform a dynamic import based on a condition
async function loadModule(condition) {
    if (condition) {
      // Use dynamic import to load moduleA.js asynchronously
      const moduleA = await import('./moduleA.js');
      return moduleA;
    } else {
      // Use dynamic import to load moduleB.js asynchronously
      const moduleB = await import('./moduleB.js');
      return moduleB;
    }
  }
  
  // Usage
  async function main() {
    const shouldLoadModuleA = true; // Set your condition here
  
    // Call loadModule with the condition
    const loadedModule = await loadModule(shouldLoadModuleA);
  
    // Now you can use the loaded module
    loadedModule.someFunction();
  }
  
  main();
  