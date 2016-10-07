var app = angular.module('myApp', ['pascalprecht.translate']); //declaramos variable con el nombre de la app


//definimos diccionoarios
app.config(function($translateProvider){
	$translateProvider.translations('es',{
		TITULO: 'titulo',
		ES_BTN: 'Español',
		EN_BTN: 'Inglés'
	});

	$translateProvider.translations('en',{
		TITULO: 'Title',
		EN_BTN: 'English',
		ES_BTN: 'Spanish'
	});

	$translateProvider.preferredLanguage('es');
	$translateProvider.useSanitizeValueStrategy('escapeParameters')
});

//controlador para hacer el cambio en los botones
app.controller('translateCrtl', function($scope, $translate){
	$scope.lang = function(trans) {
		$translate.use(trans);
	};
});