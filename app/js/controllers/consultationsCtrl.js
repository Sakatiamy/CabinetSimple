/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app_controllers.controller("consultationsCtrl", function ($window, $scope, consultationsService, medecinsService, patientsService, sallesService, secretairesService) {
    //$scope.listeConsultations = consultationsService.findAll();
    $scope.listeConsultations = consultationsService.query();
    $scope.listeMedecins = medecinsService.query();
    $scope.listePatients = patientsService.query();
    $scope.listeSalles = sallesService.query();
    $scope.listeSecretaires = secretairesService.query();
    
    $scope.listeConsultationsF = function () {
        console.log(consultationsService.query());
    };
//    $scope.modifier = consultationsService.update(1)
    $scope.createConsultation = function () {
        mydate = new Date($scope.date);
        console.log(mydate.toISOString())
        var consultation = {
            idMedecin: $scope.medecin,
            idPatient: $scope.patient,
            idSalle: $scope.salle,
            idSecretaire: $scope.secretaire,
            date: mydate.toISOString()
        };
        consultationsService.save({}, consultation);
    };
    $scope.maj = function(){
        $window.location.reload();
    }
    
    $scope.deleteConsultation = function (id) {
        consultationsService.delete({id : id});
    };
    $scope.updateConsultation = function (id) {
//        consultationsService.update({id : id});
    };
});