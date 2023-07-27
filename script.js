// This code is assuming a simple circular orbit, 
// real orbits are elliptical and would require more complex math

window.onload = function() {
    var planets = document.getElementsByClassName('planet');
    for (var i = 0; i < planets.length; i++) {
        var planet = planets[i];
        var orbitDuration = window.getComputedStyle(planet).animationDuration;
        var orbitDurationSeconds = parseFloat(orbitDuration) * (orbitDuration.indexOf('ms')>-1 ? 1 : 1000);
        var angleIncrement = (2 * Math.PI) / orbitDurationSeconds;
        var angle = 0;
        var radius = 200;  // You would want to adjust this per planet
        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;
        setInterval(function() {
            var x = centerX + radius * Math.cos(angle);
            var y = centerY + radius * Math.sin(angle);
            planet.style.left = x + 'px';
            planet.style.top = y + 'px';
            angle += angleIncrement;
        }, 1000 / 60);  // 60 FPS
    }
};
