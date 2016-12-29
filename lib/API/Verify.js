//
// This file is part of the CheckMail Node Wrapper package.
//
// (c) Mike Pultz <mike@mikepultz.com>
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//

'use strict';

module.exports = function(_client)
{
    const api = 'verify';

    var object = {

        get: function(_address, _callback)
        {
            var options = {
                uri: api,
                form: { address: _address }
            };

            return _client.post(options).run_callback(_callback);
        }
    };

    return object;
};
