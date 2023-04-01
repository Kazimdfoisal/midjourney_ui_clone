import { eventMediaIcon,mediaSidebarCross, monthlyBill, yearlyBill ,threeCard} from "./document.js";
import { Card } from "./function.js";
import { sideBar } from "./function.js";
import { monthlyBillCards, pricingCards, yearlyBillCards } from "./array.js";
import { slidebarNameList } from "./array.js";


window.addEventListener('load', ()=>{
    for (const pricingCard of pricingCards) {
        threeCard.innerHTML +=Card(pricingCard);
    }
  })

yearlyBill.addEventListener("click",()=>{
    threeCard.innerHTML= "";
    if(monthlyBill.classList.contains('activeBilling')){
        monthlyBill.classList.remove('activeBilling');
        yearlyBill.classList.add('activeBilling');
    }else{
        monthlyBill.classList.add('activeBilling');
        yearlyBill.classList.remove('activeBilling');
    }

    for (const pricingCard of yearlyBillCards) {
    threeCard.innerHTML +=Card(pricingCard);
    }
})

monthlyBill.addEventListener("click",()=>{
    threeCard.innerHTML= "";
    if(yearlyBill.classList.contains('activeBilling')){
        yearlyBill.classList.remove('activeBilling');
        monthlyBill.classList.add('activeBilling');
    }else{
        yearlyBill.classList.add('activeBilling');
        monthlyBill.classList.remove('activeBilling');

    }
    for (const pricingCard of monthlyBillCards) {
        threeCard.innerHTML+=Card(pricingCard);
    }
})


window.addEventListener('load', ()=>{
  for (const sidebar of slidebarNameList) {
    document.getElementById('sideBar').innerHTML +=sideBar(sidebar);
  }
})

eventMediaIcon.addEventListener("click",()=>{
    const sidebarMedia = document.getElementById("sideBarMedia");
    sidebarMedia.classList.add("el");
    eventMediaIcon.style.visibility='hidden';
})

mediaSidebarCross.addEventListener("click",()=>{
    const sidebarMedia = document.getElementById("sideBarMedia");
    sidebarMedia.classList.toggle("el");
    eventMediaIcon.style.visibility='visible';

})








