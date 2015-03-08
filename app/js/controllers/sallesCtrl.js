/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app_controllers.controller("sallesCtrl", function ($window, $scope, sallesService) {
    $scope.listeSalles = sallesService.query();
    $scope.listeSallesF = function () {
        console.log(sallesService.query());
    };
//    $scope.modifier = sallesService.update(1)
    $scope.createSalle = function () {
        var salle = {
            nom: $scope.nom
        };

        sallesService.save({}, salle);

    };
    $scope.maj = function () {
        $window.location.reload();
    }

    $scope.deleteSalle = function (id) {
        sallesService.delete({id: id});
    };
    $scope.updateSalle = function (s) {
        s.nom = $scope.newNom;
        sallesService.update(s);
    };
});