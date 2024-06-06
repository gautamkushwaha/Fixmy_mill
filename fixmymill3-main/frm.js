let navBorder = document.querySelectorAll(".wrap-nav>a");
let section2 = false;
let formObject = {}
let formArr = []
let stepArr3 = [document.getElementById("date"), document.getElementById("response"), document.getElementById("address")]

document.getElementById("previous").style.display = "none"
const animationData = { "nm": "Checklist 2", "mn": "", "layers": [{ "ty": 4, "nm": "Checklist", "mn": "", "sr": 1, "st": 0, "op": 720, "ip": 0, "hd": false, "cl": "", "ln": "", "ddd": 0, "bm": 0, "tt": 0, "hasMask": false, "td": 0, "ao": 0, "ks": { "a": { "a": 0, "k": [297.587, 298.119, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [259.587, 260.119, 0], "ix": 2 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [100], "t": 50 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [0], "t": 62 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Group", "nm": "Group 1", "ix": 1, "cix": 2, "np": 2, "it": [{ "ty": "sh", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": false, "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[54.754, -36.121], [-17.487, 36.12], [-54.754, -1.147]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 2, "lj": 2, "ml": 1, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 23, "ix": 5 }, "d": [], "c": { "a": 0, "k": [1, 1, 1], "ix": 3 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [294.971, 298.679], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }, { "ty": "tm", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Filter - Trim", "nm": "Trim Paths 1", "ix": 2, "e": { "a": 0, "k": 100, "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "s": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0, "y": 1 }, "s": [100], "t": 24 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [0], "t": 36 }], "ix": 1 }, "m": 1 }], "ind": 0 }, { "ty": 4, "nm": "Cricle", "mn": "", "sr": 1, "st": 0, "op": 720, "ip": 0, "hd": false, "cl": "", "ln": "", "ddd": 0, "bm": 0, "tt": 0, "hasMask": false, "td": 0, "ao": 0, "ks": { "a": { "a": 0, "k": [-7.627, -7.691, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "o": { "x": 0.167, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [124.222, 124.222, 100], "t": 18 }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [134.222, 134.222, 100], "t": 20 }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [114.222, 114.222, 100], "t": 22 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [124.222, 124.222, 100], "t": 24 }], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [260, 260, 0], "ix": 2 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [100], "t": 50 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [0], "t": 62 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Group", "nm": "Ellipse 1", "ix": 1, "cix": 2, "np": 4, "it": [{ "ty": "el", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Shape - Ellipse", "nm": "Ellipse Path 1", "d": 1, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "s": { "a": 0, "k": [178.46, 178.46], "ix": 2 } }, { "ty": "tm", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Filter - Trim", "nm": "Trim Paths 1", "ix": 2, "e": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.239, "y": 1 }, "s": [0], "t": 0 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [100], "t": 24 }], "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "s": { "a": 0, "k": 0, "ix": 1 }, "m": 1 }, { "ty": "st", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 2, "lj": 2, "ml": 1, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 10, "ix": 5 }, "d": [], "c": { "a": 0, "k": [0.0706, 0.0706, 0.0706], "ix": 3 } }, { "ty": "fl", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.0706, 0.0706, 0.0706], "ix": 4 }, "r": 1, "o": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0, "y": 1 }, "s": [0], "t": 22 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [100], "t": 24 }], "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [-7.627, -7.691], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 1 }, { "ty": 4, "nm": "Line", "mn": "", "sr": 1, "st": 0, "op": 720, "ip": 28, "hd": false, "cl": "", "ln": "", "ddd": 0, "bm": 0, "tt": 0, "hasMask": false, "td": 0, "ao": 0, "ks": { "a": { "a": 0, "k": [298, 298, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0, "y": 1 }, "s": [46, 46, 100], "t": 28 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [100, 100, 100], "t": 50 }], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [260, 260, 0], "ix": 2 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [0], "t": 28 }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [100], "t": 39 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [0], "t": 50 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Group", "nm": "Group 1", "ix": 1, "cix": 2, "np": 2, "it": [{ "ty": "sh", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[-120.208, 0], [0, -120.208], [120.207, 0], [0, 120.208]], "o": [[120.207, 0], [0, 120.208], [-120.208, 0], [0, -120.208]], "v": [[0, -217.655], [217.655, 0], [0, 217.655], [-217.655, 0]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 10, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "d": [], "c": { "a": 0, "k": [0.0706, 0.0706, 0.0706], "ix": 3 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [297.587, 298.119], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 2 }, { "ty": 4, "nm": "Shadow", "mn": "", "sr": 1, "st": 0, "op": 720, "ip": 22, "hd": false, "cl": "", "ln": "", "ddd": 0, "bm": 0, "tt": 0, "hasMask": false, "td": 0, "ao": 0, "ks": { "a": { "a": 0, "k": [298, 298, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0, "y": 1 }, "s": [60, 60, 100], "t": 22 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [100, 100, 100], "t": 44 }], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [260, 260, 0], "ix": 2 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [0], "t": 22 }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [100], "t": 33 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [0], "t": 44 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Group", "nm": "Group 1", "ix": 1, "cix": 2, "np": 2, "it": [{ "ty": "sh", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[-94.797, 0], [0, -94.797], [94.797, 0], [0, 94.798]], "o": [[94.797, 0], [0, 94.798], [-94.797, 0], [0, -94.797]], "v": [[0, -171.646], [171.646, 0], [0, 171.646], [-171.646, 0]] }, "ix": 2 } }, { "ty": "fl", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.0706, 0.0706, 0.0706], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [297.587, 298.119], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 3 }], "ddd": 0, "h": 520, "w": 520, "meta": { "a": "", "k": "", "d": "", "g": "@lottiefiles/toolkit-js 0.17.4", "tc": "#ffffff" }, "v": "5.7.12", "fr": 24, "op": 63, "ip": 0, "assets": [] }
let flagCode = false;

