// const container = document.querySelector('.container');
// const background = document.querySelector('.Background');
// const points = document.querySelectorAll('.point');
// const pointsArray = Array.from(points);

// if ( !(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0 ) ) {
//     // PC向けの記述
//     pointsArray.forEach(function(point) {
//         point.addEventListener('mousemove',function() {
//             container.style.opacity = "0.6";
//             point.style.color = "#ea5532";
//             background.style.opacity = "1";
//             let index = pointsArray.indexOf(point);
//             let Ignition = document.querySelector(`#Background__player${index}`);
//             Ignition.classList.add('Ignition');
//             Ignition.play();
//         });
    
    
//         point.addEventListener('mouseleave',function() {
//             point.style.color = "black";
//             container.style.opacity = "1";
//             background.style.opacity = "0";
//             let index = pointsArray.indexOf(point);
//             let Ignition = document.querySelector(`#Background__player${index}`);
//             Ignition.classList.remove('Ignition');
//             Ignition.load();
//         });
//     });
// } else {
//     // スマホ向けの記述
    
// }