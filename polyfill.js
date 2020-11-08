if(!Array.prototype.mapper) {
  console.log('Used mapper for showing purposes')
  Array.prototype.mapper = function(fn) {
    let newArr = [];
    this.forEach(function (item) {
      newArr.push(fn(item))
    })

    return newArr
  }
}

const retrieveCuteDogs = function() {
  const dogs = ['poodle', 'retriver', 'shepard']
  
  return dogs.mapper(function(dog) {
    return `cute ${dog}`
  })
}

console.log(retrieveCuteDogs())

