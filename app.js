let countnumber = document.getElementById('number');
let increasenumber = document.getElementById('increase');
let decreasenumber = document.getElementById('decrease');
let resetnumber = document.getElementById('reset');
let count = 0;
increasenumber.addEventListener('click',() =>{
countnumber.innerHTML = count+=1;
})
decreasenumber.addEventListener('click',() =>{
    countnumber.innerHTML =count-=1;
    })
    resetnumber.addEventListener('click',() =>{
        countnumber.innerHTML = count=0;
        })