const arr = [
    {
        name: "General Service",
        price: "1099/-",
        list: ['VoltageCheck ', ' V beltCheck', 'Motor check', 'PCB Check', 'MCB Check', 'Display console check', 'Lubrication', 'Belt adjustment check', 'wiring  check']
    },
    {
        name: "Repair",
        price: "1099/-",
        list: ['Repair of the product', ' VoltageCheck', ' V beltcheck', 'Motor check', 'PCB Check', 'MCB check', 'Lubrication', 'wiring check', 'Belt Adjustment check', 'Display console check']
    },
    {
        name: "Installation",
        price: "799/-",
        list: ['Assembly of the product', 'Voltage Check', 'wiring check', 'Lubrication check', 'Belt adjustment check', 'Demo Usage']
    }
]


function initalForm() {
    formArr.push(document.getElementById("city"), document.getElementById("code"), document.getElementById("product"), document.getElementById("name"), document.getElementById("email"), document.getElementById("phone"))
    formArr.forEach((vl) => {

        clearError(vl);

    })

}
function stepForm3() {
    stepArr3.forEach((vl) => {
        clearError(vl);
    })

}
var animationContainer = document.getElementById("logo");
var animationSettings = {
    container: animationContainer,
    renderer: 'svg', // You can choose 'svg', 'canvas', or 'html' as the renderer
    loop: true,       // Set to true for looping
    autoplay: true,   // Set to true to start playing automatically
    animationData: animationData // Your JSON data here
};

var animation = lottie.loadAnimation(animationSettings);



function sectionState(x) {
    Array.from(navBorder).map((vl) => {
        vl.classList.remove("navBorder")
    })
    let state = Array.from(document.getElementsByTagName("section"))
    state.map((val) => {
        val.classList.add("unactiveSection");
        val.classList.remove("activeSection");
    })
}

