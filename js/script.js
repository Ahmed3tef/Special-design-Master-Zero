// set color to local storage 
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null){
        document.documentElement.style.setProperty("--color-primary",mainColor);
        // loop on all list colors
        document.querySelectorAll(".settings__colors-list li").forEach(element=>{
           
            element.classList.remove("active");
           
            // check if list color data == main color 
            if (element.dataset.color === mainColor){
        
                element.classList.add("active");
            }
        });

}

// handle active

function handleActive(event){
    event.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active");
        });
        event.target.classList.add("active");
}


// toggle sidebar 
document.querySelector(".settings__toggle i").onclick = function(){
    this.classList.toggle("fa-spin");

     document.querySelector("sidebar").classList.toggle("open");
     document.querySelector("sidebar").classList.toggle("shadow");


};

// choose color theme
const colorList = document.querySelectorAll(".settings__colors-list li");

colorList.forEach(li =>{
    li.addEventListener('click',(e)=>{
        // set choosen color to the body
        document.documentElement.style.setProperty("--color-primary",e.target.dataset.color);

        // set choosen color to localStorage
        localStorage.setItem("color-option",e.target.dataset.color);

        handleActive(e);
    });
});

// get header
let header = document.querySelector('.header');
// create list imges 
let imgsList = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

setInterval(()=>{

    let randomNum = Math.floor(Math.random() * imgsList.length);
    header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url("../imgs/${imgsList[randomNum]}")`;
},7000);

// animating skills when scroll 

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight - 150)) {
      

    let allSkills = document.querySelectorAll(".skills__box .skills__progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }

};
// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery__images img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup__overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup__box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'popup__close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

  });

});
// Close Popup
document.addEventListener("click", (e) =>{

  if (e.target.className == 'popup__close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup__overlay").remove();

  }

});

const allBullets = document.querySelectorAll(".bullets .bullets__bullet");
const allLinks = document.querySelectorAll(".header__nav__list li a")

function scrollToElement(elements){

    elements.forEach(element =>{
        element.addEventListener("click",(e)=>{
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            });
        });
    });
}

scrollToElement(allBullets);
scrollToElement(allLinks);


let bulletsSpan = document.querySelectorAll(".settings__bullets span");

let bulletsContainer = document.querySelector(".bullets");

let bulletLocalItem = localStorage.getItem("settings__bullets");

if (bulletLocalItem !== null) {

  bulletsSpan.forEach(span => {

    span.classList.remove("active");

  });

  if (bulletLocalItem === 'block') {

    bulletsContainer.style.display = 'block';

    document.querySelector(".settings__bullets .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".settings__bullets .no").classList.add("active");

  }

}

bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {

      bulletsContainer.style.display = 'block';

      localStorage.setItem("bullets-option", 'block');

    } else {

      bulletsContainer.style.display = 'none';

      localStorage.setItem("bullets-option", 'none');

    }

    handleActive(e);

  });

});

// reset button 
document.querySelector(".settings__reset").onclick = function(){
    
    localStorage.clear();
    window.location.reload();
}

// toglle nav menu
let navBtn = document.querySelector(".header__toggle-menu");
let tLinks = document.querySelector(".header__nav__list");

navBtn.onclick = function(e){
    // Stop Propagation
     e.stopPropagation();

    navBtn.classList.toggle("menu-active");
    tLinks.classList.toggle("open");
}

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

  if (e.target !== navBtn && e.target !== tLinks) {

    // Check If Menu Is Open
    if (tLinks.classList.contains("open")) {

      // Toggle Class "menu-active" On Button
      navBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");

    }

  }

});
// Stop Propagation On Menu 
tLinks.onclick = function (e) {
  e.stopPropagation();
}