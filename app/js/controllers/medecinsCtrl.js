/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app_controllers.controller("medecinsCtrl", function ($window, $scope, medecinsService, specialitesService) {
    $scope.listeMedecins = medecinsService.query();

    $scope.listeSpecialites = specialitesService.query();

    $scope.createMedecin = function () {
        mydate = new Date($scope.dateNaissance);
        var medecin = {
            nom: $scope.nom,
            prenom: $scope.prenom,
            idSpecialite: $scope.specialite,
            dateNaissance: mydate.toISOString(),
            adresse: $scope.adresse,
            cp: $scope.cp,
            ville: $scope.ville,
            tel: $scope.tel
        };
        medecinsService.save({}, medecin);
    };

    $scope.deleteMedecin = function (id) {
        medecinsService.delete({id: id});
    };

    $scope.updateMedecin = function (m) {
        mydate = new Date($scope.newDateNaissance);
        m.nom = $scope.newNom;
        m.prenom = $scope.newPrenom;
        m.idSpecialite = $scope.newSpecialite;
        m.dateNaissance = mydate.toISOString();
        m.adresse = $scope.newAdresse;
        m.cp = $scope.newCP;
        m.ville = $scope.newVille;
        m.tel = $scope.newTel;
        medecinsService.update(m);
    };
});