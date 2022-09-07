let img_array = ['p2.jpg','p3.jpg','p4.jpg','p5.jpg','p6.jpg']
let i=0
const array_length = img_array.length
console.log(array_length)
// method or function bhitra function vayo vani () yo dina pardaina 
let set=setInterval(sliderFunction,5000)

function sliderFunction(){
    i++
    i=i%array_length
    document.getElementById('image').src =`images/${img_array[i]}`
}