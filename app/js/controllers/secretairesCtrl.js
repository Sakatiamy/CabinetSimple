/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app_controllers.controller("secretairesCtrl", function ($scope, secretairesService) {
    $scope.listeSecretaires = secretairesService.query();

    $scope.createSecretaire = function () {
        mydate = new Date($scope.dateNaissance);
        var secretaire = {
            nom: $scope.nom,
            prenom: $scope.prenom,
            dateNaissance: mydate.toISOString(),
            adresse: $scope.adresse,
            cp: $scope.cp,
            ville: $scope.ville,
            tel: $scope.tel
        };
        secretairesService.save({}, secretaire);
    };
    $scope.deleteSecretaire = function (id) {
        secretairesService.delete({id: id});
    };
    $scope.updateSecretaire = function (s) {
        mydate = new Date(s.dateNaissance);
        s.dateNaissance = mydate.toISOString();
        secretairesService.update(s);
    };
});