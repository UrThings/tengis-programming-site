import { hiceeluud } from "./hiceeliin-medeelel.js";
import { tusuluud } from "./tusuliin-medeelel.js";

let orluulalt1='';

hiceeluud.forEach((hicheel) => {
  orluulalt1 += `
  <div class="lessons">
        <a href="video.html">
        <div class="image">
        <a data-number="${hicheel.number}" href="video.html"><img class="zurag js-hiceeliin-button" src="${hicheel.image}" alt="hicheel"></a> 
        </div>
        </a>
        <div class="title">
          ${hicheel.title}
        </div>
        <div class="episode-number">
          ${hicheel.name}
        </div>
      </div>
  `
});



document.querySelector('.main').innerHTML = orluulalt1;

let orluulalt2='';

tusuluud.forEach((tusul) => {
  orluulalt2 +=`
  <div class="lessons">
        <a class="js-add-to-page" href="video.html">
        <div class="image">
        <a href="video.html"><img class="zurag js-hiceeliin-button"  src="${tusul.image}" alt="hicheel"></a>
        </div>
        </a>
        <div class="title">
          ${tusul.title}
        </div>
        <div class="episode-number">
          ${tusul.name}
        </div>
      </div>
  `
});

document.querySelector('.main2').innerHTML = orluulalt2;







