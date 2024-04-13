document.addEventListener("DOMContentLoaded", function() {


    var getQuoteBtn = document.querySelector(".cta_btn_hero");
    var getQuoteBtnNav = document.querySelector(".cta_btn");



    if (getQuoteBtn) {
        getQuoteBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag
            
            // Call the getQuoteLogic function
            getQuoteLogic();
        }, { passive: true }); // Add the passive option to the event listener
    }

    getQuoteBtnNav.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag
            
            // Call the getQuoteLogic function
            getQuoteLogic();
        }, { passive: true }); // Add the passive option to the event listener

});

function getQuoteLogic() {
    var selectServiceElement = document.getElementById("contact");
    var getQuoteSelectorValue = document.getElementById("getQuoteSelector").value;
    
    if (selectServiceElement && getQuoteSelectorValue) {
        // Scroll to the select service element
        selectServiceElement.scrollIntoView({ behavior: "smooth" });
        
        // Set the value of the select service element
        selectServiceElement.value = getQuoteSelectorValue;
    }



}
function snackbar() {
    var nav = document.querySelector("nav");
    // Get the computed style of the nav element
    var navStyle = window.getComputedStyle(nav);

    // Check if the display property is currently set to 'flex'
    if (navStyle.display === 'flex') {
        // If it's already flex, change it to 'none' to hide the nav
        nav.style.display = "none";
    } else {
        // If it's not flex, change it to 'flex' to show the nav
        nav.style.display = "flex";
    }
}
