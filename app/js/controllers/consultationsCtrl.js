/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app_controllers.controller("consultationsCtrl", function ($scope, consultationsService, medecinsService, patientsService, sallesService, secretairesService) {
    $scope.listeConsultations = consultationsService.query();
    $scope.listeMedecins = medecinsService.query();
    $scope.listePatients = patientsService.query();
    $scope.listeSalles = sallesService.query();
    $scope.listeSecretaires = secretairesService.query();

    $scope.createConsultation = function () {
        mydate = new Date($scope.date);
        var consultation = {
            idMedecin: $scope.medecin,
            idPatient: $scope.patient,
            idSalle: $scope.salle,
            idSecretaire: $scope.secretaire,
            date: mydate.toISOString()
        };
        consultationsService.save({}, consultation);
    };
    $scope.deleteConsultation = function (id) {
        consultationsService.delete({id : id});
    };
    $scope.updateConsultation = function (c) {
        mydate = new Date(c.date);
        c.date = mydate.toISOString();
        consultationsService.update(c);
    };
});