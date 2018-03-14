// ラッパーの高さ調整

export default () => {
    const wrapper = document.querySelector('.novel_view_wrapper');
    const body = document.querySelector('.novel_view_body');

    const w_width = wrapper.clientWidth;
    const b_width = body.clientWidth;
    const b_height = body.clientHeight;

    // カラム数の計算が上手くいかないから仕方ないね
    const columns = Math.ceil(b_width / w_width);
    const styles = window.getComputedStyle(wrapper);
    const gap = styles.columnGap ? parseInt(styles.columnGap) : 0;

    wrapper.style.columnCount = parseInt(columns);
    wrapper.style.height = (columns * b_height + (gap * columns * 2)) + 'px';
}