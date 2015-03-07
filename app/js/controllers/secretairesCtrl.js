/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app_controllers.controller("secretairesCtrl", function ($window, $scope, secretairesService) {
    //$scope.listeSecretaires = secretairesService.findAll();
    $scope.listeSecretaires = secretairesService.query();
    $scope.listeSecretairesF = function () {
        console.log(secretairesService.query());
    };
//    $scope.modifier = secretairesService.update(1)
    $scope.createSecretaire = function () {
        var secretaire = {
            nom: $scope.nom,
            prenom: $scope.prenom,
            adresse: $scope.adresse,
            cp: $scope.cp,
            ville: $scope.ville,
            tel: $scope.tel
        };
        secretairesService.save({}, secretaire);
    };
    $scope.maj = function () {
        $window.location.reload();
    }

    $scope.deleteSecretaire = function (id) {
        secretairesService.delete({id: id});
    };
    $scope.updateSecretaire = function (id) {
//        secretairesService.update({id : id});
    };
});