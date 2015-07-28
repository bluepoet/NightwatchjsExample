exports.assertion = function(selector, length) {
    this.message =  this.message = "Testing if element " + selector + " occurs on the page " + length + " times.";

    this.expected = length;

    this.pass = function(value) {
        return value === this.expected;
    };

    this.failure = function(result) {
        var failed = (result === false || (result && result.status === -1));

        if(failed) {
            console.log("result failed!")
        }

        return failed;
    };

    this.command = function(callback) {
        return this.api.elements(this.client.locateStrategy, selector, callback);        
    };

    this.value = function(result) {
        return result.value.length;
    }
};