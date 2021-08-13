let box = document.getElementById('box'),
    btn = document.querySelector('button');
    close = document.getElementById("close");

btn.addEventListener('click', function () {

    // if (box.classList.contains('show')) {
    //     box.classList.remove('visuallyshow');
    //     setTimeout(function () {
    //         box.classList.remove('show');
    //     }, 2000);
    // } else {
        box.classList.add('show');
        setTimeout(() => {
            box.classList.add('visuallyshow');
        }, 2);
    }, false);


close.addEventListener("click", function() {
    box.classList.remove('visuallyshow');
        setTimeout(function () {
            box.classList.remove('show');
        }, 2000);
})
