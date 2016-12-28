define(["require", "exports", "application"], function (require, exports, application) {
    "use strict";
    application.factory('PersonService', function ($resource, apiUrl) {
        return $resource(apiUrl + '/person/:id', { id: "@id" }, {
            'additionalAction': { method: 'POST', url: apiUrl + '/person/:id/additionalAction' },
        });
    });
});
//# sourceMappingURL=myService.js.map