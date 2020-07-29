var cal = $( '#calendar' ).calendario( {
    onDayClick : function( $el, $contentEl, dateProperties ) {

        for( var key in dateProperties ) {
            console.log( key + ' = ' + dateProperties[ key ] );
        }

    },
    caldata : bonitaEvents
} ),
$month = $( '#calendar-month' ).html( cal.getMonthName() ),
$year = $( '#calendar-year' ).html( cal.getYear() );

$( '#calendar-next' ).on( 'click', function() {
cal.gotoNextMonth( updateMonthYear );
} );
$( '#calendar-prev' ).on( 'click', function() {
cal.gotoPreviousMonth( updateMonthYear );
} );
$( '#calendar-current' ).on( 'click', function() {
cal.gotoNow( updateMonthYear );
} );

function updateMonthYear() {
$month.html( cal.getMonthName() );
$year.html( cal.getYear() );
};
