var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('http://192.168.0.16:8303/')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .click('.shop-callout a')
    .getTitle().then(function(title){
        console.log('Title is: ' +title);
    })
    .getUrl().then(function(url) {
        console.log('Url is: ' + url);
    })
    .end();