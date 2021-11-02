const div = document.querySelector('div');
let divX = 0;
let divY = 0;
div.style.left = `${divX}px`
div.style.top = `${divY}px`
let flag = false;
let insertDivX;
let insertDivY;
div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = '#487'
    flag = true
    insertDivX = e.offsetX
    insertDivY = e.offsetY
    // console.log(insertDivX, insertDivY)

})
div.addEventListener('mousemove', (e) => {
    // console.log(e.clientX,e.clientY)
    if(flag){
    divX = e.clientX - insertDivX
    divY = e.clientY - insertDivY
    console.log(divX,divY)
    div.style.left = `${divX}px`
    div.style.top = `${divY}px`
    }
})

div.addEventListener('mouseup', () => {
    flag = false
    div.style.backgroundColor = '#187'
})