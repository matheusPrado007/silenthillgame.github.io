const james = document.querySelector('.james');
const nurse = document.querySelector('.nurse');
const demon = document.querySelector('.demon')
const endGame = document.querySelector('.reset');
const btnReset = document.createElement('button');
const check = document.querySelector('#check');
const audio = document.querySelector('#audio');
const board = document.querySelector('.game-board');
const selo = document.querySelector('.selo')

const jump = () => {
    james.classList.add('jump');

    setTimeout(() => {
        james.classList.remove('jump');
    }, 500);
}

const reset = () => {

    btnReset.innerText = 'Reset';
    btnReset.style.width = '95%'
    btnReset.style.height = '5%'
    btnReset.style.borderRadius = '100px'
    btnReset.style.marginLeft = '5px'
    btnReset.style.backgroundColor = 'red'
    btnReset.style.color = 'black'
    endGame.appendChild(btnReset);
}

const loop = setInterval(() => {
    const nursePosition = nurse.offsetLeft;
    const demonPosition = demon.offsetLeft;
    const jamesPosition = +window.getComputedStyle(james).bottom.replace('px', '');

    if (nursePosition <= 39 && nursePosition > 35
        && jamesPosition < 72) {
        nurse.style.animation = 'none'
        nurse.style.hidden = true;

        james.style.animation = 'none'
        // james.style.bottom = jamesPosition + 'px';

        james.src = '../images/nurse.gif'
        james.style.borderRadius = '0%'
        james.style.width = '95%'
        james.style.height = '100%'

        reset();

        btnReset.addEventListener('click', function () {
            location.reload();
        })

        clearInterval(loop);
    }

    setTimeout(() => {
        demon.style.width = '70%';
        demon.style.bottom = '0px'
        demon.style.opacity = '1'
        demon.style.animation = 'none'
        board.style.backgroundColor = 'black'
        selo.style.marginLeft = '0px'
        selo.style.opacity = '1'
        selo.style.borderRadius = '100%'
        james.style.opacity = '0.5'
        setTimeout(() => {
            demon.style.width = '90%';
            demon.style.bottom = '0px'
            demon.style.opacity = '1'
        }, 1000);
        setTimeout(() => {
            demon.style.width = '70% ';
            demon.style.bottom = '0px'
            demon.style.opacity = '1'
        }, 1200);
        setTimeout(() => {
            demon.style.width = '100% ';
            demon.style.bottom = '0px'
            demon.style.opacity = '1'
        }, 1300);

        setTimeout(() => {
            james.src = '../images/end.gif'
            james.style.borderRadius = '0%'
            james.style.width = '100%'
            james.style.height = '100%'
            reset();
            btnReset.addEventListener('click', function () {
                location.reload();
            })
        }, 7000)
    }, 87000)
}, 10)

const soundOn = () => {
    if (check.checked === true) {
        return audio.autoplay = false;
    }
    return audio.autoplay = true;
}

soundOn();

document.addEventListener('click', jump);
