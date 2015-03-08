/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app_controllers.controller("sallesCtrl", function ($scope, sallesService) {
    $scope.listeSalles = sallesService.query();

    $scope.createSalle = function () {
        var salle = {
            nom: $scope.nom
        };

        sallesService.save({}, salle);

    };
    $scope.deleteSalle = function (id) {
        sallesService.delete({id: id});
    };
    $scope.updateSalle = function (s) {
        sallesService.update(s);
    };
});