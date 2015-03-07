/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app_controllers.controller("patientsCtrl", function ($window, $scope, patientsService) {
    //$scope.listePatients = patientsService.findAll();
    $scope.listePatients = patientsService.query();
    $scope.listePatientsF = function () {
        console.log(patientsService.query());
    };
//    $scope.modifier = patientsService.update(1)
    $scope.createPatient = function () {
        var patient = {
            nom: $scope.nom,
            prenom: $scope.prenom,
            adresse: $scope.adresse,
            cp: $scope.cp,
            ville: $scope.ville,
            tel: $scope.tel
        };
        patientsService.save({}, patient);
    };
    $scope.maj = function () {
        $window.location.reload();
    }

    $scope.deletePatient = function (id) {
        patientsService.delete({id: id});
    };
    $scope.updatePatient = function (id) {
//        patientsService.update({id : id});
    };
});