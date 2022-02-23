let heading = document.querySelector('#heading');

heading.addEventListener('click', (e) => {
    let body = document.querySelector('body')
    body.classList.add('darkMode')
    console.log('click')
})
