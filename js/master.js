//start landing

//background images 

// let land = document.querySelector(".landing")

// let images = ["01.jpeg","02.jpg","03.jpg","04.jpg","05.jpg"]


// setInterval( () => {
//     let randomnums = Math.floor(Math.random()*images.length);
//     land.style.backgroundImage = 'url("imgs/' +images[randomnums]+ '")';
// },1000)



// links in heading 
let landingLinks = document.querySelectorAll(".links a")
ScrollToSomeWhere(landingLinks)

landingLinks.forEach( a => {
    a.addEventListener("click" , (e) => HandelActive(e))
})



//start setting-box


// reset button
let resetButton = document.querySelector(".setting-box .reset")

resetButton.onclick = function() {
    localStorage.clear()
    window.location.reload()
}

// colors
let maincolor = localStorage.getItem("coloroption")

if( maincolor !== null)
{
    // local storage has item
    //local storage is used to keep the color we choose when we refresh 
    document.documentElement.style.setProperty("--main--color", maincolor )

    //remove class active 
    document.querySelectorAll(".setting-colors ul li").forEach( element => {
        element.classList.remove("active")
        //add active class to the color of li that is in local storage
        if(element.dataset.color === maincolor){

            element.classList.add("active")
        }
    })

}


let settingIcon = document.querySelector(".fa-gear")
let allsettingIcon = document.querySelector(".setting-icon")
let settingBox = document.querySelector(".setting-box")

allsettingIcon.onclick = function(){
    settingIcon.classList.toggle("fa-spin")
    settingBox.classList.toggle("open")
}

let colorslis = document.querySelectorAll(".setting-colors ul li")

colorslis.forEach( li => {
    li.addEventListener("click" , (e) => { 
        console.log(e.target.dataset.color)
        document.documentElement.style.setProperty("--main--color",e.target.dataset.color)
        localStorage.setItem("coloroption" , e.target.dataset.color)

     HandelActive(e)
    })
})


// show and hide bullets
let showBullets = document.querySelectorAll(".setting-bullets .options span")

let localBullets = localStorage.getItem("bulletshow")

if( localBullets !== null){

    showBullets.forEach( span => {
        span.classList.remove("active")
    })

    if ( localBullets === "block")
        {
            document.querySelector(".bullet-nav").style.display = "block"
            document.querySelector(".setting-bullets .options span.yes").classList.add("active")
        }
        else
        {
            document.querySelector(".bullet-nav").style.display = "none"
            document.querySelector(".setting-bullets .options span.No").classList.add("active")
        }
}


showBullets.forEach( span => {
    span.addEventListener("click" , (e) => {
        if( span.dataset.show === "block"){
            document.querySelector(".bullet-nav").style.display = "block"
            localStorage.setItem("bulletshow", e.target.dataset.show)
        }
        else
        {
            document.querySelector(".bullet-nav").style.display = "none"
            localStorage.setItem("bulletshow", e.target.dataset.show)
        }
        HandelActive(e)
    }  
    )
})


// home button

let homebutton = document.querySelector(".setting-box .setting-main-content .Home")
let landing = document.querySelector(".landing")

homebutton.onclick = function(){
    landing.scrollIntoView({
        behavior: 'smooth'
    })
}



//log-in space

let LogIn = document.querySelectorAll(".log-in")

