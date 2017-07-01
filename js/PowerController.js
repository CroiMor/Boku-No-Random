var PowerRandomApp = angular.module('PowerRandomApp', [])

PowerRandomApp.controller('PowerController', function($scope){
    let poderes = [
        "Fogo", 
        "Água", 
        "Gelo", 
        "Super Velocidade", 
        "Super Força", 
        "Controle da Temperatura", 
        "Controle de Mente",
        "Super estática",
        "Teletransporte",
        "Asas",
        "Metamorfose",
        "Invisibilidade"]

    $scope.poderAtual = ""
    
    $scope.gerarPoder = function(){
        var numeroRandomizado = Math.floor(Math.random() * poderes.length)
        
        if(poderes[numeroRandomizado] === $scope.poderAtual)
            $scope.gerarPoder()
        else
            $scope.poderAtual = poderes[numeroRandomizado]
    }
})
