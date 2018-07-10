var repo = function(){

    var get = function(id){
        console.log('Getting user ' + id);
        return 'User ' + id;
    }

    return {
        get: get
    }
}

module.exports = repo();