//
// This file is part of the CheckMail Node Wrapper package.
//
// (c) Mike Pultz <mike@mikepultz.com>
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//

'use strict';

var request = require('request');
var promise = require('./Promise');
var Client = require('./Client');

//
// global settings
//
var defaults = {

    api_url: 'https://api.checkmail.io/'
};

//
// the main client
//
Client = function(_account_sid, _api_token, _options)
{
    if ( (!_account_sid) || (!_api_token) )
    {
        throw 'invalid API account SID or auth token provided.';
    }

    //
    // set up the local object
    //
    this.optionss       = _options;
    this.api_url        = defaults.api_url;
    this.account_sid    = _account_sid;
    this.api_token      = _api_token;

    //
    // the resources
    //
    this.verify = require('./API/Verify')(this);
};

Client.prototype.request = function(_options, _callback)
{
    //
    // build the URI based on the request URL
    //
    _options.uri = this.api_url + _options.uri;

    //
    // response data is always JSON
    //
    _options.json = true;

    //
    // build the auth headers
    //
    var auth = "Basic " + new Buffer(this.account_sid + ":" + this.api_token).toString("base64");
    _options.headers = {

        "Authorization": auth
    };

    //
    // always use strict SSL
    //
    _options.strictSSL = true;

    //
    // used gzip
    //
    _options.gzip = true;

    //
    // make the request and handle the call-back
    //
    return new promise(function(_resolve, _reject)
    {
        request(_options, function(_err, _res, _body)
        {
            if (_err)
            {
                _reject(_err);

            } else
            {
                _resolve(_body);
            }
        });

    }).run_callback(_callback);
};
Client.prototype.get = function(_options, _callback)
{
    _options.method = 'GET';
    return this.request(_options).run_callback(_callback);
};
Client.prototype.post = function(_options, _callback)
{
    _options.method = 'POST';
    return this.request(_options).run_callback(_callback);
};

module.exports = Client;
