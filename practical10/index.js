// Infinite Number Iterator
function infiniteNumberIterator() {
    let number = 1;
    while (true) {
      yield number++;
    }
  }
  
  // Even Number Generator
  function evenNumberGenerator() {
    let number = 2;
    while (true) {
      yield number;
      number += 2;
    }
  }
  
  // Usage example for the iterator
  const numberIterator = infiniteNumberIterator();
  for (let i = 0; i < 5; i++) {
    console.log(numberIterator.next().value);
  }
  
  // Usage example for the generator
  const evenGen = evenNumberGenerator();
  for (let i = 0; i < 5; i++) {
    console.log(evenGen.next().value);
  }
  