LogIn.forEach( e => 
    e.onclick = function() {
         // create overlay
         let overlay = document.createElement("div")
         overlay.className = "overlay"
         document.body.appendChild(overlay)

          //create pop-up log box
        let popUplogBox = document.createElement("div")
        popUplogBox.className = "popup-log-box"
        document.body.appendChild(popUplogBox)

    // add sign-up area to  pop-up box
    let teacheSubsignup = document.createElement("div")
    teacheSubsignup.className = "sign-up"
    popUplogBox.appendChild(teacheSubsignup)

     //add content to sign-up 
     let teacheSubsignuph1 = document.createElement("h1")
     let teacheSubsignuph1Text = document.createTextNode("Log-In")
     teacheSubsignuph1.appendChild(teacheSubsignuph1Text)
     teacheSubsignup.appendChild(teacheSubsignuph1)
 
     let teacheSubsignupLine = document.createElement("div")
     teacheSubsignupLine.className = "signup-line"
     teacheSubsignup.appendChild(teacheSubsignupLine)
 
     let teacheSubsignupform = document.createElement("form")
     teacheSubsignupform.className = "signup-form"
     teacheSubsignup.appendChild(teacheSubsignupform)

    // input for form
     let emaillog = document.createElement("input")
     emaillog.placeholder = "E-mail"
     teacheSubsignupform.appendChild(emaillog)

     let passlog = document.createElement("input")
     passlog.type = "password"
     passlog.placeholder = "Password"
     teacheSubsignupform.appendChild(passlog)

     // remember me and forget pass

     let remembermeform = document.createElement("form")
     remembermeform.className = "RM-form"
     teacheSubsignup.appendChild(remembermeform)

     let lablechecklog = document.createElement("div")
     lablechecklog.className = "Rem-me"
     remembermeform.appendChild(lablechecklog)

     let checklog = document.createElement("input")
     checklog.type = "checkbox"
     lablechecklog.appendChild(checklog)

     let labletext = document.createElement("span")
     let labletextText = document.createTextNode("Remember Me")
     labletext.appendChild(labletextText)
     lablechecklog.appendChild(labletext)

     let forgetpass = document.createElement("a")
     forgetpass.href = "#"
     let forgetpasstext = document.createTextNode("Forget Password?")
     forgetpass.appendChild(forgetpasstext)
     remembermeform.appendChild(forgetpass)

        let teacheSubsignupformSubmit = document.createElement("input")
        teacheSubsignupformSubmit.type = "submit"
        teacheSubsignupformSubmit.value = "Log-in"
        teacheSubsignupformSubmit.className = "signup-submit"
        teacheSubsignupform.appendChild(teacheSubsignupformSubmit)

      // add close icon
    
      let closeButton = document.createElement("span")
      closeButton.className = "close-button-log"
      let closeButtonText = document.createTextNode("X")
      closeButton.appendChild(closeButtonText)
      teacheSubsignupform.appendChild(closeButton)
  
      //close popup box
  
      document.addEventListener("click" , function(e) {
  
          if(e.target.className === "close-button-log")
          {
              document.querySelector(".popup-log-box").remove()
              document.querySelector(".overlay").remove()
          }
      })


    }
)



//start our community

let community = document.querySelector(".community")

window.onscroll = function(){

    // community section offset top
    //This property gives the distance of the "community" element from the top of its closest positioned ancestor
    let coOffsetTop = community.offsetTop;

    // community section outer height
    // This property gives the height of the "community" , including its padding, border, and scrollbar, but excluding its margin.
    let coOuterHeight = community.offsetHeight;

    //window Height
    let WindowHeight = this.innerHeight;

    //window scroll top 
    // pageYOffset is a property that returns the number of pixels the document has been scrolled vertically from the top.
    let windowScroolTop = this.pageYOffset;

    let allMembers = document.querySelectorAll(".community-box .member-progress span")

    if ( windowScroolTop > (coOffsetTop + coOuterHeight - WindowHeight))
    {
        // community section reached

        // console.log("commnity reached")

        allMembers.forEach( s => {
            s.style.width = s.dataset.progress
        })
    }
}

//start nav-bar

let allBullets = document.querySelectorAll(".bullet-nav .bullet")
ScrollToSomeWhere(allBullets)


// start subscribe

let teacherSub = document.querySelector(".teacher-sub")
let studentSub = document.querySelector(".student-sub")

let signupArray = [teacherSub, studentSub]

