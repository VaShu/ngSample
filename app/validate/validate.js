angular.module('validate', ['ngRoute', 'jcs-autoValidate']);

    function DemoCtrlFn(bootstrap3ElementModifier) {
        var self = this;
        self.model = {};
        self.genders = ['Male', 'Female', 'Unknown'];

        bootstrap3ElementModifier.enableValidationStateIcons(true);

        self.onSubmit = function (frmCtrl) {
            alert('submitted');
        };
    }

    DemoCtrlFn.$inject = [
        'bootstrap3ElementModifier'
    ];


    function RunFn($routeProvider) {
        $routeProvider.when('/', {
            controller: 'demoCtrl',
            controllerAs: 'vm',
            templateUrl: 'formTemplate.tmpl.html'
        });
    }

    RunFn.$inject = [
        '$routeProvider'
    ];

    .controller('demoCtrl', DemoCtrlFn);
    .config(RunFn);

