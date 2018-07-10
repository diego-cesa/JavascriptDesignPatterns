var repo = function(){

    var get = function(id){
        console.log('Getting project ' + id);
        return 'Project ' + id;
    }

    return {
        get: get
    }
}

module.exports = repo();