
function VisitantesController($scope){
	$scope.visitantes=[

	
	];
$scope.Save=function(){
	$scope.visitantes.push({nombre:$scope.n_visitante.nombre,telefono:$scope.n_visitante.telefono,viaje:$scope.n_visitante.viaje});
}
}