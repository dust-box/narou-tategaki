// DOMの書き換え

export default () => {
    const honbun = document.querySelector('.novel_view');
    const text = honbun.innerHTML;

    const body = document.createElement('div');
    body.classList.add('novel_view_body');
    body.innerHTML = text;

    const wrapper = document.createElement('div');
    wrapper.classList.add('novel_view_wrapper');

    wrapper.appendChild(body);
    
    honbun.innerHTML = '';
    honbun.appendChild(wrapper);
}