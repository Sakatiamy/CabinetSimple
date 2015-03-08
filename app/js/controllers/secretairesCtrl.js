/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app_controllers.controller("secretairesCtrl", function ($window, $scope, secretairesService) {
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
        mydate = new Date($scope.newDateNaissance);
        s.nom = $scope.newNom;
        s.prenom = $scope.newPrenom;
        s.dateNaissance = mydate.toISOString();
        s.adresse = $scope.newAdresse;
        s.cp = $scope.newCP;
        s.ville = $scope.newVille;
        s.tel = $scope.newTel;
        secretairesService.update(s);
    };
});