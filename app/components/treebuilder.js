//angular.module('treebuilder', ['treeView'])
//    .controller('treeBuildCtrl', function($scope){});

    angular.module('treebuilder', ['angularTreeview'])
    .controller('treeBuildCtrl', function($scope) {
        $scope.roleList = [
            { "roleName" : "Getting started", "roleId" : "role1", "children" : [
                { "roleName" : "Introducing Angular", "roleId" : "role11", "collapsed" : true, "children" : [
                    { "roleName" : "What is Angular.js ?",      "roleId" : "role111", "children" : [] },
                    { "roleName" : "How Angular works",         "roleId" : "role112", "children" : [] },
                    { "roleName" : "A simple Angular web page", "roleId" : "role113", "children" : [] }
                ]},
                { "roleName" : "Building up a simple application", "roleId" : "role12", "collapsed" : true, "children" : [
                    { "roleName" : "1.Formatting an html element",     "roleId" : "role121", "children" : []},
                    { "roleName" : "2.Adding control to the display",  "roleId" : "role122", "children" : []},
                    { "roleName" : "3.Adding a data edit facility",    "roleId" : "role123", "children" : []},
                    { "roleName" : "4.Adding a separate edit page",    "roleId" : "role124", "children" : []},
                    { "roleName" : "5.Controlling permitted values",   "roleId" : "role125", "children" : []},
                    { "roleName" : "6.Adding Save and Cancel buttons", "roleId" : "role126", "children" : []},
                    { "roleName" : "7.Adding Add and Delete buttons",  "roleId" : "role127", "children" : []},
                    { "roleName" : "8.Read/write via MySQL database",  "roleId" : "role128", "children" : []}
                ]}
            ]},
            { "roleName" : "HTML extensions", "roleId" : "role2", "children" : [
                { "roleName" : "Input elements", "roleId" : "role21", "collapsed" : true, "children" : [
                    { "roleName" : "Syntax and basics", "roleId" : "role221", "children" : []},
                    { "roleName" : "Buttons",           "roleId" : "role222", "children" : [] },
                    { "roleName" : "Checkboxes",        "roleId" : "role223", "children" : [] },
                    { "roleName" : "Radio buttons",     "roleId" : "role224", "children" : [] },
                    { "roleName" : "Text boxes",        "roleId" : "role224", "children" : [] }
                ] },
                { "roleName" : "Images", "roleId" : "role22", "children" : [
                    { "roleName" : "Syntax and basics", "roleId" : "role221", "children" : []}
                ]},
                { "roleName" : "Select list boxes", "roleId" : "role23", "children" : [
                    { "roleName" : "Syntax and basics",                 "roleId" : "role231", "children" : [] },
                    { "roleName" : "Sourcing data from a simple array", "roleId" : "role232", "children" : [] },
                    { "roleName" : "Sourcing data from an object",      "roleId" : "role233", "children" : [] },
                    { "roleName" : "Sourcing from an array of objects", "roleId" : "role234", "children" : [] },
                    { "roleName" : "Grouping select values",            "roleId" : "role235", "children" : [] },
                    { "roleName" : "Selecting a specific \<option\>",     "roleId" : "role236", "children" : [] },
                ]},
                { "roleName" : "Textareas", "roleId" : "role24", "children" : [
                    { "roleName" : "Syntax and basics",               "roleId" : "role241", "children" : [] },
                    { "roleName" : "Basic examples",                  "roleId" : "role242", "children" : [] },
                    { "roleName" : "Controlling textarea 'required'", "roleId" : "role243", "children" : [] },
                    { "roleName" : "Acting on content change",        "roleId" : "role244", "children" : [] },
                    { "roleName" : "RegExp control of content",       "roleId" : "role245", "children" : [] }
                ]},
                { "roleName" : "Hypertext links", "roleId" : "role25", "children" : [
                    { "roleName" : "Syntax and basics", "roleId" : "role251", "children" : [] },
                    { "roleName" : "Basic example",     "roleId" : "role252", "children" : [] }
                ]},
                { "roleName" : "Forms", "roleId" : "role26", "children" : [
                    { "roleName" : "Syntax and basics",               "roleId" : "role261", "children" : [] },
                    { "roleName" : "Basic checking and submission",   "roleId" : "role262", "children" : [] },
                    { "roleName" : "Showing form field error status", "roleId" : "role263", "children" : [] },
                    { "roleName" : "Showing form error status",        "roleId" : "role264", "children" : [] },
                    { "roleName" : "Using form style attributes",       "roleId" : "role265", "children" : [] }
                ]}
            ]}
        ];
    });

