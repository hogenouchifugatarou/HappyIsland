const container = document.querySelector('.container');
const background = document.querySelector('.Background');
const points = document.querySelectorAll('.point');
const pointsArray = Array.from(points);


pointsArray.forEach(function(point) {
    point.addEventListener('mousemove',function() {
        point.style.color = "#ea5532";
        container.style.opacity = "0.1";
        background.style.visibility = "visible";
        background.style.opacity = "1";
        let index = pointsArray.indexOf(point);
        let Ignition = document.querySelector(`#Background__player${index}`);
        Ignition.classList.add('Ignition');
    });

    point.addEventListener('mouseleave',function() {
        point.style.color = "black";
        container.style.opacity = "1";
        background.style.visibility = "hidden";
        background.style.opacity = "0";
        let index = pointsArray.indexOf(point);
        let Ignition = document.querySelector(`#Background__player${index}`);
        Ignition.classList.remove('Ignition');
    });
});


