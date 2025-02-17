const text = document.getElementById('text');

const textcolor = document.getElementById('textcolor');
const textFontSize = document.getElementById('fontsize');
const fontsel = document.getElementById('fontselector');

function updateTextStyle() {
    text.style.color = textcolor.value;
    text.style.fontSize = textFontSize.value + 'px';
    text.style.fontFamily = fontsel.value;
}
textcolor.addEventListener('input', updateTextStyle);
textFontSize.addEventListener('input', updateTextStyle);
fontsel.addEventListener('change', updateTextStyle);