// Define an array of valid PIN codes for the specified cities
const validPincodes = {
    Hyderabad: ["500001", "500002", "500003", "500004", "500005", "500006", "500007", "500008", "500012", "500013", "500015", "500016", "500017", "500018", "500020", "500022", "500025", "500026", "500027", "500028", "500029", "500030", "500033", "500034", "500035", "500036", "500038", "500039", "500040", "500041", "500044", "500045", "500048", "500051", "500052", "500053", "500057", "500058", "500059", "500060", "500061", "500062", "500063", "500064", "500065", "500067", "500068", "500069", "500070", "500071", "500073", "500074", "500076", "500077", "500079", "500080", "500081", "500082", "500085", "500095"],
    Chennai: ["600001", "600002", "600003", "600004", "600005", "600006", "600007", "600008", "600009", "600010", "600011", "600012", "600013", "600014", "600015", "600016", "600017", "600018", "600019", "600020"],
    Coimbatore:["641001", "641002", "641003", "641004", "641005", "641006", "641007", "641008", "641009", "641010", "641011", "641012", "641013", "641014", "641015", "641016", "641017", "641018", "641019", "641020", "641021", "641022", "641023", "641024", "641025", "641026", "641027", "641028", "641029", "641030", "641031", "641032", "641033", "641034", "641035", "641036", "641037", "641038", "641039", "641040", "641041", "641042", "641043", "641044", "641045", "641046", "641047", "641062", "641101", "641102", "641103", "641104", "641105", "641106", "641107", "641108", "641109", "641110", "641111", "641112", "641113", "641114", "641201", "641262", "641302", "641305", "641401", "641402"],
    Trivandrum:["695614","695102", "695607", "695102","695572","695122","695005","695309","695123","695032","695122","695525","695564","695126","695542", "695023", "695101", "695009", "695103", "695103", "695502", "695310", "695305","695501","695008","695501", "695609", "695551", "695522", "695122", "695024", "695542", "695301", "695601", "695615", "695564", "695587","695132","695504","695013","695142","695502", "695502", "695011", "695541", "695014", "695563", "695503", "695104", "695311", "695310", "695310", "695562", "695504", "695587", "695132", "695504", "695011", "695551", "695141", "695304", "695301", "695501", "695541", "695024", "695006", "695563", "695582", "695526", "695101", "695608", "695043", "695574", "695042", "695609", "695301", "695525", "695524", "695030", "695311", "695506", "695606", "695605", "695551", "695581", "695304", "695301", "695501", "695541", "695004", "695310", "695563", "695103", "695013", "695561", "695584", "695014", "695141", "695306", "695307", "695040", "695024", "695506", "695311", "695604", "695606", "695541", "695014", "695141", "695306", "695525", "695013", "695562", "695004", "695610", "695543", "695104", "695572", "695601", "695015", "695541", "695606", "695541", "695603", "695043", "695505", "695574", "695512", "695601", "695601", "695311", "695506", "695502", "695301", "695525", "695311", "695563", "695124", "695582", "695526", "695124", "695601", "695124", "695551", "695506", "695002", "695605", "695505", "695562", "695124", "695506", "695002", "695581", "695304", "695501", "695572", "695501", "695521", "695574", "695501", "695311", "695527", "695527", "695043", "695505", "695313", "695505", "695313", "695562", "695004", "695610", "695543", "695573", "695144", "695542", "695604", "695607", "695614", "695543", "695302", "695146", "695610", "695125", "695604", "695507", "695125", "695317", "695305", "695013", "695526", "695145", "695561", "695125", "695561", "695506", "695574", "695016", "695505", "695542", "695564", "695506", "695575", "695574", "695526", "695601", "695586", "695562", "695582", "695511", "695506", "695003", "695003", "695144", "695582", "695526", "695124", "695001", "695586", "695589", "695004", "695610", "695604", "695521", "695568", "695304", "695124", "695001", "695559", "695524", "695607", "695311", "695133", "695001", "695575", "695501", "695586", "695536", "695311", "695526", "695311", "695013", "695575", "695526", "695613", "695610", "695601", "695561", "695570", "695304", "695515", "695305", "695009", "695561", "695125", "695562", "695525", "695604", "695581", "695304", "695501", "695503", "695007", "695036", "695016", "695023", "695001", "695022", "695011", "695024", "695034", "695001", "695001", "695001", "695033", "695026", "695309", "695586", "695015", "695505", "695507", "695002", "695605", "695505", "695589", "695013", "695523", "695602", "695602", "695571", "695311", "695602", "695002", "695611", "695541", "695602", "695313", "695541", "695015", "695541", "695006", "695601", "695543", "695523", "695011", "695006", "695013", "695581", "695304", "695501", "695011", "695586", "695041","695601"],
    Visakhapatnam: ["530001", "530002", "530003", "530004", "530005", "530007", "530008", "530009", "530011", "530012", "530013", "530014", "530015", "530016", "530017", "530018", "530020", "530022", "53024"],
    Vijayawada: ["520002", "520003", "520004", "520005", "520006", "520007", "520008", "520009", "520010", "520011", "520012", "520013", "520014", "520015", "520016", "521104", "521107", "521108", "521134", "521137"],
    Nagpur: ["440001", "440002", "440003", "440004", "440005", "440006", "440007", "440008", "440009", "440010", "440011", "440012", "440013", "440014", "440015", "440016", "440017", "440018", "440019", "440020", "440021", "440022", "440023", "440024", "440025", "440026", "440027", "440028", "440029", "440030", "440031", "440032", "440033", "440034", "440035", "440036", "440037"],
    Kolkata: ["700001", "700002", "700003", "700004", "700005", "700006", "700007", "700008", "700009", "700010", "700011", "700012", "700013", "700014", "700015", "700016", "700017", "700018", "700019", "700020"],
    Mumbai: ["400001", "400002", "400003", "400004", "400005", "400006", "400007", "400008", "400009", "400010", "400011", "400012", "400013", "400014", "400015", "400016", "400017", "400018", "400019", "400020"],
    Bengaluru:["560001", "560002", "560003", "560004", "560005", "560006", "560007", "560008", "560009", "560010", "560011", "560012", "560013", "560014", "560015", "560016", "560017", "560018", "560019", "560020", "560021", "560022", "560023", "560024", "560025", "560026", "560027", "560028", "560029", "560030", "560031", "560032", "560033", "560034", "560035", "560036", "560037", "560038", "560039", "560040", "560041", "560042", "560043", "560044", "560045", "560046", "560047", "560048", "560049", "560050", "560051", "560052", "560053", "560054", "560055", "560056", "560057", "560058", "560059", "560060", "560061", "560062", "560063", "560064", "560065", "560066", "560067", "560068", "560069", "560070", "560071", "560072", "560073", "560074", "560075", "560076", "560077", "560078", "560079", "560080", "560081", "560082", "560083", "560084", "560085", "560086", "560087", "560088", "560089", "560090", "560091", "560092", "560093", "560094", "560095", "560096", "560097", "560098", "560099", "560100", "560102", "560103", "560104", "560105", "560107", "560108", "560109", "560110", "560111", "560113", "560114", "560117", "560140", "560977", "5601229", "562107", "562109", "562112", "562114", "562123", "562125", "562129", "562130", "562149", "562157", "562162", "563160", "570075", "570078", "530068"]    ,
    Mysore: ["570001", "570002", "570003", "570004", "570005", "570006", "570007", "570008", "570009", "570010", "570011", "570012", "570014", "570015", "570016", "570017", "570018", "570019", "570020", "570021"],
    Puducherry:['605007', '605007', '605110', '607402', '605104', '605001', '605014', '607402', '605006', '605106', '605111', '605106', '605007', '605106', '605106', '605014', '604301', '607402', '605110', '605104', '605101', '605008', '605105', '607402', '607402', '605106', '605110', '605501', '605101', '605009', '605004', '605009', '605004', '605003', '605501', '605007', '605005', '605106', '605001', '605010', '605012', '605106', '605014', '607402', '605001', '605001', '605001', '605001', '605014', '605007', '605111', '605111', '605010', '605013', '605111', '607402', '605501', '605002', '605110', '605009', '605004', '605007', '605501', '605501', '605007', '605011', '605110', '605009'],
};
const procced=document.getElementById("btn1");
const formgroup=document.getElementsByClassName(".form-group");
const code=document.getElementById("code");

