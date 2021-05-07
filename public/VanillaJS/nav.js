// - Create Elements
const h1 = document.createElement('h1')
const nav = document.createElement('nav')
const ul = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
const li4 = document.createElement('li')
const a1 = document.createElement('a')
const a2 = document.createElement('a')
const a3 = document.createElement('a')
const a4 = document.createElement('a')

// - Add textContent
h1.textContent = 'hello world!'
ul.className = 'main-nav'
a1.textContent = 'Link 1'
a2.textContent = 'Link 2'
a3.textContent = 'Link 3'
a4.textContent = 'Link 4'

// - Append Elements
document.body.append(h1, nav)
nav.append(ul)
ul.append(li1, li2, li3, li4)
li1.append(a1)
li2.append(a2)
li3.append(a3)
li4.append(a4)
