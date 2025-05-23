
function myFunction(){
     let name = document.getElementById("campaign-name").value.trim();
     let brand = document.getElementById("brand").value.trim();
     let customer = document.getElementById("customer-target").value.trim();
     let email = document.getElementById("email").value.trim();
     let msg = document.getElementById("message").value.trim();
     let date = document.getElementById("date").value.trim();
     let spen = document.getElementById("spen").value.trim();
     let budget = document.getElementById("budget").value.trim();

     let demo1 =document.getElementById("demo1");
     let demo2 =document.getElementById("demo2");
     let demo3 =document.getElementById("demo3");
     let demoEmail =document.getElementById("demo-email-only");
     let demoSms =document.getElementById("demo-sms-only");
     let demoDate =document.getElementById("demo-date");
     let demoSpen =document.getElementById("demo-spen-input");
     let demoBudget =document.getElementById("demo-budget-input");
 
  if(name !== ""){
    demo1.classList.remove("fail");
    demo1.classList.add("success");
    } else {
    demo1.classList.remove("success");
    demo1.classList.add("fail");
    
  } 

   if(brand !== ""){
     demo2.classList.remove("fail");
     demo2.classList.add("success");
    
      } else {
    demo2.classList.remove("success");
    demo2.classList.add("fail");
  } 

   if(customer !== ""){
     demo3.classList.remove("fail");
     demo3.classList.add("success");
    
    } else {
    demo3.classList.remove("success");
    demo3.classList.add("fail");
  } 
   
    if(email !== ""){
    demoEmail.classList.remove("fail");
    demoEmail.classList.add("success");
    
    } else {
   demoEmail.classList.remove("success");
   demoEmail.classList.add("fail");
  } 

   if(msg !== ""){
    demoSms.classList.remove("fail");
    demoSms.classList.add("success");
    
    } else {
   demoSms.classList.remove("success");
   demoSms.classList.add("fail");
  } 

  if(date !== ""){
    demoDate.classList.remove("fail");
      demoDate.classList.add("success");
    
    } else {
     demoDate.classList.remove("success");
     demoDate.classList.add("fail");
  } 

     if(spen !== ""){
    demoSpen.classList.remove("fail");
      demoSpen.classList.add("success");
    
    } else {
     demoSpen.classList.remove("success");
     demoSpen.classList.add("fail");
  } 
     if(budget !== ""){
      demoBudget.classList.remove("fail");
      demoBudget.classList.add("success");
    
    } else {
     demoBudget.classList.remove("success");
     demoBudget.classList.add("fail");
  } 
   
   
}