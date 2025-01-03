const startLink = document.getElementById('startLink');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');


const divStart = document.getElementById('divStart');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

function removeBgCollar() {
    divStart.classList.remove('bg-amber-200');
    div1.classList.remove('bg-amber-200');
    div2.classList.remove('bg-amber-200');
    div3.classList.remove('bg-amber-200');
}

document.addEventListener('click', (event) => {
    if (event.target === startLink) {
        removeBgCollar();
        divStart.classList.add('bg-amber-200');

    } else if (event.target === link1) {
        removeBgCollar();
        div1.classList.add('bg-amber-200');

    } else if (event.target === link2) {
        removeBgCollar();
        div2.classList.add('bg-amber-200');

    } else if (event.target === link3) {
        removeBgCollar();
        div3.classList.add('bg-amber-200');

    }
});

