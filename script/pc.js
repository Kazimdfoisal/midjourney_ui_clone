import { eventMediaIcon,mediaSidebarCross, monthlyBill, yearlyBill,sidebarMedia, sideBar} from "./document.js";
import { Card } from "./function.js";
import { sideBar } from "./function.js";
import { pricingCards, yearlyBillCards } from "./array.js";
import { slidebarNameList } from "./array.js";


window.addEventListener('load', ()=>{
    for (const pricingCard of pricingCards) {
        threeCard.innerHTML +=Card(pricingCard);
    }
  })

yearlyBill.addEventListener("click",()=>{
    for (const pricingCard of yearlyBillCards) {
        threeCard.innerHTML += Card(pricingCard);
    }
    monthlyBill.classList.toggle("bgChange");
})

monthlyBill.addEventListener("click",()=>{
    for (const pricingCard of pricingCards) {
        threeCard.innerHTML+=Card(pricingCard);
    }
    yearlyBill.classList.toggle("bgChange");
})


window.addEventListener('load', ()=>{
  for (const sidebar of slidebarNameList) {
    sideBar.innerHTML +=sideBar(sidebar);
  }
})

eventMediaIcon.addEventListener("click",()=>{
    sidebarMedia.classList.add("el");
    eventMediaIcon.style.visibility='hidden';
})

mediaSidebarCross.addEventListener("click",()=>{
    sidebarMedia.classList.toggle("el");
    eventMediaIcon.style.visibility='visible';

})




