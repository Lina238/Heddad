function remplirDjs(tb){
    var a="";
    let l=document.getElementById("Djs"); 
    for(let i in tb){
        a=
        `<div class="demo">`+" "+
        `<div class="container2">`+" "+
        `<div class="row" >`+" "+
        `   <div class="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">`+" "+
        ` <div class="email-signature">`+" "+
        `<div class="signature-details">`+" "+
        `  <div class="signature-img">`+" "+
        ` <img src="${tb[i].photo}" alt="">`+" "+
        ` </div>`+" "+
        `<h3 class="title"><span>${tb[i].Name}</h3>`+" "+
        ` </div>`+" "+
        ` <p>${tb[i].Text}</p>`+" "+
        `  </div>`+" "+
        
        ` </div> `+" "+
        ` </div> `+" "+
        ` </div> `
        l.innerHTML+=a;
        a="";
       
    };
    console.log(a); 

}