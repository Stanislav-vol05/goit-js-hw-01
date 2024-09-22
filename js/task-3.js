"use strict";

function getElementWidth(content, padding, border) {
  
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2; // Оскільки padding застосовується з обох сторін
  const borderWidth = parseFloat(border) * 2;   // Оскільки border також з обох сторін
  
  const totalWidth = contentWidth + paddingWidth + borderWidth;
  
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));