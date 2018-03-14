// 文節を文節に
export default (text) => {
    const parseNodes = text.split(/<br>/);
    const shapingNodes = [];

    for (let node of parseNodes) {
        if (node.trim().length <= 0) {
            shapingNodes.push('<br>');
            continue;
        }
        const div = document.createElement('span');
        div.classList.add('paragraph');
        div.innerHTML = node;

        shapingNodes.push(div.outerHTML);
    }

    return shapingNodes.join('');
}