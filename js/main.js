angular.module('mySiteApp', [])
    .controller('mySiteController', function($scope) {

        var thisapp = this;

        $scope.user = 'Aom';
        $scope.bLoading = true;
    
        /* Temp */
        $scope.groupList = {}; 
        $scope.groupListX = [{
            'name': 'EMIT',
            'cardList': [{
                'title': 'PlanIT',
                'url': 'http://www.google.com'
            }, {
                'title': 'Charm',
                'url': 'http://www.google.com'
            }, {
                'title': 'EM Home',
                'url': 'http://www.google.com'
            }, {
                'title': 'IT Services',
                'url': 'http://www.google.com'
            }]
        }, {
            'name': 'SharePoint',
            'cardList': [{
                'title': 'My Site',
                'url': 'http://www.google.com'
            }, {
                'title': 'SPS',
                'url': 'http://www.google.com'
            }, {
                'title': 'Safety',
                'url': 'http://www.google.com'
            }, {
                'title': 'ETC',
                'url': 'http://www.google.com'
            }]
        }];

        $scope.filterCard = function(card) {

            if ($scope.query === null | $scope.query === undefined)
                return true;

            return card.title.toLowerCase().includes($scope.query);
        };

        $scope.filterNonEmptyGroup = function(group) {
            var bFound = false;

            group.cardList.forEach(function(card) {
                if ($scope.filterCard(card) === true) {
                    bFound = true;
                }
            });

            return bFound;
        };
    
        $scope.loadCardList = function() {
            //call sp services 
            setTimeout(function(){
                $scope.groupList = $scope.groupListX; 
                $scope.bLoading = false;
                $scope.$apply();
            }, 5000);
        }

        $scope.buildCardList = function(xData) {
            $scope.groupList = [];
            $(xData.responseXML).SPFilterNode("z:row").each(function() {

                var card = {};
                card.title = $(this).attr("ows_LinkTitle");
                card.url = $(this).attr("ows_Link");

                var groupName = $(this).attr("ows_Group");

                var group = $scope.groupList.filter(function(obj) {
                    return obj.name === groupName;
                })[0];

                if (group === undefined) {
                    group = {};
                    group.name = groupName;
                    group.cardList = [];
                    $scope.groupList.push(group); 
                }

                group.cardList.push(card);
            });
        }
        
        /* Init */
        $scope.loadCardList(); 
    });

$(document).ready(function() {
    $('#emsearch').focus();
    
});

$('#emsearch').keypress(function(e) {
    if (e.which == 13) {
        window.location = "http://www.google.com"; 
        return false;
    }
});