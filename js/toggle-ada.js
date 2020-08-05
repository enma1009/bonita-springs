/* ----------------------------------------------------------------
	Toggle functionality for keyboard users

	Author: Jasel Morera
	Last updated: 08/05/2020
-----------------------------------------------------------------*/

$( document ).ready(function() {
    $(document).keypress(function(event){
        if(event.which === 13) // Enter value
            $(':focus').children('.toggle-content').toggle(); 
        });
});         
