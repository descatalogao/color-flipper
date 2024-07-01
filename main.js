const palette={
'#63474D':'Rose Ebony',
'#AA767C':'Old Rose',
'#D6A184':'Buff',
'#FFA686':'Atomic tangerine',
'#FEC196':'Peach',
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(palette).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = palette[color];

    colorPickerSelect.append(option);
  })
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {

    const newColor = event.target.value; 
    //Almacenamos el código de color

 
    

    document.body.style.backgroundColor = newColor;

    const colorName = document.querySelector('#colorname')
    console.log(colorName)
    
    const colorNameText = `${palette[newColor]} | ${newColor}` 
    colorName.innerText = palette[newColor] ? colorNameText : "-";
    //Le aplicamos el background color con el código de color seleccionado
    
  });
};


addOptionsToColorPicker()
addEventListenerToColorPicker()


