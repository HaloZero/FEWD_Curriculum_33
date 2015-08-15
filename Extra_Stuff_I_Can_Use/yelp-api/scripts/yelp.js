function yelpSearch(yelp_url, data, success, failure) {
    var httpMethod = 'GET';

    var settings = {
      url: yelp_url,
      data: data,
      dataType: 'json',
      success: success,
      fail: failure
    };

    $.ajax(settings);
}

function runExample() {
    for (var i = 0; i < 5; i++) {
        var offset = i * 20;
        yelpSearch(
            "https://yelpapiwrapper.herokuapp.com/search", 
            {'term' : 'chinese', 'location' : 'San Francisco', 'offset': offset},
            function (response) { 
                var names = [] 
                response.businesses.forEach(function (restaurant, index) {
                    names.push(restaurant.name);
                });
                console.log(names); 
            },
            null
        )
    }    
}

runExample()