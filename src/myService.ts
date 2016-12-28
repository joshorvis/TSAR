import application = require('application');
import angularResource = require('angular-resource');

export interface Person {
    id?: number;
    email?: string;
}

export interface PersonResource extends Person, ng.resource.IResource<PersonResource> {
}

export interface PersonResourceClass extends ng.resource.IResourceClass<PersonResource> {
    additionalAction(person: Person): PersonResource;
}

application.factory('PersonService', function ($resource: ng.resource.IResourceService, apiUrl: string): PersonResourceClass {
    return <PersonResourceClass> $resource(apiUrl + '/person/:id', { id: "@id" }, {
        'additionalAction': { method: 'POST', url: apiUrl + '/person/:id/additionalAction' },
    });
});