fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (let k in collection){
        iteratee(collection[k])
      }
      return collection;
    },

    map: function(collection, iteratee) {
      array1 = []
        for (let k in collection){
        array1.push(iteratee(collection[k]))
      }
      return array1
    },

    reduce: function(collection, iteratee, acc) {
      for (let k in collection){
        acc = iteratee(acc, collection[k], collection)
      }
      return acc
    },
    
    find: function(collection, predicate) {
      for (let k in collection){
        if (predicate(collection[k]) === true) {
          return collection[k]
        }  
      }
    },

    filter: function(collection, predicate) {
      arr1 = []
      for (let k in collection){
        if (predicate(collection[k]) == true) {
          arr1.push(collection[k])
        }  
      }
      return arr1     
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n=1) {

      return array.slice(0,n).length === 1 ? array.slice(0,n)[0] : array.slice(0,n)
      
    },

    last: function(array, n=1) {
      return array.slice(-n).length === 1 ? array.slice(-n)[0] : array.slice(-n)
    },

    compact: function(array) {
      arr1 = []
      for (let k in array){
        if (array[k]) {
          arr1.push(array[k])
        }  
      }
      return arr1     
    },

    sortBy: function(array, iteratee) {
      newArray = []
      for (let k in array) {
      newArray.push(iteratee(array[k]))
      }
      return newArray.sort(function sortNumber(a,b) {
      return a - b;})
    },

    flatten: function(array, tf= false ) {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },
  }
})()

fi.libraryMethod()



