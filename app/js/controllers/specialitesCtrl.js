/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app_controllers.controller("specialitesCtrl", function ($window, $scope, specialitesService) {
    //$scope.listeSpecialites = specialitesService.findAll();
    $scope.listeSpecialites = specialitesService.query();
    $scope.listeSpecialitesF = function () {
        console.log(specialitesService.query());
    };
//    $scope.modifier = specialitesService.update(1)
    $scope.createSpecialite = function () {
        var specialite = {
            nom: $scope.nom
        };

        specialitesService.save({}, specialite);

    };
    $scope.maj = function () {
        $window.location.reload();
    }

    $scope.deleteSpecialite = function (id) {
        specialitesService.delete({id: id});
    };
    $scope.updateSpecialite = function (id) {
//        specialitesService.update({id : id});
    };
});