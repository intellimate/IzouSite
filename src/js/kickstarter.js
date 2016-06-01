'use strict';


var kickstarterCrawler = require('kickstarter-crawler');


var config, project;


// Project configurations 
config = {
    url: 'https://www.kickstarter.com/projects/knocki/knocki-make-any-surface-smart?ref=category_popular',
};


// Initialize the crawler 
project = new kickstarterCrawler.project(config);

// Make request (crawl)
project.request(function onRequest (err, data) {

    // Something broke
    if (err) {
        console.log(err);
        return;
    }

    // Log crawled data
    console.log(data);

});