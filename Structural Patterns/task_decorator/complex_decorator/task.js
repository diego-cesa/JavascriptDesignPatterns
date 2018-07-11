var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log('saving Task: ' + this.name);
}

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

//Decorating just adding atributes to an existent instance
var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function(){
    console.log('notifying responsible');
};
urgentTask.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}

urgentTask.complete();
urgentTask.save()

