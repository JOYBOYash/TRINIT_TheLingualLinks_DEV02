 let reg_btn = document.querySelector(".reg-btn");
 let log_btn = document.querySelector(".log-btn");
 let form = document.querySelector(".form-bx");

reg_btn.addEventListener("click", ()=>{
    form.classList.add("change-form");
})

log_btn.addEventListener("click", ()=>{
    form.classList.remove("change-form");
})
