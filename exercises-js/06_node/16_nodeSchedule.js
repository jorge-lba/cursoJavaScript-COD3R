const schedule = require('node-schedule');

const assignment = schedule.scheduleJob('*/5 * 18 * * 3', function(){
    console.log('executando Tarefa 1!', new Date().getSeconds());
})

setTimeout(function(){
    assignment.cancel()
    console.log('Cancelando assigment');
},20000)

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1,5)];
rule.hour = 18;
rule.second = 55;

const assigment2 = schedule.scheduleJob(rule,function(){
    console.log('Executando tarefa 2!', new Date().getSeconds());
})