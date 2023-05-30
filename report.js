const newman = require('newman');

newman.run({
    //collection: require('./collection/dmoney.json'),
    collection: 'https://api.postman.com/collections/21786511-0df7f756-90e6-4965-9fe5-77a59454eccc?access_key=PMAT-01H1Q1PVE49E68JX5GSXDRFFA2',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});