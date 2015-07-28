exports.command = function(idName, callback) {
    callback = callback || function() {};

    this.execute(function(idName) {
        return document.getElementById(idName).childElementCount;        
    }, [idName], function(result) {
        callback.call(this, result);
    });

    return this;
};