/*
 @license Angular Treeview version 0.1.6
 ⓒ 2013 AHN JAE-HA http://github.com/eu81273/angular.treeview
 License: MIT
 */

(function(f) {
    f.module("angularTreeview", []).directive("treeModel", function($compile) {
        return {
            restrict: "A",
            link: function(b, h, c) {
                var a = c.treeId,
                    g = c.treeModel,
                    e = c.nodeLabel || "label",
                    d = c.nodeChildren || "children",
                    e = '<ul><li data-ng-repeat="node in ' + g + '"><i class="collapsed" data-ng-show="node.' + d + '.length && node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="expanded" data-ng-show="node.' + d + '.length && !node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="normal" data-ng-hide="node.' +
                        d + '.length"></i> <span data-ng-class="node.selected" data-ng-click="' + a + '.selectNodeLabel(node)">{{node.' + e + '}}</span><div data-ng-hide="node.collapsed" data-tree-id="' + a + '" data-tree-model="node.' + d + '" data-node-id=' + (c.nodeId || "id") + " data-node-label=" + e + " data-node-children=" + d + "></div></li></ul>";
                a && g && (c.angularTreeview && (b[a] = b[a] || {}, b[a].selectNodeHead = b[a].selectNodeHead || function(a) {
                        a.collapsed = !a.collapsed
                    }, b[a].selectNodeLabel = b[a].selectNodeLabel || function(c) {
                        b[a].currentNode && b[a].currentNode.selected &&
                        (b[a].currentNode.selected = void 0);
                        c.selected = "selected";
                        b[a].currentNode = c
                    }), h.html('').append($compile(e)(b)))
            }
        }
    })
})(angular);

//
//Repeating elements using ng-repeat
//Syntax and basics
//Sourcing from a simple array
//Sourcing data from an object
//Sourcing from an array of objects
//Using repeat positioning variables
//Repeating blocks of html code
//Using templated html
//Filtering repeated elements
//Sequencing repeated elements
//Syntax and basics
//Sorting a simple array
//Sorting by array object field
//Sorting indirectly via a variable
//Sorting indirectly via a function
//Custom sorting of whole array
//Limiting repeated elements
//Syntax and basics
//Simple array display truncation
//Using a custom filter
//Element event handling
//Keyboard events
//Mouse events
//Element blur and focus events
//Element copy, cut & paste events
//Element appearance
//Dynamically adding css styling
//Dynamically setting classes
//Showing, hiding and disabling
//HTML custom extensions : directives
//Introducing directives
//What are directives?
//    A simple example
//Directive details
//Syntax
//restrict property
//scope property
//replace, transclude properties
//template, templateUrl properties
//require, controller, controllerAs
//priority, terminal properties
//compile, link properties
//Examples
//Creating a slider component
//Single Page Applications : routing
//Introducing routing
//Introduction
//A simple example
//Routing details
//Syntax and basics
//Routing from a list to a list item
//Passing a local routing parameter
//template & templateUrl functions
//Resolving asynchronous data load
//Event handling
//Data model change events
//Syntax and basics
//Listening to a variable change
//Listening to a group of variables
//Listening to an object or array
//User generated events
//Syntax and basics
//Emitting events upwards
//Broadcasting events downwards
//Timed event
//Data handling
//Data objects
//Basics
//A value example
//A factory example
//A service example
//A provider example
//Database access
//Basics and syntax
//Example database access
//Data manipulation functions
//Array or object copying
//Array or object equality checking
//Array or object scanning
//Array or object serialising
//Data type checking
//Data formatting functions
//Currency values
//Lower and upper case
//Number formatting
//Formatting object data
//Date and time formatting
//Sample applications
//Creating a multi-page list
//Creating a custom filter
//Adding next and previous buttons
//Editing an array of objects
//Setting up the page skeleton
//Adding delete and add functions
//Add book checking
//Adding an additional property
//Moving the array into a factory
//Switching between factories
//Web site links registry
//Application design overview
//Loading data from the database
//The data model service
//The html body
//The abCat directive
//The abLink directive
//The abAdd and abPage directives
//The updateLink service function
//The deleteLink service function
//The addLink service function
//The cancelLink service function
//Loading from a file instead of db
//The complete application files
//Brain training app
//Working memory training
//N-Back single app
