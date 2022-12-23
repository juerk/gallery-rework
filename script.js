const dropDown = document.getElementById('box-dropdown')
const mirrorsDropped = document.getElementById('mirrors-dropped')
let dropDownSymbol = document.getElementById('box-dropdown')
mirrorsDropped.style.display = 'none';
dropDownSymbol.innerHTML = '+'





// function toggleDropDown() {
//   return (mirrorsDropped.style.display === 'none') ? mirrorsDropped.style.display = 'block' : mirrorsDropped.style.display = 'none'
// }

function toggleDropDown() {
  if (mirrorsDropped.style.display === 'none') {
    mirrorsDropped.style.display = 'block'
    dropDownSymbol.innerHTML = '-'
  } else {
    mirrorsDropped.style.display = 'none'
    dropDownSymbol.innerHTML = '+'
  }
}


  

