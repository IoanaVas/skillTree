# skillTree

Demo JS skills

## Polifills

On `polifill` branch

## Transpiller

On `no-transpiller-server` branch I implemented a basic node server using `express`.
We want to use some of the modern JS features, such as `import * from ...` instead of require.
On `babel-transpiller` branch, installing some babel packages and configuring the `.babelrc` file , I could use the `import` feature of JS, showing how a transpiller works: allowing us to use features that are not supported.

## Concurrency

On `concurrency` branch it is shown how two processes are running together, but not at the same time, in one thread with the help of the evnt loop.

## Web Workers and Threads
Concurrency of multiple threads can be shown, in JS, with the help of Web Workers. 
Web Worker enable creating new threads in JS, which is a single-threaded programming language.
On `threads` branch we will see how one process can have multiple threads in JS, resulting concurrency between threads.
