(function(){

var testApp = angular.module("testApp", ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

testApp.controller("mainCtrl", function($scope){
	// Array of workers
	$scope.workers = [
		{
			id: "0",
			name: "Victoria",
			surname: "Queen",
			birthday: "1819/05/24",
			phone: "0000000000",
			mail: "mail@mail.com",
			sex: "venus",
			calendar: {}
		},
		{
			id: "1",
			name: "George",
			surname: "Washington",
			birthday: "1732/02/22",
			phone: "0000000001",
			mail: "mail1@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "2",
			name: "Thomas",
			surname: "Jefferson",
			birthday: "1743/04/13",
			phone: "0000000002",
			mail: "mail2@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "3",
			name: "Zachary",
			surname: "Taylor",
			birthday: "1784/11/24",
			phone: "0000000003",
			mail: "mail3@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "4",
			name: "Franklin",
			surname: "Pierce",
			birthday: "1804/11/23",
			phone: "0000000004",
			mail: "mail4@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "5",
			name: "Abraham",
			surname: "Lincoln",
			birthday: "1809/02/12",
			phone: "0000000005",
			mail: "mail5@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "6",
			name: "Andrew",
			surname: "Johnson",
			birthday: "1808/12/29",
			phone: "0000000006",
			mail: "mail6@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "7",
			name: "Grover",
			surname: "Cleveland",
			birthday: "1837/03/18",
			phone: "0000000007",
			mail: "mail7@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "8",
			name: "Benjamin",
			surname: "Harrison",
			birthday: "1833/07/20",
			phone: "0000000008",
			mail: "mail8@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "9",
			name: "William",
			surname: "McKinley",
			birthday: "1843/01/29",
			phone: "0000000009",
			mail: "mail9@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "10",
			name: "Theodore",
			surname: "Roosevelt",
			birthday: "1858/10/27",
			phone: "00000000010",
			mail: "mail10@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "11",
			name: "John",
			surname: "Kennedy",
			birthday: "1917/05/29",
			phone: "00000000011",
			mail: "mail11@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "12",
			name: "Bill",
			surname: "Clinton",
			birthday: "1946/07/19",
			phone: "00000000012",
			mail: "mail12@mail.com",
			sex: "mars",
			calendar: {}
		},
		{
			id: "13",
			name: "George",
			surname: "Bush",
			birthday: "1946/06/06",
			phone: "00000000013",
			mail: "mail13@mail.com",
			sex: "mars",
			calendar: {}
		}
	];

	$scope.pagArray = ['2', '4', '6', '20'];
	$scope.pagination = $scope.pagArray[0];

	$scope.$watch('workers.length', function(){
		for(var j = 0; j < $scope.workers.length; j++){
			$scope.workers[j].id = j;
		};
	});

	$scope.getInTime = function(index){
		var date = new Date();
		var time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
		$scope.workers[index].calendar.come = time;
	};
	$scope.getOutTime = function(index){
		var date = new Date();
		var time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
		$scope.workers[index].calendar.gone = time;
	};

});

testApp.controller('modalCtrl', function($scope, $modal){
	$scope.cacheInfo = {};
	$scope.viewCashe = {};
	var addNewPerson = $modal({
		scope: $scope,
		templateUrl: "../html/addNewPerson.html",
		show: false});
	var viewInfo = $modal({
		scope: $scope,
		templateUrl: "../html/viewInfo.html",
		show: false});

	 $scope.okBtn = false;
	 $scope.disabledAttr = true;

	 $scope.showModal = function() {
	   addNewPerson.$promise.then(addNewPerson.show);
	 };
	 $scope.hideModal = function() {
	   addNewPerson.$promise.then(addNewPerson.hide);
	 };
	 $scope.hideEditPanel = function() {
	   viewInfo.$promise.then(viewInfo.hide);
	 };
	 $scope.showInfoModal = function(index) {
	 	$scope.viewCashe.surname = $scope.workers[index].surname;
	 	$scope.viewCashe.name= $scope.workers[index].name;
	 	$scope.viewCashe.birthday = $scope.workers[index].birthday;
	 	$scope.viewCashe.phone = $scope.workers[index].phone;
	 	$scope.viewCashe.mail = $scope.workers[index].mail;
	 	$scope.viewCashe.sex = $scope.workers[index].sex;
	 	$scope.viewCashe.id = $scope.workers[index].id;
	 	$scope.indexEl = index;
	   viewInfo.$promise.then(viewInfo.show);
	 };
	 $scope.delPerson = function(){
	 	if(confirm("Delete?")){
	 		$scope.workers[$scope.indexEl].calendar.come = "";
	 		$scope.workers[$scope.indexEl].calendar.gone = "";
	 		$scope.workers.splice($scope.indexEl, 1);
	 		$scope.hideEditPanel();
	 	}else{
	 		return false;
	 	};	 	
	 };
	 $scope.editPerson = function(){
	 	$scope.okBtn = true;
	 	$scope.disabledAttr = false;	 	
	 };
	 $scope.confirmEdit = function(){
	 	$scope.workers.splice($scope.indexEl, 1, $scope.viewCashe);
	 	$scope.okBtn = false;
	 	$scope.disabledAttr = true;
	 };

	 $scope.enterNewWorker = function(){
	 	if($scope.cacheInfo.surname != undefined && $scope.cacheInfo.name != undefined && $scope.cacheInfo.birthday != undefined && $scope.cacheInfo.phone != undefined && $scope.cacheInfo.mail != undefined && $scope.cacheInfo.sex != undefined){
	 		$scope.cacheInfo.id = $scope.workers.length;
	 		$scope.cacheInfo.calendar = {};
	 		$scope.workers.unshift($scope.cacheInfo);	  	
		  	$scope.hideModal();
		  	$scope.cacheInfo = {};
		  }else{
		  	alert("Error! Please, fill in all inputs!");		  	
		  };	  	
	  };
});

testApp.config(function($datepickerProvider, $modalProvider) {
  angular.extend($datepickerProvider.defaults, {
    dateFormat: 'dd/MM/yyyy',
    startWeek: 1,
    autoclose: true
  });
  angular.extend($modalProvider.defaults, {
    animation: 'am-flip-x'
  });
});

testApp.directive("searchToolbar", function(){
	return {
		restrict: 'E',
		templateUrl: 'html/searchToolbar.html'
	};
});

})();

