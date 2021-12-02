document.querySelectorAll('.counter-box').forEach(container => {
    const textarea = container.querySelector('textarea')
    let maxlength = textarea.getAttribute("maxlength");
    
    textarea.addEventListener('input', e => {
        container.querySelector('span').innerText = maxlength - e.target.value.length + "/" + maxlength + " characters"
    })
})