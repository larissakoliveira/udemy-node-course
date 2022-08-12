import chalk from 'chalk'
import loadNotes from './load-notes.js'

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

export default listNotes
