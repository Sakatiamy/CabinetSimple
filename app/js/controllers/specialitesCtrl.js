/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app_controllers.controller("specialitesCtrl", function ($window, $scope, specialitesService) {
    $scope.listeSpecialites = specialitesService.query();

    $scope.createSpecialite = function () {
        var specialite = {
            nom: $scope.nom
        };
        specialitesService.save({}, specialite);
    };

    $scope.deleteSpecialite = function (id) {
        specialitesService.delete({id: id});
    };
    $scope.updateSpecialite = function (s) {
        s.nom = $scope.newNom;
        specialitesService.update(s);
    };
});