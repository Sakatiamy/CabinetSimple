/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app_controllers.controller("patientsCtrl", function ($scope, patientsService) {
    $scope.listePatients = patientsService.query();

    $scope.createPatient = function () {
        mydate = new Date($scope.dateNaissance);
        var patient = {
            nom: $scope.nom,
            prenom: $scope.prenom,
            dateNaissance: mydate.toISOString(),
            adresse: $scope.adresse,
            cp: $scope.cp,
            ville: $scope.ville,
            tel: $scope.tel
        };
        patientsService.save({}, patient);
    };
    $scope.deletePatient = function (id) {
        patientsService.delete({id: id});
    };
    $scope.updatePatient = function (p) {
        mydate = new Date(p.dateNaissance);
        p.dateNaissance = mydate.toISOString();
        patientsService.update(p);
    };
    $scope.dateChange = function(date){
        mydate = new Date(date);
        console.log(mydate);
        console.loge(mydate.toTimeString());
        
    }
});