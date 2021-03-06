var repo = function(){
    var db = {}
    var get = function(id){
        console.log('Getting task ' + id);
        return {
            name: 'new task from database'
        }
    }

    var save = function(task){
        console.log('Saving ' + task.name);
    }

    return {
        get: get,
        save: save
    }
}

module.exports = repo();