// Function to validate the entered PIN code
function validateCode(city, pincode) {
    if (validPincodes[city] && validPincodes[city].includes(pincode)) {
        return true
    } else {
        return false;
    }
}

function setError(element,message){
    element.classList.add("error");
    pincodeError.textContent = message;
}
function clearError(element){
    element.classList.remove("error");
    pincodeError.textContent = "";
}

function Changecity(e) {
    var citySelect = document.getElementById("city");
    var selectedCity = citySelect.value;
    formObject.city = selectedCity;
    validatePincode();
}

function validatePincode() {
    var pincodeInput = document.getElementById("code");
    var pincode = pincodeInput.value.trim();
    var pincodePattern = /^[0-9]{6}$/;

    if (pincode.length != 0) {
        if (formObject.hasOwnProperty('city') && pincode.length!==0) {

            if (!pincodePattern.test(pincode)) {
                setError(pincodeInput, "Please enter a valid 6-digit pincode.");
                btn1.disabled=true;

            } else {
                if (validateCode(formObject.city, pincode)) {
                    clearError(pincodeInput);
                    btn1.disabled=false;
                }
                else {
                    //i am here
                    let pin = pincode.slice(0, 4);
                    let flag = false;
                    console.log(pin)
                    validPincodes[formObject.city].map((vl) => {
                        if (vl.slice(0, 4) == pin) {
                            flag = true;
                        }
                    })


                    if (flag) {
                        setError(pincodeInput, "Oops! Looks like your area is not covered.")
                        btn1.disabled=true;
                    }
                    else {
                        setError(pincodeInput, "Please Enter a Valid Pincode.")
                        btn1.disabled=true;
                    }

                }

            }
        }
        else {
            setError(pincodeInput, 'Please select the City')
        }
    }
    else {

        clearError(pincodeInput);
    }
    pincodeInput.addEventListener("input",validatePincode);

    addEventListener('button',function(event){
        event.preventDefault();
    })
}
let flagAddress = false;
function validateAddress() {
    let addressInput = document.getElementById("address");
    let address = addressInput.value;
    const addressRegex = /^[A-Za-z0-9\s\.,#-]+$/;

    if (address.length != 0) {

        //     if(addressRegex.test(address)){

        //         setError(addressInput,'Invalid address')
        //         flagAddress=false;
        //     }
        //     else{
        //         clearError(addressInput)
        //         flagAddress=true;

        //     }

        // }
        // else{
        //     clearError(addressInput);
        // }

        clearError(addressInput)
    }
}
//STEPS 1,2,3

function Step1() {
    document.getElementById("btn1").style.display = "block"
    document.getElementById("btn2").style.display = "none"
    document.getElementById("btn3").style.display = "none"

    sectionState(1);
    navBorder[0].classList.add("navBorder")
    document.querySelector(".section1").classList.remove("unactiveSection")
    document.querySelector(".section1").classList.add("activeSection");
    document.getElementById("btn1").innerHTML = "Proceed"
    document.getElementById('btn1').onclick = null;
    document.getElementById('btn1').addEventListener('click', function () {
        if (validateBtn()) {

            Step2();
        }
    });

}
function Step2() {
    sectionState(0);
    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn2").style.display = "none"
    document.getElementById("btn3").style.display = "block"
    document.getElementById("previous").style.display = "block"


    if (document.querySelector(".section2>.step2").children.length == 0) {
        Section2();
    }
    navBorder[0].addEventListener('click', () => {
        Step1();
    })

    document.getElementById("btn1").innerHTML = "Proceed"
    navBorder[1].classList.add("navBorder");
    document.querySelector(".section2").classList.remove("unactiveSection");
    document.querySelector(".section2").classList.add("activeSection")


}
function Step3(bill, price) {
    document.getElementById("btn2").style.display = "block"
    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn3").style.display = "none"
    let currprice = parseInt(price);

    console.log("current price ",currprice)
    let req;
    if (currprice > 1000) {
        req = 990;
    }
    else {
        req = 720;
    }
    formObject['total'] = currprice - req;

    //console.log("I am here")



    //console.log(price)
    //console.log(bill)
    sectionState(1);
    navBorder[2].classList.add("navBorder");
    document.querySelector(".section3").classList.remove("unactiveSection");
    document.querySelector(".section3").classList.add("activeSection");
    Section3(bill, price);

    document.querySelector(".step-3 > .form-group>#date").addEventListener('click', (e) => {
        e.target.showPicker()
    });


    navBorder[0].addEventListener('click', () => {
        Step1();
    })
    navBorder[1].addEventListener('click', () => {
        Step2();
    })
}

function Step4() {
    sectionState(2);
    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn2").style.display = "none"
    document.getElementById("previous").style.display = "none"
    document.getElementById("navLink").style.display = "none";
    document.querySelector(".first").style.display = "none";
    document.querySelector(".section4").classList.remove("unactiveSection");
    document.querySelector(".section4").classList.add("activeSection")


    let info2 = document.querySelectorAll(".info2>h1")
    info2[1].children[0].textContent = formObject['total'] + "/-";


}


function validateName() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value.trim();

    if (name === "") {
        setError(nameInput, "Please enter valid name.");

    } else {
        clearError(nameInput);
    }

}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    if (email.length != 0) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            setError(emailInput, "Please enter a valid email address.");
        } else {
            clearError(emailInput);
        }
    }
    else {
        clearError(emailInput)
    }
}
function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var phone = phoneInput.value.trim();
    if (phone.length != 0) {
        var phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            setError(phoneInput, "Please enter a valid 10-digit phone number.");
        } else {
            clearError(phoneInput);
        }
    }
    else {
        clearError(phoneInput)
    }
}

