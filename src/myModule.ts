import application = require('application');
import angularUiBootstrap = require('angular-ui-bootstrap');
import myService = require('myService');

export interface MyPageCtrlScope {
    someData: string;
    someAction: () => void;
}

export class MyPageCtrl {

    constructor(public $scope: MyPageCtrlScope, private PersonService: myService.PersonResourceClass, private $modal: ng.ui.bootstrap.IModalService) {

        PersonService.additionalAction({}).$promise.then(
            (person) => {
                this.$scope.someData = person.email;
            });

        $scope.someAction = this.someAction.bind(this);
    }

    someAction() {
        this.$modal.open({
            templateUrl: 'dialog.html'
        }).result.then(
            () => {
                this.$scope.someData = 'something else';
            });
    }

}