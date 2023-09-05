function calculateTriangleArea(){
    const base = getInputValue ('triangle-base');
    const height =getInputValue ('triangle-height');
     const area = 0.5*base*height;

     setElementInnerText('triangle-area',area);
     addToAreaCalculation('Triangle',area)
}
function calculateRactangleArea(){
    const width= getInputValue('ractangle-width');
    const length= getInputValue('ractangle-length');
    const area = width*length;
setElementInnerText('ractangle-area',area);
addToAreaCalculation('Ractangle',area)
}
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height =getInputValue('parallelogram-height')
    const area = base * height;

    setElementInnerText('parallelogram-area',area);
    addToAreaCalculation('Parallelogram',area)
}

function calculateRhombusArea(){
    const d1=getInputValue('rhombus-d1');
    const d2=getInputValue('rhombus-d2');

    const area = 0.5*d1*d2;
    setElementInnerText('rhombus-area',area);
    addToAreaCalculation('Rhombus',area)
}
function calculatePentagonArea(){
    const p= getInputValue('pentagon-p');
    const a=getInputValue('pentagon-a')

    const area= 0.5*p*a;
    setElementInnerText('pentagon-area',area);
    addToAreaCalculation('Pentagon',area)
}
function calculateEllipseArea(){
    const a=getInputValue('ellipse-a');
    const b=getInputValue('ellipse-b');

    const area = 3.141592653589793238462643383279502884197*a*b;
    setElementInnerText('ellipse-area',area)
    addToAreaCalculation('Ellipse',area)
}


//REUSEABLE FUNCTION 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);

    if(isNaN(value)){
        alert('Please Enter A Valid Number ')
        return;
    }
else{
    return value;
}
 
}

function setElementInnerText(elementId,area){
    const elementSpan = document.getElementById(elementId);
    elementSpan.innerText = area.toFixed(2);

}

// Adding Calculation 
function addToAreaCalculation(areaType,area){
    console.log(areaType+ ' '+ area);
    const calculationEntry = document.getElementById('calculation-entry');

const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML= `${count + 1}. ${areaType} = ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success hover:btn-warning">Convert</button></sup>`;

    calculationEntry.appendChild(p);
}
