const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

//placeholders.forEach((placeholder) => console.log(placeholder))

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}




function dragstart(event) {
    const placeholder = event.target
    placeholder.classList.add('hold')
    setTimeout(() => {
        placeholder.classList.add('hide'), 0
    })

}

function dragend(event) {
    const placeholder = event.target
    placeholder.className = 'item'

}

function dragover(event) {
    event.preventDefault()

}

function dragenter(event) {
    const placeholder = event.target
    placeholder.classList.add('hovered')
    placeholder.innerHTML = item.innerHTML
}

function dragleave(event) {
    
    const placeholder = event.target
    placeholder.classList.remove('hovered')
    placeholder.innerHTML = ''
    
}

function dragdrop(event) {
    placeholder.innerHTML = ''
    const placeholder = event.target
    placeholder.classList.remove('hovered')
    placeholder.append(item)
    
}

