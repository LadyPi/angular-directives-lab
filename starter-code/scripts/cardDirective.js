angular.module('CardsAgainstAssembly') 
  .directive('wdiCard', wdiCard);

function wdiCard() {
//'A' == attribute, 'E' == element, 'C' == class
var directive = {
	restrict: 'E',
	replace: true,
	templateUrl: "templates/cardDirective.html",
	scope: {
		question: '@'
	}
   };
	
	return directive;
}

