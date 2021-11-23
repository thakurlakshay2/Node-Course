// import validator from 'validator'
// const add=require('./utils');
const validator=require('validator');
const chalk=require('chalk');
const yargs = require('yargs');
const notes=require('./notes.js');
// const sum=add(4,-2);
// console.log(sum);

// // console.log(validator.isURL('https://www.youtube.com/'));
// console.log(chalk.green.inverse.italic.bold('SUCCESS!'));

    // const command=process.argv[2];
    // console.log(process.argv);
// console.log(yargs.argv);

yargs.version('1.1.0');

//create add command
yargs.command({
    command:'add',
    describe:'adding a new note',
    builder:{
        title:{
            describe:'Note tiltle',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=> {
        // console.log('Title: '+argv.title+' \nBody: '+argv.body);
        notes.addNote(argv.title,argv.body);
    }
});

//create remove command
yargs.command({
    command:'remove',
    describe:'removing a new note',
    builder:{
        title:{
            describe:'Note tiltle',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=> {
        console.log('removing a new note');
        notes.removeNote(argv.title);
    }
});
//read
yargs.command({
    command:'read',
    describe:'reading a new note',
    builder:{
        title:{
            describe:'Read Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=> {
        notes.readNote(argv.title);
    }
});
//list
yargs.command({
    command:'list',
    describe:'listing a new note',
    handler:function() {
        notes.listNotes();
    }
});

yargs.parse();
// console.log(yargs.argv);