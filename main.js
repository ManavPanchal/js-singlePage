const slide = document.querySelectorAll(".slide");
let count = 0;
slide.forEach((ele,index)=>{
    ele.style.left = `${index * 100}%`
})

const transform = ()=>{
    slide.forEach((ele)=>{
        ele.style.transform = `translateX(-${count * 100}%)`
    })
}

function goPrev(){
    let btn =document.getElementById("pre_btn");
    if(count == 0){
        count = 4;
        transform;
    }
    count--;
    transform();
}

function goNext(){
    if(count == 3){
        count = -1;
        transform();
    }
    count++;
    transform();
}