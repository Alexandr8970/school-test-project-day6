'use script'

var memcached = require('../helpers/redis');

(function(){

    module.exports = {

        getAction: function * getAction(next) {


            yield next;
        },

        postAction: function * postAction(next) {


            yield next;
        },

        deleteAction: function * deleteAction(next) {


            yield next;
        }
    };
}());