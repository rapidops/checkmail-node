<a href="https://checkmail.io/" target="_blank"><img src="https://checkmail.io/assets/1.0/images/checkmail_github_logo.png"/></a>

[Sign up][checkmail sign up] for a CheckMail account and visit our [developer site][checkmail dev site] for even more details.

# Node.js Client Library

The official Node.js binding for your CheckMail service.

## Prerequisites

Before using this library, you must have:

* A CheckMail Account, [sign up for a new account][checkmail sign up] or [login to CheckMail](https://checkmail.io/portal/login/)
* a valid CheckMail account SID and auth token, available from the [CheckMail Portal](https://checkmail.io/portal/login/)

## Installation

```
npm install checkmail
```

## Quickstart

### Verify an email address

    var client = require('checkmail')('your_account_sid', 'your_auth_token');

    client.verify.get('test@example.com').then(data => {

        console.log(data);

    }).catch(err => {

        console.log(err);
    });

That will output a JSON object that looks like this:

    {
        accept_all: false,
        country_code: '',
        country_name: '',
        disposable: false,
        domain: 'example.com',
        email: 'test@example.com',
        did_you_mean: '',
        free: false,
        localpart: 'test',
        reason: 'smtp_missing',
        result: 'risky',
        role: true,
        social_media: false
    }

## Documentation

Full API documentation is available from the [CheckMail developer site.][checkmail dev site]

## Release History

### v1.0.0
* Initial release

[checkmail sign up]:   https://checkmail.io/
[checkmail dev site]:  https://checkmail.io/docs/api/
