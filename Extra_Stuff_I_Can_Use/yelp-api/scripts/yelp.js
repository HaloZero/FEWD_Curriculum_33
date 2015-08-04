var oauth = OAuth({
    consumer: {
        public: 'rR3CLfZuHXmWmJG-lILihw',
        secret: 'Ij9sMs0oVw74qsL3roudsv4NGi0'
    },
    signature_method: 'HMAC-SHA1'
});


// oauth.authorize(request, token);

var request_data = {
    url: 'http://api.yelp.com/v2/search?term=food&location=San+Francisco',
    method: 'GET'
};

var token = {
    public: 'e1dL3nPv577dK4KG7UKuU78b3bAMlUj0',
    secret: 'DMBdjQCLXBoSqE9aTIcfao8NUE8'
};

$.ajax({
    url: request_data.url,
    type: request_data.method,
    data: oauth.authorize(request_data, token),
    dataType: 'jsonp',
    jsonp: false,
    cache: true
}).done(function(data) {
    //process your data here
});