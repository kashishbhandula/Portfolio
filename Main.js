var section = document.getElementsByTagName("section");


window.addEventListener('scroll', function () {

    for (let i = 0; i < section.length; i++) {

        console.log(Math.round(section[i].offsetTop), Math.round(section[i].offsetTop)+Math.round(section[i].offsetHeight));
        console.log(Math.round(section[i].offsetTop)<window.scrollY<Math.round(section[i].offsetTop)+ Math.round(section[i].offsetHeight));
        if (Math.round(section[i].offsetTop)<window.scrollY<Math.round(section[i].offsetTop)+ Math.round(section[i].offsetHeight)) {
            console.log(section[i].getAttribute('id'));
            //break;
        }
    }
})

///////////////////////////////////////////////////
var Skill_Progress = document.getElementsByClassName("Skill-Progress");
for (let i = 0; i < Skill_Progress.length; i++)Skill_Progress[i].style.backgroundColor = "rgb(20,157,221)";
