var task = {
    title: 'My task',
    description: 'My Description'
}

Object.defineProperty(task, 'toString', {
    value: function(){
        return this.title + ' ' + this.description;
    },
    writable: false,    // allow key to be redefined. E.g.: task.toString = 'hi'
    enuberable: false,   // show key on logs
    configurable: false  // allow reconfiguration of this properties
});

var urgentTask = Object.create(task);
console.log(urgentTask.toString());

Object.defineProperty(urgentTask, 'toString', {
    value: function(){
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(urgentTask.toString())