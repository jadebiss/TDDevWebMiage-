const boxMouse = document.getElementById('boxMouse');
const mousePoint = document.getElementById('mousePoint');
const result = document.getElementById('result');

boxMouse.addEventListener('mousemove', (event) => {
    const boxRect = boxMouse.getBoundingClientRect();
    
    const mouseX = event.clientX - boxRect.left;
    const mouseY = event.clientY - boxRect.top;
    
    result.textContent = `X: ${Math.round(mouseX)}px | Y: ${Math.round(mouseY)}px`;
    
    mousePoint.style.left = mouseX + 'px';
    mousePoint.style.top = mouseY + 'px';
});