const nav = document.querySelector(".nav")
const navList = nav.querySelectorAll("li")
const totalNavList = navList.length
const allSection = document.querySelectorAll(".section")
const totalSection = allSection.length;

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
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i=0; i<totalSection; i++ )
  {
      allSection[i].classList.toggle("open");
  }
})
