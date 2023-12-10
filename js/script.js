const nav = document.querySelector(".nav")
const navList = nav.querySelectorAll("li")
const totalNavList = navList.length
const allSection = document.querySelectorAll(".section")
const totalSection = allSection.length;
console.log(allSection)
for(let i=0; i<totalNavList; i++)
{
  var a = navList[i].querySelector("a");
  a.addEventListener("click", function(){
    //Move active to background
    for(let j = 0; j < totalSection; j++){
      if(allSection[j].classList.contains("active"))
      {
        moveBack(j);
      }
    }
    showSection(this)
    if(window.innerWidth < 1200)
    {
      toggleAside();
    }
  })
}

function moveBack(index)
{
  for(let i=0; i<totalSection; i++)
  {
      allSection[i].classList.remove("background");
  }
  allSection[index].classList.add("background");
}

function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href");
    console.log(target)
    document.querySelector(target).classList.add("active")
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => 
{
  toggleAside()
})

function toggleAside(){
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i=0; i<totalSection; i++ )
  {
      allSection[i].classList.toggle("open");
  }
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

window.onload = function() {
  let iter = 0;
  const interval = setInterval(() =>{
    const nameElement = document.getElementsByClassName("name")[0];
    nameElement.innerText = nameElement.innerText.split("")
    .map((letter,index) =>{
      if(index*5.0 < iter ){
        return nameElement.dataset.value[index];
      }

      return letters[Math.floor(Math.random()*26)]
    }) 
    .join("");
    
    if(iter > 50) clearInterval(interval);

    iter+=1;
  }, 30);

};


//Personal 
const track = document.getElementById("image-track");
const onMouseDown = e =>{
  track.dataset.mouseDownAt = e.clientX
}

const onMouseMove = e =>{
  if(track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  
  const maxDelta = window.innerWidth/2;

  const percentage = (mouseDelta/maxDelta) * -100;
  const nextPercentage = Math.min(Math.max(parseFloat(track.dataset.prevPercentage) + percentage, -100), 0);
  track.dataset.percentage = nextPercentage


  track.style.transform = `translate(${nextPercentage}%, -50%)`;

  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

const onMouseUp = () =>{
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage || 0;
}

window.onmousedown = e => onMouseDown(e);

window.ontouchstart = e => onMouseDown(e.touches[0]);

window.onmouseup = e => onMouseUp(e);

window.ontouchend = e => onMouseUp(e.touches[0]);

window.onmousemove = e => onMouseMove(e);

window.ontouchmove = e => onMouseMove(e.touches[0]);