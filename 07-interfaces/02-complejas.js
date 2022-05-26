"use strict";
(function () {
    var client = {
        name: 'Fernando',
        age: 26,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress: function (id) {
            return this.address.city;
        }
    };
    console.log(client.address.zip);
});
