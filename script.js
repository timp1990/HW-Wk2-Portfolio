// Connect to HTML
console.log('Running')
var projectTitle = document.getElementById('projectTitle');

var projectDescription = document.getElementById('projectDescription');
//  Selects carousel element
var carousel = document.getElementById("carouselBox");
var carouselImg = document.getElementById('carouselImg');

// Selects buttons using their parent carousel element
var next = document.getElementById("nextButton");
var prev = document.getElementById("prevButton");
var index = 0;
var currentImage;

var images = {
    0: { file: "./assets/images/lanesBridge.jpg", project: 'Lanes Bridge', description: '60m x 10m x 10m Concrete Bridge' },
    1: { file: "./assets/images/WeatherDashboard.JPG", project: 'Weather Dashboard', description: 'Enter a city for weather data' },
    2: { file: "./assets/images/WorkdayScheduler.JPG", project: 'Workday Scheduler', description: 'A daily planner for a standard workday' },
    3: { file: "./assets/images/Fischers Aerial.JPG", project: 'Fischers Bridge', description: '35m x 5m x 10m Concrete Bridge' },
    4: { file: "./assets/images/3b Nyora Close Photo.JPG", project: 'Lanes Bridge', description: 'Coffs Harbour Residence' },
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
