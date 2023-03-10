const btn = document.querySelector("button");
const wrapper = document.querySelector(".wrapper");
const qr_img = document.querySelector(".qr-img img");
const input_value = document.querySelector(".btns input");
btn.addEventListener("click",()=>{
    // console.log(input_value.value);
    if(!input_value.value){
        return;
    }
    btn.innerHTML = "Generating QR Code.....";
    qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input_value.value}`;
    qr_img.addEventListener("load",()=>{
        wrapper.classList.add("active");
    })
    btn.innerHTML="Generate QR Code";
})

input_value.addEventListener("keyup",()=>{
    if(!input_value.value){
        wrapper.classList.remove("active");
    }
})