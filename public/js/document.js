var a;
function affichage(){
    if(a==1){
        document.querySelector('.box1').style.display = 'block';
        return a=0;
    } else {
        document.querySelector('.box1').style.display = 'none';
        return a=1;
    }
};
var a;
function affichage1(){
    if(a==1){
        document.querySelector('.notification').style.display = 'block';
        return a=0;
    } else {
        document.querySelector('.notification').style.display = 'none';
        return a=1;
    }
};
var a;
function affichage2(){
    if(a==1){
        document.querySelector('.notification').style.display = 'block';
        return a=0;
    } else {
        document.querySelector('.notification').style.display = 'none';
        return a=1;
    }
};

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
    }
});
  
var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});
const btn = document.querySelector("button");
    const post = document.querySelector(".post");
    const widget = document.querySelector(".star-widget");
    const editBtn = document.querySelector(".edit");
    btn.onclick = ()=>{
    widget.style.display = "none";
    post.style.display = "block";
 
    editBtn.onclick = ()=>{
        widget.style.display = "block";
        post.style.display = "none";
        
    }
    return false;
    }
    function signUpUser(){
      let email=document.getElementById('email').value
      console.log(email)
      //
      let password=document.getElementById('password').value 
      let passwo=document.getElementById('passwor').value 
    console.log(password)
    console.log(passwo)
    let emaill=document.getElementById('full_name').value
    console.log(emaill)
  
    if(validate_email(email==false ||validate_password(password)==false)){
        alert('email ou mot de passe invalid')
        document.querySelector('password').value = '';
    }
  
    if(validate_field(emaill)==false){
        alert("invalid username ")
        document.querySelector('emaill').value = '';
    }
    if (password!=passwo){
      alert("les deux mot de passe differents")
    
      document.querySelector('password').value = '';
    }
    firebase.auth().createUserWithEmailAndPassword( email, password)
    .then(function() {

      // Declare user variable
      var user = firebase.auth().currentUser
       console.log(user);
      // Add this user to Firebase Database
      var database_ref =firebase.database().ref()
   
      // Create User data
      var user_data = {
        email : email,
       emaill: emaill,
        last_login : Date.now()
      }
     user.sendEmailVerification().then(function(){
      
      // Push to Firebase Database

      database_ref.child('users/' + user.uid).set(user_data)
       
      // DOne

      alert('User Created!! and email send')
  }).catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
    }
     function signIn(){
      let emaill=document.getElementById('em-ail').value
      console.log(emaill)
  
      let password=document.getElementById('pass-word').value 
    console.log(password)
    if (validate_email(emaill) == false || validate_password(password) == false) {
      alert('email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
    firebase.auth().signInWithEmailAndPassword( emaill, password).then(function() {
      // Declare user variable
      var user = firebase.auth().currentUser
         
      // Add this user to Firebase Database
      var database_ref = firebase.database().ref()
      
      if( user.emailVerified==false){
      alert("veuillez valider votre email!")
      return

      }
      
      
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
      firebase.auth().onAuthStateChanged(user =>{
        if(user){
          console.log(user)
         console.log("ila ywn oui ")
          location.replace("cuisiniers.html");
          window.history.forward();
          return user;
        }else{
          console.log("nothing")
          return null;
        }
    
       })
      
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
     
      alert(error_message)
    })
    
  }

  function validate_email(email) {
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(email) == true) {
        // Email is good
        return true
      } else {
          
        // Email is not good
        return false
      }
    }
    
    function validate_password( password) {
      // Firebase only accepts lengths greater than 6
      if (password < 6 ) {
        return false
      } else {
        return true
      }
    }
    
    function validate_field(field) {
      if (field == null) {
        return false
      }
    
      if (field.length <= 0) {
        return false
      } else {
        return true
      }
    }
  function resetpassword(ids){
  let em=document.getElementById(ids).value
  firebase.auth().sendPasswordResetEmail(em).then(()=>{
    alert("l'email a ete envoye")
  
  }).catch(error =>{
      alert(error)
  })
  
  }
  function LogoutUser(){
      firebase.auth().signOut().then(()=>{
      alert("deconnecter")
      window.location.href = "SignInSignUp.html";
      }).catch(e=>{
          alert(e)
      })
  }
  function googlesignin(){

     const provider = new firebase.auth.GoogleAuthProvider()
    //  redirect the result
     firebase.auth().signInWithPopup(provider).then(res=>{
      console.log(res)
      location.replace("cuisiniers.html")
     }).catch(e=>{
       console.log(e)
     })
    }
    function contactuss(){
      //-----------------references-----------------------------------------//
let  name=document.getElementById('fname').value
console.log(name)
let  email=document.getElementById('femail').value
console.log(email)
let  message=document.getElementById('message').value  
console.log(message)
//-----------------references-----------------------------------------//


var database=firebase.database();
var contactus_ref=database.ref().child('contact_us').push().key;
database.ref('contact_us/'+contactus_ref +'/name').set(name);
database.ref('contact_us/'+contactus_ref+ '/Email').set(email);
database.ref('contact_us/'+contactus_ref +'/message').set(message);
//     /////////////////////////////////////////////////
}  

       
function postuler(){
  alert('fichier envoyé on vous souhaite une bonne chance :)');
  document.getElementById('postulerform').reset();
}
      //---------------pour lemail---------------------------------
      function sendEmailpost(nomComplet,email,numTelephone,typePoste,downloadURL,info){
        var tm={
          to_name:"Heddad",
          from_name:nomComplet,
          email_id:email,
          numtelephone:numTelephone,
          typePoste: typePoste,
          downloadURL:downloadURL,

          info: info ,
        
      }
          emailjs.send('service_djlla5o','template_2oct7y9',tm,'36n3lTfz6064JBZPi')
          .then(function(res){
              alert("message envoyé",res.status);
          })
      }
        function feedbacks(){
          const btn = document.querySelector('#post');   
          const radioButtons=document.querySelectorAll('input[name="rate"]');
        btn.addEventListener("click",()=> {
        let selectedSize;
        for (const radioButton of radioButtons) {
          if (radioButton.checked) {
              selectedSize = radioButton.value;
              break;
          }
        }
        console.log(selectedSize);
        let  feedback=document.getElementById('feedback').value;
        var database=firebase.database();
        var user = firebase.auth().currentUser
        console.log(user);
        var contactus_ref=database.ref().child('feedbacks').push().key;
        database.ref('feedbacks/'+contactus_ref+ '/etoiles').set(selectedSize);
        database.ref('feedbacks/'+contactus_ref +'/feedback').set(feedback);
        database.ref('feedbacks/'+contactus_ref +'/email').set(user.email);
      
    
         var firebaseref=firebase.database().ref("users");
          firebaseref.once("value",function(snapshot){
              var data=snapshot.val();
              for(let i in data){
           
                  if( data[i].email==user.email){
                    
                    database.ref('feedbacks/'+contactus_ref +'/username').set(data[i].emaill);
                  }
                }}).then(
                    alert("Merci :)"));
                database.ref('feedbacks/'+contactus_ref +'/googleUsername').set(user.displayName);    
        })
        }
        function lespostes(tb){
          var a="";
          let l=document.getElementById("typePostes"); 
          for(let i in tb){
         a=  ` <option value = "${tb[i].Travail}" > ${tb[i].Travail}</option>`+" "+
           console.log(a)
         l.innerHTML+=a;
        a="";
        }
        }

function adminhtmlinit1(){
  var user = firebase.auth().currentUser
 let htm='';
 let l=document.getElementById("les cases"); 
//  && user.displayName=='Haddad Salle'

  if (user.email=='haddadsalle06@gmail.com'  ) {
     htm='<li><a href="modifier.html"><i class="fa-solid fa-gears"></i>Modifier</a></li>'
     l.innerHTML+=htm;
  }

}

function adminhtmlinit2(){
  let htm='';
  let l=document.getElementById("les cases"); 
  firebase.auth().onAuthStateChanged(user =>{
    if(user){
      console.log(user)
     console.log("ila ywn oui ")
      if (user.email=='haddadsalle06@gmail.com') {
        htm='<li><a href="modifier.html"><i class="fa-solid fa-gears"></i>Modifier</a></li>'
        l.innerHTML+=htm;
        return user;
    }else{
      console.log("nothing")
      return null;
    }

   }})


 }
 