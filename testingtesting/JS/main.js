 
document.getElementById( 'exampleDiv' ).addEventListener( 'click', function(e) { 
alert( 'Kliknięto div' ); 
} ); 
document.getElementById( 'exampleLink' ).addEventListener( 'click', function(e) { 
/* 
Bez dwóch poniższych linijek kliknięcie na link spowoduje wyświetlenie komunikatu 
"Kliknięto link", a następnie komunikatu "Kliknięto div". Dzięki dodaniu tych linijek kodu 
wyświetli się tylko pierwszy komunikat. 
*/ 
e.preventDefault(); 
e.stopPropagation(); 
alert( 'Kliknięto link' ); 
} ); 