function selFun(e) {
    if (e.type == "date") {
        if (e.value.length > 0) {
            e.placeholder = "";
        }
        else {
            e.placeholder = "dd-mm-yyyy"
        }
    }
    if (e.value.length != 0) {
        clearError(e)
    }
}
document.getElementById("defaultCheck1").addEventListener("click", (e) => {
    if (e.target.checked) {
        clearError(e.target.nextElementSibling);
    }
})




// Utility functions
function setError(input, message) {
    var errorDiv = input.nextElementSibling;
    //console.log(errorDiv)
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}

function clearError(input) {
    var errorDiv = input.nextElementSibling;
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
}

// Attach event listeners for validation
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("code").addEventListener("blur", validatePincode)


//Section-2   
function Section2() {
    let bubble;

    const step2 = document.querySelector(".step2")
    arr.map((vl) => {
        innerDiv = document.createElement("div");
        innerDiv.setAttribute('class', 'innerDiv');

        let first =
            `<h1>${vl.name}</h1>
        <h2>${vl.price}</h2>
        `
        let second = ""
        vl.list.map((value) => {
            second += `<div class="wrapSecond-inner">
            <img src="./checkmark-24.png"/>
            <span>${value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}</span>
            </div>`
        })
        let wrapSecond = document.createElement("div");
        let wrapFirst = document.createElement("div");
        wrapFirst.innerHTML = `${first}`
        wrapSecond.innerHTML = `${second}`
        innerDiv.appendChild(wrapFirst)
        innerDiv.appendChild(wrapSecond)
        wrapSecond.className = "wrapSecond"
        wrapFirst.className = "wrapFirst"
        step2.appendChild(innerDiv);
    })

    innerDivState = () => {
        Array.from(document.querySelectorAll(".innerDiv")).map((vl) => {
            vl.classList.remove("activeInnerDiv")
        })


    }
    Array.from(document.querySelectorAll(".innerDiv")).map((vl) => {
        vl.addEventListener('click', (e) => {
            innerDivState();
            if (e.target.className === 'wrapSecond' || e.target.className === "wrapFirst") {
                e.target.parentElement.classList.add("activeInnerDiv");
                bubble = e.target.parentElement;
            }
            else if (e.target.tagName === "H1" || e.target.tagName === "H2") {
                console.log("first");
                e.target.parentElement.parentElement.classList.add("activeInnerDiv");
                bubble = e.target.parentElement;
            }
            else if (e.target.className === 'innerDiv') {
                e.target.classList.add("activeInnerDiv")
                bubble = e.target;
            }
            else if (e.target.className == 'wrapSecond-inner') {
                e.target.parentElement.parentElement.classList.add("activeInnerDiv")
                bubble = e.target.parentElement.parentElement;
            }
            else {
                if (e.target.parentElement.parentElement.parentElement.className == "innerDiv") {
                    // console.log(e.target.parentElement.parentElement.parentElement)
                    e.target.parentElement.parentElement.parentElement.classList.add("activeInnerDiv");
                    bubble = e.target.parentElement.parentElement.parentElement;

                }
                // console.log(e.target.parentElement.parentElement.parentElement)



            }
            if (document.querySelector(".section2").classList.contains("activeSection")) {
                const step2Element = document.querySelector(".step2");
                if (step2Element.classList.contains("activeInnerDiv")) {
                    step2Element.classList.remove("activeSection");

                }

                document.getElementById("btn3").addEventListener('click', () => {

                    var order = document.querySelectorAll(".activeInnerDiv");


                    userorder.service = order[0].children[0].children[0].innerHTML;
                    if (userorder.service === "General Service") userorder.amount = 1099;
                    if (userorder.service === "Installation") userorder.amount = 799;
                    if (userorder.service === "Repair") userorder.amount = 1099;
                    //console.log(userorder);
                    // console.log(document.querySelector(".section1").classList.contains("activeSection"))
                    if (document.querySelector(".section1").classList.contains("activeSection")) {
                        Step2();
                    }
                    else {
                        let bill = bubble.children[0].firstElementChild.textContent
                        let price = bubble.children[0].lastElementChild.textContent
                        //console.log(bill)
                        //console.log(price)
                        Step3(bill, price);
                    }
                })
            }


        }, true)
    })

}
function validateBtnStep3() {
    let isValid = true;
    if (document.getElementsByClassName("error")[0].textContent.length != 0) {
        return false;
    }
    for (let i = 0; i < stepArr3.length; i++) {
        let vl = stepArr3[i];

        if (vl.value.length === 0) {
            setError(vl, "*Required");
            isValid = false;
        }
    }


    return isValid;
}
//Section-3
document.addEventListener('DOMContentLoaded', function () {
    const payNowRadio=document.getElementById('paynow');
    const priceElement=document.getElementById('price');
    const paidamtElement=document.getElementById('paid-amt');
    
    
    
    
    

    payNowRadio.addEventListener('change',function(){
        if (this.checked){
            priceElement.textContent= ""+discount+"";
            paidamtElement.innerHTML=""+dis+"";
            //discountElement.style.display="inline-block";
            discountElement.textContent="Discount of 10% is applied";
            
            buttonElement.textContent="Pay Now >>";
        }
            


        

    
});
    const payLaterRadio=document.getElementById('paylater');
    const discountElement=document.getElementById("Discount");
    const buttonElement=document.getElementById("btn2");
    payLaterRadio.addEventListener('change',function(){
        if (this.checked){
            priceElement.textContent="" + discount + "";
            paidamtElement.textContent="" + discount;
            discountElement.style.display="none";
            buttonElement.textContent="Book Now >>";
        }
        function handleRadioClick(){
            if (payNowRadio.checked || payLaterRadio.checked){
                buttonElement.disabled = false;
            }else{
                buttonElement.disabled=true;
            }
        }
        payNowRadio.addEventListener("click",handleRadioClick);
        payLaterRadio.addEventListener("click",handleRadioClick);
    });
});
function Section3(bill,price) {
    if (parseInt(price) >= 1000){
        discount=price;
        dis=990;            
        

}
else{
    discount=price;
    dis=720;
  
}


    document.getElementById("bill").innerHTML = bill
    //document.getElementsByName("payment")= paynow
 
    
    

    if (document.querySelector(".section3").classList.contains("activeSection")) {
        let step3Group = document.querySelectorAll(".step3-group");
        //console.log(step3Group)
        //document.getElementById("btn2").addEventListener("click", (e) => {
        // let a=step3Group[0].children[0].value.length
        // let b=step3Group[1].children[0].value.length
        // let c=step3Group[2].children[0].value.length
        // let d=step3Group[3].children[0].checked
        document.getElementById("btn2").onclick = (e) => {
            var date = document.getElementById('date').value;
            var slot = document.getElementById('response').value;
            var address = document.getElementById('address').value;
            var Amountpay = document.getElementById('paid-amt')
            var Amounttopay=Amountpay.innerText;
            console.log("amount", Amounttopay);



            userorder.data = date;
            userorder.slot = slot;
            userorder.address = address;
            userorder.Amounttopay = Amounttopay;
            console.log(userorder);

            var cd = new Date();

            // // Get the current year, month, and day
            var cy = cd.getFullYear();
            var cm = (cd.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
            var cd = cd.getDate().toString().padStart(2, '0');

            // // Format the date as "YYYY-MM-DD" for the min attribute
            var fD = `${cy}-${cm}-${cd}`;
            //console.log(stepArr3[2])
            if (validateBtnStep3()) {

                if (document.querySelector(".section3").classList.contains("activeSection")) {
                    formObject['date'] = fD;
                    //console.log(formObject)
                    //console.log(e.target.textContent)


                }
            }
            if (date && slot && address && document.getElementById('defaultCheck1').checked) {
                //console.log("hi");
                // console.log(getEventListeners(document.getElementById("btn2")));
                checkout(userorder);
            }
            if (!document.getElementById('defaultCheck1').checked)
                window.alert("please agree to terms and conditions");
        }//)
    }
}




const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const year = tomorrow.getFullYear();
const month = (tomorrow.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1
const date = tomorrow.getDate().toString().padStart(2, '0');
const formattedDate = `${year}-${month}-${date}`;
// Set the min attribute of the input element
document.getElementById("date").setAttribute("min", formattedDate);


function validateBtn() {
    let arr4 = ["Please select a city", "Please enter a valid 6-digit pincode.", "Please select a product", "Please enter valid name.", "Please enter a valid email address.", "Please enter a valid 10-digit phone number."]
    let isValid = true;
    if (document.getElementsByClassName("error")[0].textContent.length != 0) {
        return false;
    }
    for (let i = 0; i < formArr.length; i++) {
        let vl = formArr[i];
        // console.log(vl)

        if (vl.value.length === 0) {
            setError(vl, arr4[i]);
            isValid = false;
        }
    }
    return isValid;

}

var userorder = {}
function userdetails() {
    //console.log("hi");
    var city = document.getElementById('city').value;
    var pincode = document.getElementById('code').value;
    var product = document.getElementById('product').value;
    var brand = document.getElementById('brand').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    userorder.name = name;
    userorder.phone = phone;
    userorder.email = email;
    userorder.city = city;
    userorder.pincode = pincode;
    userorder.product = product;
    userorder.brand = brand;

    userorder.logindate = formattedToday;
    console.log(userorder);
}
document.getElementById('btn1').addEventListener('click', function () {

    userdetails();
    storeuser(userorder);
    if (document.querySelector(".section1").classList.contains("activeSection")) {

        if (validateBtn()) {
            console.log("Iam inside")
            Step2();
        }


    }
});
function Previous() {
    document.getElementById("previous").style.display = "none"
}

document.getElementById("previous").addEventListener('click', (e) => {


    if (navBorder[1].classList.contains("navBorder")) {
        Step1();
        Previous();
    }
    if (navBorder[2].classList.contains("navBorder")) {
        Step2();
    }


})





Step1();
initalForm();

function storeuser(user, sheet) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type':
                'application/json;charset=utf-8'
        },
        body: JSON.stringify({ "userdetails": user, "sheet": sheet })
    }
    // Fake api for making post requests 
    let fetchRes = fetch(
        "https://server-410811.el.r.appspot.com/api/sheets/storeuser",
        options);
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        })
}

