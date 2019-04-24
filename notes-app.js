let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        editedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener('change', (e) => {
    console.log(e.target.value)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
notes = JSON.parse(e.newValue)
renderNotes(notes, filters)
    }
})

const birthday = moment()
birthday.year(1979).month(3).date(1)

console.log(birthday.format('MMM D, YYYY'))
