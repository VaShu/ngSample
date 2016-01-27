angular.module('treebuilder', ['treeView']);
    .controller('treeBuildCtrl', function($scope){
        $scope.roleList = [
            { "roleName" : "Getting started", "roleId" : "role1", "children" : [
                { "roleName" : "Introducing Angular", "roleId" : "role11", "collapsed" : true, "children" : [
                    { "roleName" : "What is Angular.js ?",      "roleId" : "role111", "children" : [] },
                    { "roleName" : "How Angular works",         "roleId" : "role112", "children" : [] },
                    { "roleName" : "A simple Angular web page", "roleId" : "role113", "children" : [] }
                ]},
                { "roleName" : "Building up a simple application", "roleId" : "role12", "collapsed" : true, "children" : [
                    { "roleName" : "1.Formatting an html element", "roleId" : "role121", "children" : [
//                        { "roleName" : "subUser2-1-1", "roleId" : "role1211", "children" : [] },
//                        { "roleName" : "subUser2-1-2", "roleId" : "role1212", "children" : [] }
                    ]},
                    { "roleName" : "2.Adding control to the display",  "roleId" : "role122", "children" : []},
                    { "roleName" : "3.Adding a data edit facility",    "roleId" : "role123", "children" : []},
                    { "roleName" : "4.Adding a separate edit page",    "roleId" : "role124", "children" : []},
                    { "roleName" : "5.Controlling permitted values",   "roleId" : "role125", "children" : []},
                    { "roleName" : "6.Adding Save and Cancel buttons", "roleId" : "role126", "children" : []},
                    { "roleName" : "7.Adding Add and Delete buttons",  "roleId" : "role127", "children" : []},
                    { "roleName" : "8.Read/write via MySQL database",  "roleId" : "role128", "children" : []}
                ]}
            ]}
            //,
            //{ "roleName" : "HTML extensions", "roleId" : "role2", "children" : [
            //    { "roleName" : "subAdmin1", "roleId" : "role11", "collapsed" : true, "children" : [] },
            //    { "roleName" : "subAdmin2", "roleId" : "role12", "children" : [
            //        { "roleName" : "subAdmin2-1", "roleId" : "role121", "children" : [
            //            { "roleName" : "subAdmin2-1-1", "roleId" : "role1211", "children" : [] },
            //            { "roleName" : "subAdmin2-1-2", "roleId" : "role1212", "children" : [] }
            //        ]}
            //    ]}
            //]},
            //
            //{ "roleName" : "Guest", "roleId" : "role3", "children" : [
            //    { "roleName" : "subGuest1", "roleId" : "role11", "children" : [] },
            //    { "roleName" : "subGuest2", "roleId" : "role12", "collapsed" : true, "children" : [
            //        { "roleName" : "subGuest2-1", "roleId" : "role121", "children" : [
            //            { "roleName" : "subGuest2-1-1", "roleId" : "role1211", "children" : [] },
            //            { "roleName" : "subGuest2-1-2", "roleId" : "role1212", "children" : [] }
            //        ]}
            //    ]}
            //]}
        ];

        //roleList1 to treeview
        //$scope.roleList = $scope.roleList1;

    });