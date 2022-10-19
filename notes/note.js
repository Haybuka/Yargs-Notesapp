const fs = require('fs')
const chalk = require('chalk')
const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('./notes.json', { encoding: 'utf-8' }))
    } catch (e) {
        return []
    }
}
const saveNotes = notes => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('./notes.json', dataJson)
}
const getNotes = () => {

}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title)
    if (!duplicateNotes) {
        notes.push({
            title, body
        })
        console.log(chalk.green.bold('new note \"', title, '\" added'))
    } else {
        console.log(chalk.yellow('Note title \"', title, '\" is taken'))
    }

    saveNotes(notes)
}

const removeNotes = (title) => {
    const notes = loadNotes();
    let noteLeft = [];

    if (notes.length > 0) {
        noteLeft = notes.filter(note => note.title !== title)
        if (notes.length !== noteLeft.length) {
            console.log(chalk.bgGreen.white.bold('Note \"', title, '\" removed'))

            saveNotes(noteLeft)
        } else {
            console.log(chalk.red.inverse('Note \"', title, '\" not found'))

        }

    } else {
        console.log(chalk.red.inverse('No notes in db'))
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find(item => item.title === title)
    if (note !== undefined) {
        console.log(chalk.green.underline.bold(`Title - ${note.title}`))
        console.log(chalk.green(`${note.body}`))

    } else {
        console.log(chalk.red.inverse(title, ' not found'))
    }
}

const listNotes = () => {
    console.log(chalk.white('Your Notes'))
    const notes = loadNotes()
    notes.forEach((note, id) => console.log(chalk.green(`${id + 1} ${note.title}`)))
}

module.exports = {
    getNotes, removeNotes,
    addNotes, readNotes, listNotes
}