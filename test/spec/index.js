//
// This file is part of the CheckMail Node Wrapper package.
//
// (c) Mike Pultz <mike@mikepultz.com>
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//

var chai = require('chai'),
    expect = chai.expect,
    checkmail = require('../../lib/index');

describe('CheckMail Library', function()
{
    it('should be a constructor', function()
    {
        expect(checkmail).to.be.a('function');
    });

    it('should required API credentials', function()
    {
        try
        {
            client = new checkmail();
        } catch(err)
        {
            expect(err).to.equal('invalid API account SID or auth token provided.');
        }
    });
});
