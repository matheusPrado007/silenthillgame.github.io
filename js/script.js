const james = document.querySelector('.james');
const nurse = document.querySelector('.nurse');
const demon = document.querySelector('.demon')
const endGame = document.querySelector('.reset');
const btnReset = document.createElement('button');

const jump = () => {
    james.classList.add('jump');

    setTimeout(() => {
        james.classList.remove('jump');
    }, 500);
}

const reset = () => { 

    btnReset.innerText = 'Reset';
    btnReset.style.width = '350px'
    btnReset.style.height = '50px'
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

    if (nursePosition <= 45 && nursePosition > 0
        && jamesPosition < 83) {
        nurse.style.animation = 'none'
        nurse.style.hidden = true;

        // james.style.animation = 'none'
        // james.style.bottom = jamesPosition + 'px';

        james.src = '../images/nurse.gif'
        james.style.borderRadius = '0%'
        james.style.width = '350px'
        james.style.height = '100%'

        reset();

        btnReset.addEventListener('touchstart', function () {
            location.reload();
        })

        clearInterval(loop);
    }

    setTimeout(() => {
        demon.style.width = '300px';
        demon.style.bottom = '0px'
        setTimeout(() => {
            demon.style.width = '500px';
            demon.style.bottom = '0px'
        }, 1000);
        
        setTimeout(() => {
            demon.style.width = '300px';
            demon.style.bottom = '0px'
         }, 1200);

        setTimeout(() => { 
            james.src = '../images/end.gif'
            james.style.borderRadius = '0%'
            james.style.width = '350px'
            james.style.height = '100%'
            reset();
            btnReset.addEventListener('touchstart', function () {
                location.reload();
        })
        }, 5000)
        
    }, 87000) 
}, 10)

document.addEventListener('touchstart' || 'click', jump);
