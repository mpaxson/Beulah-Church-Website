/*for controlling the functions of the websitei*/

/*constants too improve readability and change all references to a page in the future immmediately*/
const contactPage = ".contact_us";
const homePage = ".home_page";
const staffPage = ".staff";
const ministryPage = ".ministry";
const childrenPage = ".children";
const youthPage = ".youth";
const pantryPage = ".pantry";
const calenderPage = ".calender";

var timeOut;
var currentPage;

//on page load
$(function(){
    currentPage = homePage;
})


/*===========headers===========================================================
                    This will be used to handle the loading.
    "pages" will be loaded in at start and will remain hidden so the user will
    experience zero load time after initial page. If the internet goes out after
    the initial page load no further internet connection should be needed
=============================================================================*/



$( ".homeHeader" ).click( function () {
    loadPage( homePage );
} );

$( ".contactHeader" ).click( function () {
    loadPage( contactPage );
} );


$( ".staffHeader" ).click( function () {
    loadPage( staffPage );
} );

$( ".ministryHeader" ).click( function () {
    loadPage( ministryPage );
} );

$( ".childrenHeader" ).click( function () {
    loadPage( childrenPage );
} );

$( ".youthHeader" ).click( function () {
    loadPage( youthPage );
} );

$( ".pantryHeader" ).click( function () {
    loadPage( pantryPage );
} );

$( ".calenderHeader" ).click( function () {
    loadPage( calenderPage );
} );


/*========================================================================
========================================================================*/


/*To be used to make sure the load page will be loaded between pages*/
function loadPage( pageName ) {
    /*DEBUG*/
    console.log( "LoadPage" );
    hidePages();
    $( pageName ).fadeIn( "slow" );

    //keeps track of the current page
    currentPage = pageName;

}

function hidePages() {
    console.log( "hidePage" ); /*DEBUG*/
    $( '.pageWrapper > div' ).fadeOut( "fast" );
}
