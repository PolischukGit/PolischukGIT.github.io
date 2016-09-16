(function(){

var testApp = angular.module("testApp", []);

testApp.controller("mainCtrl", function($scope){

	// Array of workers
	$scope.workers = [
		{
			name: "George",
			surname: "Washington",
			birthday: "1732.02.22",
			phone: "0000000001",
			mail: "mail1@mail.com",
			calendar: {}
		},
		{
			name: "Thomas",
			surname: "Jefferson",
			birthday: "1743.04.13",
			phone: "0000000002",
			mail: "mail2@mail.com",
			calendar: {}
		},
		{
			name: "Zachary",
			surname: "Taylor",
			birthday: "1784.11.24",
			phone: "0000000003",
			mail: "mail3@mail.com",
			calendar: {}
		},
		{
			name: "Franklin",
			surname: "Pierce",
			birthday: "1804.11.23",
			phone: "0000000004",
			mail: "mail4@mail.com",
			calendar: {}
		},
		{
			name: "Abraham",
			surname: "Lincoln",
			birthday: "1809.02.12",
			phone: "0000000005",
			mail: "mail5@mail.com",
			calendar: {}
		},
		{
			name: "Andrew",
			surname: "Johnson",
			birthday: "1808.12.29",
			phone: "0000000006",
			mail: "mail6@mail.com",
			calendar: {}
		},
		{
			name: "Grover",
			surname: "Cleveland",
			birthday: "1837.03.18",
			phone: "0000000007",
			mail: "mail7@mail.com",
			calendar: {}
		},
		{
			name: "Benjamin",
			surname: "Harrison",
			birthday: "1833.07.20",
			phone: "0000000008",
			mail: "mail8@mail.com",
			calendar: {}
		},
		{
			name: "William",
			surname: "McKinley",
			birthday: "1843.01.29",
			phone: "0000000009",
			mail: "mail9@mail.com",
			calendar: {}
		},
		{
			name: "Theodore",
			surname: "Roosevelt",
			birthday: "1858.10.27",
			phone: "00000000010",
			mail: "mail10@mail.com",
			calendar: {}
		},
		{
			name: "John",
			surname: "Kennedy",
			birthday: "1917.05.29",
			phone: "00000000011",
			mail: "mail11@mail.com",
			calendar: {}
		},
		{
			name: "Bill",
			surname: "Clinton",
			birthday: "1946.07.19",
			phone: "00000000012",
			mail: "mail12@mail.com",
			calendar: {}
		},
		{
			name: "George",
			surname: "Bush",
			birthday: "1946.06.06",
			phone: "00000000013",
			mail: "mail13@mail.com",
			calendar: {}
		}
	];

	$scope.pagination = "2";

	$scope.pagArray = ['2', '4', '6', '20'];

});

testApp.directive("searchToolbar", function(){
	return {
		restrict: 'E',
		templateUrl: 'html/searchToolbar.html'
	};
});

})();