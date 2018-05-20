const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let array = []
function init() {
  document.body.addEventListener('keydown', function(e){
    for(var i=0; i<e.length; i++)
        array.push(e.which)
         if (array === codes){
          alert ('Yay!');
          index = 0;
         }
})
}
