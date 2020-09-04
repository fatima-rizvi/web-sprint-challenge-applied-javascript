// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //Instantiating elements
    const pageHeader = document.createElement('div')
    const date = document.createElement('span')
    const pageTitle = document.createElement('h1')
    const temp = document.createElement('span')
    //Setting class names, attributes, and text
    //Attributes and text
    date.textContent = 'MARCH 28, 2020'
    pageTitle.textContent = 'Lambda Times'
    temp.textContent = '98°'
    //Class names
    pageHeader.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')
    //Creating the hierarchy
    pageHeader.appendChild(date)
    pageHeader.appendChild(pageTitle)
    pageHeader.appendChild(temp)

    return pageHeader
}

const headerContainer = document.querySelector('.header-container');
const myHeader = Header()
headerContainer.appendChild(myHeader);