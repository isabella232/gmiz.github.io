function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function oneByOne(classname, start, step) {
    var cnt = start;
    var toplinks = document.getElementsByClassName(classname);
    for (i = 0; i < toplinks.length; i++) {
        toplinks[i].style.animationDelay = cnt + "s";
        cnt += step;
    }
}

function loadVideo() {
    var video = document.getElementById('homevid');
    video.load();
    video.addEventListener('loadeddata', function() {
        document.body.classList.remove('js-loading');
    });
}

function scrollWithOffset(id, offset){
    var element = document.getElementById(id);
    var offsetPosition = element.offsetTop + offset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}
