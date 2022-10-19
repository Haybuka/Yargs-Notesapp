const fs = require('fs');
const chalk = require('chalk')
const {addNotes,listNotes,removeNotes, readNotes} = require('./notes/note')
const yargs = require('yargs')

yargs.command({
    command : 'add',
    describe : 'add a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption:true,
            type:'string'
        },
        body : {
            describe : 'Note Body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv) => {
       addNotes(argv.title,argv.body)
    }

})
yargs.command({
    command : 'remove',
    description : 'remove a note',
    handler : (argv) => {
        removeNotes(argv.title)
    }
})
yargs.command({
    command : 'list',
    description : 'list notes',
    handler : () => {
        listNotes()
    }
})
yargs.command({
    command : 'read',
    description : 'read a note',
    builder : {
        title : {
            demandOption : true,
            describe : 'Note title',
            type : 'string'
        }
    },
    handler : (argv) => {readNotes(argv.title)}
})

yargs.parse()

