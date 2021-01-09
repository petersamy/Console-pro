const i = require('./note')
const yargs = require('yargs')
yargs.command({
    command:'add',
    describe:'To add Student',
    builder:{
        id:{
            demandOption:true,
            describe:'id of student',
            type:'number'
        },
        name:{
            demandOption:true,
            describe:'name of student',
            type:'string'
        },
        grade:{
            demandOption:true,
            describe:'grade of student',
            type:'number'
        },
        comment:{
            describe:'comment about student',
            type:'string'
        }
    },
    handler:function(argv){
        i.addSudent(argv.id,argv.name,argv.grade,argv.comment)

    }

}),

yargs.command({
    command:'delete',
    describe:'For Delete any student',
    builder:{
        id:{
            demandOption:true,
            describe:'id of student',
            type:'number'
        }
    },
    handler:function(argv){
        i.deleteStudent(argv.id)
    }

}),
yargs.command({
    command:'read',
    describe:'For read any student Data',
    builder:{
        id:{
            demandOption:true,
            describe:'id of student',
            type:'number'
        }
    },
    handler:function(argv){
        i.readStudent(argv.id)

    }

}),
yargs.command({
    command:'list',
    describe:'For list all student',
    handler:function(){
        i.listStudent()
    }

}) 
console.log(yargs.argv)
yargs.parse()

