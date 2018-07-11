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


var UrgentTask = function(name, priority){
    Task.call(this, name);
    this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function(){
    console.log("notifying responsible");
}

UrgentTask.prototype.save = function(){
    this.notify();
    console.log('additional saving process..');
    Task.prototype.save.call(this);
}


var urgentTask = new UrgentTask('This is urgent', 1);
urgentTask.complete();
urgentTask.save();