signupArray.forEach( e => 
    e.onclick = function() {

        // create overlay
        let overlay = document.createElement("div")
        overlay.className = "overlay"
        document.body.appendChild(overlay)
    
        //create pop-up sub box
        let popUpSubBox = document.createElement("div")
        popUpSubBox.className = "popup-sub-box"
        document.body.appendChild(popUpSubBox)
    
        // add sign-up area to  pop-up box
        let teacheSubsignup = document.createElement("div")
        teacheSubsignup.className = "sign-up"
        popUpSubBox.appendChild(teacheSubsignup)
    
        //add img to pop-up box

        if ( e === teacherSub )
        {
            let teacheSubImg = document.createElement("img")
            teacheSubImg.src = "imgs/06.jpg"
            popUpSubBox.appendChild(teacheSubImg)
        }
        
        if( e === studentSub)
        {
            let teacheSubImg = document.createElement("img")
            teacheSubImg.src = "imgs/07.jpg"
            popUpSubBox.appendChild(teacheSubImg)
        }
        //add content to sign-up 
        let teacheSubsignuph1 = document.createElement("h1")
        let teacheSubsignuph1Text = document.createTextNode("Sign Up Now")
        teacheSubsignuph1.appendChild(teacheSubsignuph1Text)
        teacheSubsignup.appendChild(teacheSubsignuph1)
    
        let teacheSubsignupLine = document.createElement("div")
        teacheSubsignupLine.className = "signup-line"
        teacheSubsignup.appendChild(teacheSubsignupLine)
    
        let teacheSubsignupform = document.createElement("form")
        teacheSubsignupform.className = "signup-form"
        teacheSubsignup.appendChild(teacheSubsignupform)
    
        // add inputs to form
    
        let teacheSubsignupformFirstName = document.createElement("input")
        teacheSubsignupformFirstName.placeholder = "First name"
        teacheSubsignupform.appendChild(teacheSubsignupformFirstName)
    
        let teacheSubsignupformSecondName = document.createElement("input")
        teacheSubsignupformSecondName.placeholder = "Second name"
        teacheSubsignupform.appendChild(teacheSubsignupformSecondName)
    
        let teacheSubsignupformEmail = document.createElement("input")
        teacheSubsignupformEmail.placeholder = "E-mail"
        teacheSubsignupform.appendChild(teacheSubsignupformEmail)
    
        let teacheSubsignupformPass = document.createElement("input")
        teacheSubsignupformPass.type = "password"
        teacheSubsignupformPass.placeholder = "password"
        teacheSubsignupform.appendChild(teacheSubsignupformPass)

        if ( e === studentSub)
            {
                let teacheSubsignupformTeacherName = document.createElement("input")
                teacheSubsignupformTeacherName.placeholder = "Your Grade"
                teacheSubsignupform.appendChild(teacheSubsignupformTeacherName)
            }
    
        let teacheSubsignupformSubject = document.createElement("input")
        teacheSubsignupformSubject.placeholder = "Subject"
        teacheSubsignupform.appendChild(teacheSubsignupformSubject)
    
        let teacheSubsignupformSubmit = document.createElement("input")
        teacheSubsignupformSubmit.type = "submit"
        teacheSubsignupformSubmit.value = "Confirm"
        teacheSubsignupformSubmit.className = "signup-submit"
        teacheSubsignupform.appendChild(teacheSubsignupformSubmit)

    
        // add close icon
    
        let closeButton = document.createElement("span")
        closeButton.className = "close-button"
        let closeButtonText = document.createTextNode("X")
        closeButton.appendChild(closeButtonText)
        teacheSubsignupform.appendChild(closeButton)
    
        //close popup box
    
        document.addEventListener("click" , function(e) {
    
            if(e.target.className === "close-button")
            {
                document.querySelector(".popup-sub-box").remove()
                document.querySelector(".overlay").remove()
            }
        })
    }

)


// functions

function ScrollToSomeWhere (place) {

    place.forEach( bullet => 

        bullet.addEventListener("click" , (e) => {
    
            e.preventDefault()
    
            // scrollIntoView is a web API feature
          document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
          })
        })
    )

}

function HandelActive (ev){
    ev.target.parentElement.querySelectorAll(".active").forEach( element => {
        element.classList.remove("active")
    })

    ev.target.classList.add("active")
}


// start mobile menue

togglebtn = document.querySelector(".toggle-btn")
btnlinks = document.querySelector(".links")

togglebtn.onclick = function(e)
{
    e.stopPropagation();
    this.classList.toggle("menu-active")
    btnlinks.classList.toggle("open")

}
btnlinks.onclick = function(e){
    e.stopPropagation();
}

document.addEventListener("click" , (e) => {

    if( e.target !== togglebtn && e.target !== btnlinks)
    {

        // check if menu is open

        if( btnlinks.classList.contains("open"))
        {
            togglebtn.classList.toggle("menu-active")
            btnlinks.classList.toggle("open")
        }


    }
})
