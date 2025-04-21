
const demoBox = document.getElementById('demoBox');
const paddingBox = document.getElementById('paddingBox');
const borderBox = document.getElementById('borderBox');
const marginBox = document.getElementById('marginBox');

const paddingControl = document.getElementById('paddingControl');
const marginControl = document.getElementById('marginControl');
const borderControl = document.getElementById('borderControl');
const boxSizingControl = document.getElementById('boxSizingControl');

const paddingValue = document.getElementById('paddingValue');
const marginValue = document.getElementById('marginValue');
const borderValue = document.getElementById('borderValue');

paddingControl.addEventListener('input', () => {
  paddingBox.style.padding = `${paddingControl.value}px`;
  paddingValue.textContent = `${paddingControl.value}px`;
});

marginControl.addEventListener('input', () => {
  marginBox.style.padding = `${marginControl.value}px`;
  marginValue.textContent = `${marginControl.value}px`;
});

borderControl.addEventListener('input', () => {
  borderBox.style.borderWidth = `${borderControl.value}px`;
  borderValue.textContent = `${borderControl.value}px`;
});

boxSizingControl.addEventListener('change', () => {
  demoBox.style.boxSizing = boxSizingControl.value;
});