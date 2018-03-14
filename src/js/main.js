require('scss/style.scss');

import division from 'js/division';
import novel_height from 'js/novel_height';

const main = () => {
    division();
    novel_height();
};

main();

let resizeQueue;

window.addEventListener('resize', () => {
    resizeQueue = setTimeout(() => {
        clearTimeout(resizeQueue);
        novel_height();
    }, 500);
}, false);