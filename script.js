// Connect to HTML
var projectTitle = document.getElementById('projectTitle');
var projectDescription = document.getElementById('projectDescription');
var projectLink = document.getElementById('projectLink');
//  Selects carousel element
var carousel = document.getElementById("carouselBox");
var carouselImg = document.getElementById('carouselImg');

// Selects buttons using their parent carousel element
var next = document.getElementById("nextButton");
var prev = document.getElementById("prevButton");
var index = 0;
var currentImage;

var images = {
    0: { file: "./assets/images/techblog.JPG", project: 'Tech Blog', description: 'Blog Website for Tech People', link: "https://dry-sea-52050.herokuapp.com/", gitHub: "https://github.com/timp1990/Tech-Blog" },
    1: { file: "./assets/images/projecthub.JPG", project: 'Project Hub - 1 of a team of 4', description: 'Part of a team that made a project management website', link: "https://projecthub-crm.herokuapp.com/login", gitHub: "https://github.com/wilgru/projecthub" },
    2: { file: "./assets/images/lanesBridge.jpg", project: 'Lanes Bridge', description: '60m x 10m x 10m Concrete Bridge', link: "https://www.nbnnews.com.au/2019/08/20/ribbon-cutting-marks-official-opening-of-new-lanes-bridge/" },
    3: { file: "./assets/images/teamprofile.JPG", project: 'Team Profile Generator', description: 'Use Inquirer and Node to generate a website for a Team Profile', link: "https://www.youtube.com/watch?v=TQAOtdu7KJ0", gitHub: "https://github.com/timp1990/Team-Profile-Generator" },
    4: { file: "./assets/images/WeatherDashboard.JPG", project: 'Weather Dashboard', description: 'Enter a city for weather data', link: 'https://timp1990.github.io/Weather-Dashboard/', gitHub: "https://github.com/timp1990/Weather-Dashboard" },
    5: { file: "./assets/images/WorkdayScheduler.JPG", project: 'Workday Scheduler', description: 'A daily planner for a standard workday', link: 'https://timp1990.github.io/Work-Day-Scheduler/', gitHub: "https://github.com/timp1990/Work-Day-Scheduler" },
    6: { file: "./assets/images/Fischers Aerial.JPG", project: 'Fischers Bridge', description: '35m x 5m x 10m Concrete Bridge', link: "https://www.nbnnews.com.au/2020/06/17/largest-mobile-crane-used-in-bridge-build-at-tamban/" },
    7: { file: "./assets/images/3b Nyora Close Photo.JPG", project: 'Residence', description: 'Coffs Harbour Residence', link: "https://www.google.com/maps/place/3+Nyora+Cl,+Coffs+Harbour+NSW+2450/@-30.3052227,153.1065517,18.87z/data=!4m5!3m4!1s0x6b9c0e0af710ed7b:0x79cf4433a5d46d1b!8m2!3d-30.3052845!4d153.1068923" },
};

carouselImg.setAttribute('src', images[0]);

function navigate(direction) {
    index = index + direction;
    if (index < 0) {
        index = images.length - 1;
    } else if (index > images.length - 1) {
        index = 0;
    }
    currentImage = images[index];
    carouselImg.setAttribute('src', images[index].file);
    projectTitle.textContent = images[index].project;
    projectDescription.textContent = images[index].description;
    if (images[index].gitHub) {
        projectLink.innerHTML = "<a href=" + images[index].link + "> Project Website </a><br>" + "<a href=" + images[index].gitHub + "> Project Git Repo </a>"

    } else {
        projectLink.innerHTML = "<a href=" + images[index].link + "> Project Website </a>"
    }


}

// Clicking on image opens a new window containing the image
carousel.addEventListener("click", function () {
    window.location.href = images[index];
});

// Clicking on next button displays next image in carousel
next.addEventListener("click", function (event) {
    // Stops event from bubbling up and new window opening
    event.stopPropagation();

    navigate(1);
});

// Clicking previous displays previous image in carousel
prev.addEventListener("click", function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();

    navigate(-1);
});

navigate(0);
