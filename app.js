var titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));   ///false

console.log(Array.isArray(Array.from(titles)));
// turns html collection into array using .from

Array.from(titles).forEach(function(item){
    console.log(item);
});

// const titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(title){
//   console.log(title);
// });
