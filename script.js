let coinCount = 0;let xpCount = 0;
window.addEventListener('load', function() {
    // Simulate loading time    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';        document.getElementById('main-screen').style.display = 'flex'; // исправлено на flex для корректного отображения
    }, 3000); // Change the timeout duration as needed
    document.getElementById('tap-square').addEventListener('click', function() {        coinCount++;
        xpCount++;        document.getElementById('coin-counter').innerText = coinCount;
        document.getElementById('xp-counter').innerText = xpCount;        showCoinAnimation();
        showXpAnimation();    });
});
function showCoinAnimation() {    const animation = document.createElement('div');
    animation.classList.add('coin-animation');    animation.innerText = '+1';
    document.body.appendChild(animation);
    setTimeout(() => {        animation.remove();
    }, 1000);}
function showXpAnimation() {
    const animation = document.createElement('div');    animation.classList.add('xp-animation');
    animation.innerText = '+1 XP';    document.body.appendChild(animation);
    setTimeout(() => {
        animation.remove();    }, 1000);
}
