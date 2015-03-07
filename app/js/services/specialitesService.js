/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app_service.factory('specialitesService', ['$resource',
function ($resource) {
    return $resource('http://localhost:8080/Cabinet/webresources/specialites/:id', {id:'@id'}, {
    	'update': { method:'PUT' }
    });
}]);