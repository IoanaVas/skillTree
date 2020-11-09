if(!Array.prototype.map) {
  Array.prototype.map = function(fn) {
    let newArr = [];
    this.forEach(function (item) {
      newArr.push(fn(item))
    })

    return newArr
  }
}

const retrieveCuteDogs = function() {
  const dogs = ['poodle', 'retriver', 'shepard']
  
  return dogs.map(function(dog) {
    return `cute ${dog}`
  })
}

console.log(retrieveCuteDogs())

