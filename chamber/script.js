document.getElementById('updates').textContent = `Last Modified: ${document.lastModified}`;
// document.querySelector('.date').textContent = Date();
const now = new Intl.DateTimeFormat('en-US', { dateStyle: "full" }).format(new Date());
const headerDate = document.querySelector('.date span').innerText = now;
// document.getElementsByClassName('icon').addEventListener('click', displayOutput)

function displayOutput() {
    let clicking = document.querySelector('.links');
    let width = document.width
    if (clicking.style.display == 'block') {
        clicking.style.display = 'none';
    } else {
        clicking.style.display = 'block';
    }
}


window.onload = () => {
    let htmlElement = document.getElementsByTagName('html');
    let nav = document.querySelector('.links');


    if (htmlElement[0].offsetWidth >= 900) {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }

}