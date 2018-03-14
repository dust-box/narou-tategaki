// DOMの書き換え
import paragraph from 'js/paragraph';

export default () => {
    const honbun = document.querySelector('#novel_honbun');
    const text = honbun.innerHTML;

    const sharpingText = paragraph(text);

    const body = document.createElement('div');
    body.classList.add('novel_view_body');
    body.innerHTML = sharpingText;

    const wrapper = document.createElement('div');
    wrapper.classList.add('novel_view_wrapper');

    wrapper.appendChild(body);
    
    honbun.innerHTML = '';
    honbun.appendChild(wrapper);
}