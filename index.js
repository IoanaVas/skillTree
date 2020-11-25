const {  
  Worker,
  isMainThread
} = require('worker_threads')

// generate array with random numbers
const getRandomArray = (length, max) => 
  [...new Array(length)].map(() => Math.round(Math.random() * max));

if(isMainThread) {
  const input = getRandomArray(100, 300);
  // run thread and pass array
  const worker = new Worker('./worker.js', { workerData: { value: input } });

  worker.on('message', (result) => {
      console.log(result);
  });
  
  worker.on('exit', (code) => {
      if (code !== 0) {
        return new Error(`Worker stopped with exit code ${code}`)
      };
          
      console.log('Worker stopped ' + code);
  });
}