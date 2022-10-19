const fs = require('fs');
const chalk = require('chalk')
const yargs = require('yargs')

const { addNotes, listNotes, removeNotes, readNotes } = require('./notes/note')

//add command
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        addNotes(argv.title, argv.body)
    }

})

//remove command
yargs.command({
    command: 'remove',
    description: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        removeNotes(argv.title)
    }
})

//list command
yargs.command({
    command: 'list',
    description: 'list notes',
    handler: () => {
        listNotes()
    }
})

//read command
yargs.command({
    command: 'read',
    description: 'read a note',
    builder: {
        title: {
            demandOption: true,
            describe: 'Note title',
            type: 'string'
        }
    },
    handler: (argv) => { readNotes(argv.title) }
})

yargs.parse()

