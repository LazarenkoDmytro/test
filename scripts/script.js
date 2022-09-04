let height = window.innerHeight;
let width = window.innerWidth;

console.log(window.screen.width, window.screen.height);
console.log(width, height);

let background = {
    audio: document.getElementsByClassName('backgroundAudio')[0],
    permission: true
}

document.body.addEventListener('click', function() {
    if (background.permission) {
        background.permission = false;
        background.audio.play();
    }
});

let planets = [];

for (let i = 0; i < 9; i++) {
    planets.push({
        image: document.getElementsByClassName('image')[i],
        video: document.getElementsByClassName('video')[i],
        header: document.getElementsByClassName('header')[i],
        leftText: document.getElementsByClassName('leftText')[i],
        rightText: document.getElementsByClassName('rightText')[i],
        instruction: document.getElementsByClassName('secondInstruction')[0],
        permission: false
    });

    planets[i].image.addEventListener('click', function() {
        appearence(planets[i]);
    });

    planets[i].video.addEventListener('click', function() {
        disappearance(planets[i]);
    });

    planets[i].header.addEventListener('click', function() {
        disappearance(planets[i]);
    });

    planets[i].leftText.addEventListener('click', function() {
        disappearance(planets[i]);
    });

    planets[i].rightText.addEventListener('click', function() {
        disappearance(planets[i]);
    });

    planets[i].instruction.addEventListener('click', function() {
        disappearance(planets[i]);
    })
}

/*function heightValue() {
    if (document.window.innerWidth > 1155.2)
        return 722;
    else
}*/


function appearence(planet) {
    planet.permission = false;

    let opacity = 0;

    planet.video.classList.remove('hidden');
    planet.header.classList.remove('hidden');
    planet.leftText.classList.remove('hidden');
    planet.rightText.classList.remove('hidden');
    planet.instruction.classList.remove('hidden');

    setTimeout(function increasing() {
        if (opacity > 1)
            return;

        opacity += 0.01;

        planet.video.style.opacity = opacity;
        planet.header.style.opacity = opacity;
        planet.leftText.style.opacity = opacity;
        planet.rightText.style.opacity = opacity;
        planet.instruction.style.opacity = opacity;

        setTimeout (increasing, 10);
    }, 10);  

    setTimeout(function() {
        planet.permission = true;
    }, 1100);
}

function disappearance(planet) {
    if (planet.permission) {
        planet.permission = false;

        let opacity = 1;

        setTimeout(function decreasing() {
            if (opacity < 0)
                return;

            opacity -= 0.01;

            planet.video.style.opacity = opacity;
            planet.header.style.opacity = opacity;
            planet.leftText.style.opacity = opacity;
            planet.rightText.style.opacity = opacity;
            planet.instruction.style.opacity = opacity;

            setTimeout (decreasing, 10);
        }, 10);  

        setTimeout(function() {
            planet.video.classList.add('hidden');
            planet.header.classList.add('hidden');
            planet.leftText.classList.add('hidden');
            planet.rightText.classList.add('hidden');
            planet.instruction.classList.add('hidden');
        }, 1100);
    }
}

/*while (true) {
    setTimeout(function out() {
        console.log(window.innerHeight, window.innerHeight);
        setTimeout(out, 1000)
    }, 1000);
    
}*/