function duplicateMenu() {
    //get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')
    
    //create the new list items for the bottom of the page
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        let newNav = document.querySelector('#smallNavArea')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        //copy the textContent from upper menu to the menu
        newLink.textContent = menuItem.text
        //append children to make them appear in the DOM
        newNav.appendChild(newList)
        newList.appendChild(newLI)
        newLI.appendChild(newLink)
    })
}

duplicateMenu()