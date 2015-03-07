/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app_controllers.controller("medecinsCtrl", function ($window, $scope, medecinsService, specialitesService) {
    //$scope.listeMedecins = medecinsService.findAll();
    $scope.listeMedecins = medecinsService.query();
    $scope.listeSpecialites = specialitesService.query();
    $scope.listeMedecinsF = function () {
        console.log(medecinsService.query());
    };
//    $scope.modifier = medecinsService.update(1)
    $scope.createMedecin = function () {
        var medecin = {
            nom: $scope.nom,
            prenom: $scope.prenom,
            idSpecialite: $scope.specialite,
            adresse: $scope.adresse,
            cp: $scope.cp,
            ville: $scope.ville,
            tel: $scope.tel
        };
        medecinsService.save({}, medecin);
    };
    $scope.maj = function(){
        $window.location.reload();
    }
    
    $scope.deleteMedecin = function (id) {
        medecinsService.delete({id : id});
    };
    $scope.updateMedecin = function (id) {
//        medecinsService.update({id : id});
    };
});