function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

$(function () {
    $('[data-toggle="popover"]').popover()
})


function play1() {
    var audio = document.getElementById("audio1");
    audio.play();
}

function play2() {
    var audio = document.getElementById("audio2");
    audio.play();
}

function play3() {
    var audio = document.getElementById("audio3");
    audio.play();
}

function play4() {
    var audio = document.getElementById("audio4");
    audio.play();
}

function play5() {
    var audio = document.getElementById("audio5");
    audio.play();
}

function play6() {
    var audio = document.getElementById("audio6");
    audio.play();
}

function play7() {
    var audio = document.getElementById("audio7");
    audio.play();
}
function play8() {
    var audio = document.getElementById("audio8");
    audio.play();
}
function play9() {
    var audio = document.getElementById("audio9");
    audio.play();
}
function play10() {
    var audio = document.getElementById("audio10");
    audio.play();
}
function play11() {
    var audio = document.getElementById("audio11");
    audio.play();
}
function play12() {
    var audio = document.getElementById("audio12");
    audio.play();
}




//for navigation tab// 

function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}


function bfi_get_font_names() {
    $ret = array();
    $ret["Display fonts"] = array(
        "Kitchen Police",
        "Laconic Regular",
        "Maiden Orange",
        "Ostrich Sans",
        "Playtime With Hot Toddies",
        "Veggieburger",
        "Wide Awake Black",
        );
    $ret["Comic fonts"] = array(
        "Komika Display",
        "Qarmic Sans",
        );
    $ret["Grunge fonts"] = array(
        "AnuDaw",
        "FFF Tusj",
        "WC RoughTrad",
        "Xenophone",
        );
    $ret["Handdrawn fonts"] = array(
        "Daniel",
        "Desyrel",
        "Idolwild",
        "Snickles",
        );
    $ret["Monospaced fonts"] = array(
        "Anonymous Pro",
        "DejaVu Sans Mono",
        "Droid Sans Mono",
        "Latin Modern Mono",
        "Verily Serif Mono",
        );
    $ret["Retro fonts"] = array(
        "Airstream",
        "Louisianne",
        );
    $ret["Sans Serif fonts"] = array(
        "Amaranth",
        "Aurulent Sans",
        "Candela",
        "Caviar Dreams",
        "DejaVu Sans",
        "Droid Sans",
        "Enigmatic Regular",
        "Junction Regular",
        "Lacuna Regular",
        "Latin Modern Sans",
        "League Gothic",
        "Liberation Sans",
        "Metrophobic",
        "Miso",
        "Molengo",
        "News Cycle",
        "Puritan",
        "Roboto",
        "Sansation",
        "Santana",
        "Tex Gyre Adventor",
        "TitilliumText",
        "Ubuntu",
        "Walkway Bold",
        "Yanone Kaffeesatz Regular",
        );
    $ret["Script fonts"] = array(
        "Ballpark",
        "BlackJack",
        "Dancing Script OT",
        "England Hand DB",
        "Honey Script",
        "Lobster Two",
        "Marketing Script",
        "Pacifico",
        "QuigleyWiggly",
        );
    $ret["Serif fonts"] = array(
        "Artifika",
        "Crimson",
        "Droid Serif",
        "Goudy Bookletter 1911",
        "Latin Modern Roman",
        "Medio",
        "Mido",
        "Galatia SIL",
        "Sorts Mill Goudy",
        "Tex Gyre Pagella",
        "Tex Gyre Schola",
        "Vollkorn Regular",
        );
    $ret["Slab Serif fonts"] = array(
        "Arvo",
        "Bevan",
        "ChunkFive",
        "Copse",
        "Josefin Slab",
        "Podkova",
        "Rokkitt",
        "St Marie",
        );
    $ret["Typewriter fonts"] = array(
        "1942 Report",
        "CarbonType",
        "Sears Tower",
        );
    return $ret;
}
function bfi_get_font_filenames() {
    $ret = array();
    $ret["Display fonts"] = array(
        "kitchen-police",
        "laconic",
        "MaidenOrange-webfont",
        "ostrich-regular-webfont",
        "playtime-with-hot-toddies",
        "veggieburger",
        "Wide_awake_Black-webfont",
        );
    $ret["Comic fonts"] = array(
        "komika-display",
        "Qarmic_sans_Abridged-webfont",
        );
    $ret["Grunge fonts"] = array(
        "ANUDRG-webfont",
        "FFF_Tusj-webfont",
        "wc-roughtrad",
        "xenophone",
        );
    $ret["Handdrawn fonts"] = array(
        "daniel",
        "desyrel-webfont",
        "idolwild-webfont",
        "Snickles-webfont",
        );
    $ret["Monospaced fonts"] = array(
        "anonymous-pro",
        "dejavu-sans-mono",
        "droid-sans-mono",
        "latin-modern-mono",
        "verily-serif-mono",
        );
    $ret["Retro fonts"] = array(
        "airstream",
        "louisianne",
        );
    $ret["Sans Serif fonts"] = array(
        "Amaranth-webfont",
        "aurulent-sans",
        "candela",
        "caviar-dreams",
        "dejavu-sans",
        "droid-sans",
        "enigmatic",
        "Junction-webfont",
        "lacuna-regular",
        "latin-modern-sans",
        "league-gothic",
        "liberation-sans",
        "Metrophobic_400",
        "miso",
        "molengo",
        "News_Cycle_500",
        "puritan",
        "Roboto_400",
        "sansation",
        "santana",
        "tex-gyre-adventor",
        "titillium-text",
        "ubuntu-titling",
        "walkway",
        "yanone-kaffeesatz",
        );
    $ret["Script fonts"] = array(
        "Ballpark_400",
        "blackjack",
        "Dancing_Script_OT_400",
        "England_Hand_DB_400",
        "Honey_Script_300",
        "Lobster_Two_400-Lobster_Two_700",
        "Marketing_Script_400",
        "Pacifico_400",
        "QuigleyWiggly_400",
        );
    $ret["Serif fonts"] = array(
        "Artifika_500",
        "crimson-text",
        "droid-serif",
        "goudy-bookletter-1911",
        "latin-modern-roman",
        "Medio_400",
        "mido",
        "galatia-sil",
        "ofl-sorts-mill-goudy",
        "tex-gyre-pagella",
        "tex-gyre-schola",
        "vollkorn",
        );
    $ret["Slab Serif fonts"] = array(
        "Arvo_400-Arvo_700",
        "Bevan_400",
        "chunkfive",
        "Copse_400",
        "josefin-sans-std",
        "Podkova_400",
        "Rokkitt_400",
        "st-marie",
        );
    $ret["Typewriter fonts"] = array(
        "1942_report_400",
        "CarbonType_400",
        "Sears_Tower_400",
        );
    return $ret;
}


