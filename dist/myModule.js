define(["require", "exports"], function (require, exports) {
    "use strict";
    var MyPageCtrl = (function () {
        function MyPageCtrl($scope, PersonService, $modal) {
            var _this = this;
            this.$scope = $scope;
            this.PersonService = PersonService;
            this.$modal = $modal;
            PersonService.additionalAction({}).$promise.then(function (person) {
                _this.$scope.someData = person.email;
            });
            $scope.someAction = this.someAction.bind(this);
        }
        MyPageCtrl.prototype.someAction = function () {
            var _this = this;
            this.$modal.open({
                templateUrl: 'dialog.html'
            }).result.then(function () {
                _this.$scope.someData = 'something else';
            });
        };
        return MyPageCtrl;
    }());
    exports.MyPageCtrl = MyPageCtrl;
});
//# sourceMappingURL=myModule.js.map