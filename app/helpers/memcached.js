var Memcached = require('memcached'),
    config = require('config'),
    memcached = new Memcached(config.memcached.server),
    Q = require("q");

/**
 *  yield memcached.get (key, cb)
 *  yield memcached.set (key, value, lifetime, cb)
 *  yield memcached.del (key, cb)
 */

module.exports = {
    /**
     *
     * @param key
     * @returns {promise|*|Q.promise}
     */
    get: function (key) {
        var deferred = Q.defer();
        memcached.get(key, function (err, value) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(value);
            }
        });

        return deferred.promise;
    },

    /**
     *
     * @param key
     * @param value
     * @param lifetime
     * @returns {promise|*|Q.promise}
     */
    set: function (key, value, lifetime) {
        var deferred = Q.defer();
        memcached.set(key, value, lifetime, function (err, value) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(value);
            }
        });
        return deferred.promise;
    },

    /**
     *
     * @param key
     * @returns {promise|*|Q.promise}
     */
    del: function (key) {
        var deferred = Q.defer();
        memcached.del(key, function (err, value) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(value);
            }
        });

        return deferred.promise;
    }

};