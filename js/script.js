
function myFunction(){
     let name = document.getElementById("campaign-name").value.trim();
     let brand = document.getElementById("brand").value.trim();
     let customer = document.getElementById("customer-target").value.trim();
     let email = document.getElementById("email").value.trim();
     let msg = document.getElementById("message").value.trim();
     let date = document.getElementById("date").value.trim();
     let spen = document.getElementById("spen").value.trim();
     let budget = document.getElementById("budget").value.trim();

     let campaignName=document.getElementById("demo-campaign-name");
     let demoBrand =document.getElementById("demo-brand");
     let demoCustomer =document.getElementById("demo-customer-target");
     let demoEmail =document.getElementById("demo-email-only");
     let demoSms =document.getElementById("demo-sms-only");
     let demoDate =document.getElementById("demo-date");
     let demoSpen =document.getElementById("demo-spen-input");
     let demoBudget =document.getElementById("demo-budget-input");
 
  if(name !== ""){
    campaignName.classList.remove("fail");
    campaignName.classList.add("success");
    } else {
    campaignName.classList.remove("success");
    campaignName.classList.add("fail");
    
  } 

   if(brand !== ""){
      demoBrand.classList.remove("fail");
      demoBrand.classList.add("success");
    
      } else {
     demoBrand.classList.remove("success");
     demoBrand.classList.add("fail");
  } 

   if(customer !== ""){
     demoCustomer.classList.remove("fail");
     demoCustomer.classList.add("success");
    
    } else {
    demoCustomer.classList.remove("success");
    demoCustomer.classList.add("fail");
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