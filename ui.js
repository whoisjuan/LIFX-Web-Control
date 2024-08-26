// Global Variable States
var selectedSceneValue;
var oauthDisplayState = true;
var authenticatedState = false;
getPositionAndRunUI()


function getPositionAndRunUI() {
    chrome.storage.local.get("position", function(result) {
        positionBtn = result.position
        if (positionBtn == undefined) {
            positionBtn = 1
        }
        runUI(positionBtn);
    });
};


function runUI(positionBtn) {
    // Setting Up Initial UI Logic
    if (oauthDisplayState == true && authenticatedState == false) {
        oauthTokenDisplay();
    } else if (oauthDisplayState == false && authenticatedState == false) {
        altTokenDisplay();
    } else if (oauthDisplayState == false && authenticatedState == true) {
        if (positionBtn == 1) {
            show1();
        } else if (positionBtn == 2) {
            show2();
        } else if (positionBtn == 3) {
            show3();
        };
    };


    $('input#option-1').change(function() {
        var appliedPosition = { 'position': 1 };
        chrome.storage.local.set(appliedPosition, function() {});
        show1();
    });

    $('input#option-2').change(function() {
        var appliedPosition = { 'position': 2 };
        chrome.storage.local.set(appliedPosition, function() {});
        show2()
    });

    $('input#option-3').change(function() {
        var appliedPosition = { 'position': 3 };
        chrome.storage.local.set(appliedPosition, function() {});
        show3();
    });

};




// UI Control Functions
var show1 = function() {
    $("input#option-1").prop( "checked", true );
    //Keep Authentication Views Hidden
    $('#oauthSection').hide();
    $('#tokenSection').hide();
    //Control Dropdowns Visibility
    $('#dropdownGroup').hide();
    $('#dropdownSceneContainer').hide();
    $('#dropdownBulb').show();
    // Reveal Sections
    $('#brightSection').show();
    $('#colorSection').show();
};

var show2 = function() {
    $("input#option-2").prop( "checked", true );
    //Keep Authentication Views Hidden
    $('#oauthSection').hide();
    $('#tokenSection').hide();
    //Control Dropdowns Visibility
    $('#dropdownBulb').hide();
    $('#dropdownSceneContainer').hide();
    $('#dropdownGroup').show();
    // Reveal Sections
    $('#brightSection').show();
    $('#colorSection').show();
};

var show3 = function() {
    //Changes the State of the Radio Selector from the UI Flow
    $("input#option-3").prop( "checked", true );
    //Keep Authentication Views Hidden
    $('#oauthSection').hide();
    $('#tokenSection').hide();
    //Control Dropdowns Visibility
    $('#dropdownBulb').hide();
    $('#dropdownGroup').hide();
    $('#brightSection').hide();
    $('#colorSection').hide();
    $('#dropdownSceneContainer').show();
};


function oauthTokenDisplay() {
    $('#oauthSection').show();
    $('#tokenSection').hide();
    $('#bulbSection').hide();
    $('#brightSection').hide();
    $('#colorSection').hide();
};

function altTokenDisplay() {
    $('#tokenSection').show();
    $('#oauthSection').hide();
    $('#bulbSection').hide();
    $('#brightSection').hide();
    $('#colorSection').hide();
};

function tokenStoredDisplay() {
    $('#oauthSection').hide();
    $('#tokenSection').hide();
    $('#bulbSection').show();
    $('#brightSection').show();
    $('#colorSection').show();
};


//Snackbar Functions
function revealSnackbarNullToken() {
    var notification = document.querySelector('.mdl-js-snackbar');
    notification.MaterialSnackbar.showSnackbar({
        message: 'Invalid Token'
    });
}

function revealSnackbarNoSelect() {
    var notification = document.querySelector('.mdl-js-snackbar');
    notification.MaterialSnackbar.showSnackbar({
        message: 'Please Select a Scene'
    });
}