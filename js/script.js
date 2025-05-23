
function myFunction(){
     let name = document.getElementById("campaign-name").value.trim();
     let brand = document.getElementById("brand").value.trim();
     let customer = document.getElementById("customer-target").value.trim();
     let email = document.getElementById("email").value.trim();
     let msg = document.getElementById("message").value.trim();
     let date = document.getElementById("date").value.trim();
     let spen = document.getElementById("spen").value.trim();
     let budget = document.getElementById("budget").value.trim();
     let channel = document.getElementById("channel").value;
     let allcustomer = document.getElementById("all-customer").value;
     let spenSelect1 = document.getElementById("spen-select1").value;
     let spenSelect2 = document.getElementById("spen-select2").value;
     let budgetSelect1 = document.getElementById("budget-select1").value;
     let budgetSelect2 = document.getElementById("budget-select2").value;
     let check= document.getElementById("check").value;

      let demoCheck =document.getElementById('demo-check');
      let demoBudgetSelect1 =document.getElementById('demo-budget-select1');
      let demoBudgetSelect2 =document.getElementById('demo-budget-select2');
     let demoSpenSelect1 =document.getElementById('demo-spen-select1');
     let demoSpenSelect2 =document.getElementById('demo-spen-select2');
     let demoAllCustomer =document.getElementById('demo-all-customer');
     let demoChannel =document.getElementById('demo-channel');
     let campaignName=document.getElementById("demo-campaign-name");
     let demoBrand =document.getElementById("demo-brand");
     let demoCustomer =document.getElementById("demo-customer-target");
     let demoEmail =document.getElementById("demo-email-only");
     let demoSms =document.getElementById("demo-sms-only");
     let demoDate =document.getElementById("demo-date");
     let demoSpen =document.getElementById("demo-spen-input");
     let demoBudget =document.getElementById("demo-budget-input");




if (channel !== "") {
  demoChannel.classList.remove("fail");
  demoChannel.classList.add("success");

} else {
  demoChannel.classList.remove("success");
  demoChannel.classList.add("fail");

}

if (allcustomer !== "") {
  demoAllCustomer.classList.remove("fail");
  demoAllCustomer.classList.add("success");

} else {
  demoAllCustomer.classList.remove("success");
  demoAllCustomer.classList.add("fail");

}

if (spenSelect1 !== "") {
  demoSpenSelect1.classList.remove("fail");
  demoSpenSelect1.classList.add("success");

} else {
  demoSpenSelect1.classList.remove("success");
  demoSpenSelect1.classList.add("fail");

}

if (spenSelect2 !== "") {
  demoSpenSelect2.classList.remove("fail");
  demoSpenSelect2.classList.add("success");

} else {
  demoSpenSelect2.classList.remove("success");
  demoSpenSelect2.classList.add("fail");

}

if (budgetSelect1 !== "") {
  demoBudgetSelect1.classList.remove("fail");
  demoBudgetSelect1.classList.add("success");

} else {
  demoBudgetSelect1.classList.remove("success");
  demoBudgetSelect1.classList.add("fail");

}

if (budgetSelect2 !== "") {
  demoBudgetSelect2.classList.remove("fail");
  demoBudgetSelect2.classList.add("success");

} else {
  demoBudgetSelect2.classList.remove("success");
  demoBudgetSelect2.classList.add("fail");

}
if (check !== "") {
  demoCheck.classList.remove("fail");
  demoCheck.classList.add("success");

} else {
  demoCheck.classList.remove("success");
  demoCheck.classList.add("fail");

}


 
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