function checkout(userorder) {
    console.log(userorder);


    const fetchres = fetch(
        "https://server-410811.el.r.appspot.com/api/payments/requestkey",
        
    );
    console.log("User order amount:", userorder.Amounttopay);

    fetchres.then(res =>
        res.json()).then(d => {

            let options = {
                method: 'POST',
                headers: {
                    'Content-Type':
                        'application/json;charset=utf-8'
                },
                body: JSON.stringify({ "userorder": userorder })
            }

            let fetchRes = fetch(
                "https://server-410811.el.r.appspot.com/api/payments/createorder",
                options);
            fetchRes.then(res =>
                res.json()).then(data => {
                    console.log(d);
                    console.log(data);
                    var poptions = {
                        key: d.key, // Enter the Key ID generated from the Dashboard
                        amount: , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        currency: "INR",
                        name: "FIXMYMILL ",
                        description: userorder.service,
                        image: "images/Favicon.png",
                        order_id: data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                        

                        handler: async function (response) {

                            let voptions = {
                                method: 'POST',
                                headers: {
                                    'Content-Type':
                                        'application/json;charset=utf-8'
                                },
                                body: JSON.stringify({ payment_Id: response.razorpay_payment_id, order_Id: data.order.id, signature: response.razorpay_signature })
                            }
                            // Fake api for making post requests 
                            let fetchRes = fetch(
                                "https://server-410811.el.r.appspot.com/api/payments/verifypayment",
                                voptions);
                            fetchRes.then(res =>
                                res.json()).then(vd => {
                                    console.log(vd);
                                    if (vd.success === "true") {
                                        storeuser(userorder, 2);
                                        Step4(); 
                                        console.log(response.razorpay_payment_id);
                                        document.getElementById('transaction_id').textContent = response.razorpay_payment_id;
                                    }
                                    else {
                                        window.alert("something went wrong please pay again.if any extra amount deduced from bank will be refunded");
                                    }
                                })

                        },
                        prefill: {
                            name: userorder.name,
                            email: userorder.email,
                            contact: userorder.phone
                        },
                        notes: {
                            address: "Razorpay Corporate Office"
                        },
                        theme: {
                            color: "#ffa500"
                        }
                    };
                    var rzp1 = new window.Razorpay(poptions);
                    rzp1.on('payment.failed', function (response) {
                        alert("something went wrong.Please do repayment.If any amount deduced will be credited to your account within 3 days.please note the below payment id for future queries" + response.error.metadata.payment_id);
                        // alert(response.error.code);
                        // alert(response.error.description);
                        // alert(response.error.source);
                        // alert(response.error.step);
                        // alert(response.error.reason);
                        // alert(response.error.metadata.order_id);
                        // alert(response.error.metadata.payment_id);
                    });
                    
                    rzp1.open();
                })
        })










}
