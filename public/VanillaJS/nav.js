// - Create Elements
const h1 = document.createElement('h1')
const nav = document.createElement('nav')
const logo = document.querySelector('#js-logo')
const ul = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
const li4 = document.createElement('li')
const a1 = document.createElement('a')
const a2 = document.createElement('a')
const a3 = document.createElement('a')
const a4 = document.createElement('a')
const dropdownContainer = document.createElement('div')
const dropdownUl = document.createElement('ul')
const dropdownLi1 = document.createElement('li')
const dropdownLi2 = document.createElement('li')
const dropdownLi3 = document.createElement('li')
const dropdownLi4 = document.createElement('li')
const dropdownA1 = document.createElement('a')
const dropdownA2 = document.createElement('a')
const dropdownA3 = document.createElement('a')
const dropdownA4 = document.createElement('a')

const anchors = [a1, a2, a3, a4]
const listItems = [li1, li2, li3, li4]

const dropdownAnchors = [dropdownA1, dropdownA2, dropdownA3, dropdownA4]
const dropdownListItems = [dropdownLi1, dropdownLi2, dropdownLi3, dropdownLi4]

// - Add Attributes
h1.textContent = 'Vanilla JS Navigation'
ul.classList.add('main-nav')
anchors.forEach((anchor, index) => {
    anchor.textContent = `Link ${index + 1}`
    anchor.href = '/'
})
listItems.forEach((listItem, index) => {
    listItem.addEventListener('mouseenter', handleMouseEnter)
    listItem.addEventListener('mouseleave', handleMouseLeave)
})
dropdownContainer.classList.add('dropdown-container')
dropdownUl.classList.add('dropdown-nav')
dropdownContainer.append(dropdownUl)
dropdownListItems.forEach((dropdownListItem, index) => {
    dropdownUl.append(dropdownListItem)
    dropdownListItem.append(dropdownAnchors[index])
})

// - Functionality
function handleMouseEnter(event) {
    const linkText = event.target.firstChild.textContent
    dropdownAnchors.forEach((anchor, index) => {
        anchor.textContent = `${linkText}.${index + 1}`
        anchor.href = '/'
    })
    event.target.append(dropdownContainer)
}

function handleMouseLeave(event) {
    dropdownContainer.remove()
}

// - Append Elements to DOM
document.querySelector('#vanilla-nav').append(h1, nav)
nav.append(logo, ul)
listItems.forEach((listItem, index) => {
    ul.append(listItem)
    listItem.append(anchors[index])
})
