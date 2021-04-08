const twitt = document.querySelector(".twitt");
const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    twitt.innerHTML = `<a class="twitter-timeline" href="https://twitter.com/ResonateAU?ref_src=twsrc%5Etfw">Tweets by ResonateAU</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
})