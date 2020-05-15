// Created on : 11.05.20
// Author : me
//label den inputs zuordnen
//document.getElementById('MyFormElem').label.innerHTML = 'Look ma this works!'; //get label
var labels = document.getElementsByTagName('LABEL');
for (var i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor != '') {
        var elem = document.getElementById(labels[i].htmlFor);
        if (elem)
            elem.label = labels[i];
    }
}
const checkboxes = document.querySelectorAll('.checkboxesClass input[type=checkbox]');
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function () {
        cbChangedFunction();
    });
}

//checkboxes
var s0708 = document.getElementById("0708");
var s0809 = document.getElementById("0809");
var s0910 = document.getElementById("0910");
var s1011 = document.getElementById("1011");
var s1112 = document.getElementById("1112");
var s1213 = document.getElementById("1213");
var s1314 = document.getElementById("1314");
var s1415 = document.getElementById("1415");
var s1516 = document.getElementById("1516");
var s1617 = document.getElementById("1617");
var s1718 = document.getElementById("1718");
var s1819 = document.getElementById("1819");
var Schuljahr = [s0708, s0809, s0910, s1011, s1112, s1213, s1314, s1415, s1516, s1617, s1718, s1819];

var gym = document.getElementById("gym");
var fms = document.getElementById("fms");
var pas = document.getElementById("pas");
var hms = document.getElementById("hms");
var ims = document.getElementById("ims");
var Schultyp = [gym, fms, pas, hms, ims];

var mars = document.getElementById("mars");
var ven = document.getElementById("ven");
var Geschlecht = [mars, ven];

var ch = document.getElementById("ch");
var af = document.getElementById("af");
var afr = document.getElementById("afr");
var eg = document.getElementById("eg");
var al = document.getElementById("al");
var ar = document.getElementById("ar");
var arm = document.getElementById("arm");
var as = document.getElementById("as");
var et = document.getElementById("et");
var au = document.getElementById("au");
var ba = document.getElementById("ba");
var ban = document.getElementById("ban");
var be = document.getElementById("be");
var bo = document.getElementById("bo");
var br = document.getElementById("br");
var bu = document.getElementById("bu");
var chi = document.getElementById("chi");
var ci = document.getElementById("ci");
var dä = document.getElementById("dä");
var de = document.getElementById("de");
var dom = document.getElementById("dom");
var er = document.getElementById("er");
var es = document.getElementById("es");
var fi = document.getElementById("fi");
var fr = document.getElementById("fr");
var gr = document.getElementById("gr");
var gro = document.getElementById("gro");
var gu = document.getElementById("gu");
var ho = document.getElementById("ho");
var indi = document.getElementById("indi");
var ind = document.getElementById("ind");
var ir = document.getElementById("ir");
var ira = document.getElementById("ira");
var it = document.getElementById("it");
var ja = document.getElementById("ja");
var ka = document.getElementById("ka");
var kol = document.getElementById("kol");
var ko = document.getElementById("ko");
var kos = document.getElementById("kos");
var kr = document.getElementById("kr");
var le = document.getElementById("le");
var li = document.getElementById("li");
var ma = document.getElementById("ma");
var mar = document.getElementById("mar");
var mau = document.getElementById("mau");
var me = document.getElementById("me");
var mi = document.getElementById("mi");
var mo = document.getElementById("mo");
var mon = document.getElementById("mon");
var ne = document.getElementById("ne");
var ni = document.getElementById("ni");
var nig = document.getElementById("nig");
var nw = document.getElementById("nw");
var na = document.getElementById("na");
var nm = document.getElementById("nm");
var no = document.getElementById("no");
var ös = document.getElementById("ös");
var pa = document.getElementById("pa");
var par = document.getElementById("par");
var po = document.getElementById("po");
var por = document.getElementById("por");
var rum = document.getElementById("rum");
var ru = document.getElementById("ru");
var sw = document.getElementById("sw");
var se = document.getElementById("se");
var sl = document.getElementById("sl");
var slo = document.getElementById("slo");
var so = document.getElementById("so");
var sp = document.getElementById("sp");
var srl = document.getElementById("srl");
var sos = document.getElementById("sos");
var sa = document.getElementById("sa");
var sy = document.getElementById("sy");
var th = document.getElementById("th");
var tr = document.getElementById("tr");
var tu = document.getElementById("tu");
var tk = document.getElementById("tk");
var uk = document.getElementById("uk");
var un = document.getElementById("un");
var us = document.getElementById("us");
var vi = document.getElementById("vi");
var unk = document.getElementById("unk");
var Nationen = [ch, af, afr, eg, al, ar, arm, as, et, au, ba, ban, be, bo, br, bu, chi, ci, dä, de, dom, er, es, fi, fr, gr, gro, gu, ho, indi, ind, ir, ira, it, ja, ka, kol, ko, kos, kr, le, li, ma, mar, mau, me,
    mi, mo, mon, ne, ni, nig, nw, na, nm, no, ös, pa, par, po, por, rum, ru, sw, se, sl, slo, so, sp, srl, sos, sa, sy, th, tr, tu, tk, uk, un, us, vi, unk];

//data
var data2 = null;

//Checkbox dropdowns
var expanded = false;
function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
var expanded2 = false;
function showCheckboxes2() {
    var checkboxes = document.getElementById("checkboxes2");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
var expanded3 = false;
function showCheckboxes3() {
    var checkboxes = document.getElementById("checkboxes3");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
var expanded4 = false;
function showCheckboxes4() {
    var checkboxes = document.getElementById("checkboxes4");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
//Select all
function selectAllCB1() {
    var obj = document.getElementById("sA1");
    if (obj.checked) {
        var temp = true;
    } else {
        var temp = false;
    }
    for (var i = 0; i < Schuljahr.length; i++) {
        Schuljahr[i].checked = temp;
    }
}
function selectAllCB2() {
    var obj = document.getElementById("sA2");
    if (obj.checked) {
        var temp = true;
    } else {
        var temp = false;
    }
    for (var i = 0; i < Schultyp.length; i++) {
        Schultyp[i].checked = temp;
    }
}
function selectAllCB3() {
    var obj = document.getElementById("sA3");
    if (obj.checked) {
        var temp = true;
    } else {
        var temp = false;
    }
    for (var i = 0; i < Geschlecht.length; i++) {
        Geschlecht[i].checked = temp;
    }
}
function selectAllCB4() {
    var obj = document.getElementById("sA4");
    if (obj.checked) {
        var temp = true;
    } else {
        var temp = false;
    }
    for (var i = 0; i < Nationen.length; i++) {
        Nationen[i].checked = temp;
    }
}
//filter-function for 2dArray
function filterByProperty(array, prop, value) {
    var filtered = [];
    for (var i = 0; i < array.length; i++) {
        var obj = array[i];
        if (obj[prop] == value) {
            filtered.push(obj);
        }
    }
    return filtered;
}
function filterByProperty3d(array, prop, value) {
    var filtered = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j][prop] == value) {
                filtered.push(array[i][j]);
            }
        }
    }
    return filtered;
}
getData();
function getData() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myObj = JSON.parse(xmlhttp.responseText);
            data2 = myObj;
            console.log(data2);
        }
    };
    xmlhttp.open("GET", "api.php", true);
    xmlhttp.send();
}
var amDatenFiltern = false;
//Funktion die ausgeführt wird wenn der checkboxlistener aktiviert wird
function cbChangedFunction() {
    if (!amDatenFiltern) {
        filterData();
    }
}
var progressV = 0;
function compare2(md1, md2, md3, md4) {
    var temparray = [];
    for (var k = 0; k < md2.length; k++) {
        for (var l = 0; l < md2[k].length; l++) {
            for (var m = 0; m < md3.length; m++) {
                for (var n = 0; n < md3[m].length; n++) {
                    for (var o = 0; o < md4.length; o++) {
                        for (var p = 0; p < md4[o].length; p++) {
                            if (md2[k][l] == md3[m][n] &&
                                md2[k][l] == md4[o][p]) {
                                temparray.push(md2[k][l]);
                            }
                        }
                    }
                }
            }
        }
    }
    return temparray;
};
function filterData() {
    amDatenFiltern = true;
    var checkedSchuljahr = [];
    var checkedSchultyp = [];
    var checkedGeschlecht = [];
    var checkedNationalitaet = [];
    for (var i = 0; i < Schuljahr.length; i++) {
        if (Schuljahr[i].checked) {
            checkedSchuljahr.push(Schuljahr[i].label.innerText);
        }
    }
    for (var i = 0; i < Schultyp.length; i++) {
        if (Schultyp[i].checked) {
            checkedSchultyp.push(Schultyp[i].label.innerText);
        }
    }
    for (var i = 0; i < Geschlecht.length; i++) {
        if (Geschlecht[i].checked) {
            checkedGeschlecht.push(Geschlecht[i].label.innerText);
        }
    }
    for (var i = 0; i < Nationen.length; i++) {
        if (Nationen[i].checked) {
            checkedNationalitaet.push(Nationen[i].label.innerText);
        }
    }
    var filteredSchuljahr = [];
    var filteredSchultyp = [];
    var filteredGeschlecht = [];
    var filteredNationalitaet = [];
    for (var i = 0; i < checkedSchuljahr.length; i++) {
        filteredSchuljahr.push(filterByProperty(data2, 1, checkedSchuljahr[i]));
    }
    for (var i = 0; i < checkedSchultyp.length; i++) {
        filteredSchultyp.push(filterByProperty3d(filteredSchuljahr, 3, checkedSchultyp[i]));
    }
    for (var i = 0; i < checkedGeschlecht.length; i++) {
        filteredGeschlecht.push(filterByProperty3d(filteredSchultyp, 4, checkedGeschlecht[i]));
    }
    for (var i = 0; i < checkedNationalitaet.length; i++) {
        filteredNationalitaet.push(filterByProperty3d(filteredSchultyp, 5, checkedNationalitaet[i]));
    }
    console.log(filteredNationalitaet);
    console.log(filteredGeschlecht);
    console.log(filteredSchultyp);
    console.log(filteredSchuljahr);

    var filteredDaten = compare2(filteredSchuljahr, filteredSchultyp, filteredGeschlecht, filteredNationalitaet);
    console.log(filteredDaten);

    var SchuljahrLabels = [];
    var SchuljahrData = [];
    getLabelsData2(filteredSchuljahr, SchuljahrLabels, 1, filteredDaten, SchuljahrData);
    var SchulTypLabels = [];
    var SchulTypData = [];
    getLabelsData2(filteredSchultyp, SchulTypLabels, 3, filteredDaten, SchulTypData);
    var GeschlechtLabels = [];
    var GeschlechtData = [];
    getLabelsData2(filteredGeschlecht, GeschlechtLabels, 4, filteredDaten, GeschlechtData);
    var NationalitaetLabels = [];
    var NationalitaetData = [];
    getLabelsData2(filteredNationalitaet, NationalitaetLabels, 5, filteredDaten, NationalitaetData);
    console.log(NationalitaetLabels);
    console.log(NationalitaetData);
    if (checkedSchuljahr != 0) {
        addData(ChartPieSchuljahr, SchuljahrLabels, SchuljahrData);
        addData(ChartPieSchulTyp, SchulTypLabels, SchulTypData);
        addData(ChartPieGeschlecht, GeschlechtLabels, GeschlechtData);
        addData(ChartPieNationalitaet, NationalitaetLabels, NationalitaetData);

        addData(ChartBarSchuljahr, SchuljahrLabels, SchuljahrData);
        addData(ChartBarSchulTyp, SchulTypLabels, SchulTypData);
        addData(ChartBarGeschlecht, GeschlechtLabels, GeschlechtData);
        addData(ChartBarNationalitaet, NationalitaetLabels, NationalitaetData);

        addData(ChartLine1, SchuljahrLabels, SchuljahrData);
    } else {
        addData(ChartPieSchuljahr, [], []);
        addData(ChartPieSchulTyp, [], []);
        addData(ChartPieGeschlecht, [], []);
        addData(ChartPieNationalitaet, [], []);

        addData(ChartBarSchuljahr, [], []);
        addData(ChartBarSchulTyp, [], []);
        addData(ChartBarGeschlecht, [], []);
        addData(ChartBarNationalitaet, [], []);

        addData(ChartLine1, [], []);
    }
    var gridTable = document.getElementById("gridTable");
    gridTable.innerHTML = '';
    filteredDaten.forEach(function (rowData) {
        rowData.forEach(function (cellData) {
            var cell = document.createElement('span');
            cell.appendChild(document.createTextNode(cellData));
            gridTable.appendChild(cell);
        });
    });
    amDatenFiltern = false;
}

//Labels und Data funktions
function getLabelsData2(filteredData, Labels, zeile, filteredDaten, Data) {
    for (var i = 0; i < filteredData.length; i++) {
        try {
            Labels.push(filteredData[i][0][zeile]);
        } catch { }
        var SchulAnzahlSuS = 0;
        for (var j = 0; j < filteredData[i].length; j++) {
            for (var k = 0; k < filteredDaten.length; k++) {
                if (filteredData[i][j] == filteredDaten[k]) {
                    SchulAnzahlSuS += parseInt(filteredData[i][j][6]);
                }
            }
        }
        if (SchulAnzahlSuS != 0) {
            Data.push(SchulAnzahlSuS);
        }        
    }
}
// Dia darstellen
var ChartBackgroundColor = [
    '#B71C1C',
    '#880E4F',
    '#4A148C',
    '#1A237E',
    '#0D47A1',
    '#01579B',
    '#006064',
    '#004D40',
    '#1B5E20',
    '#33691E',
    '#827717',
    '#F57F17',
    '#FF6F00',
    '#E65100'
]
var tempcolorArray = Array.from({ length: 100 }, () => getRandomColor());
ChartBackgroundColor = ChartBackgroundColor.concat(tempcolorArray);
var tempData = [25, 23, 24, 25];
var templabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
var tempBackgroundColor = [
    '#B71C1C',
    '#880E4F',
    '#4A148C',
    '#1A237E',
    '#0D47A1',
    '#01579B',
    '#006064',
    '#004D40',
    '#1B5E20',
    '#33691E',
    '#827717',
    '#F57F17',
    '#FF6F00',
    '#E65100',
    '#BF360C'
];
var tempBorderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];
//Diagramme erstellen
var ChartPieSchuljahr = createDia(document.getElementById('myChartPie1'), 'Anzahl Schüler/Schuljahr', 'pie');
var ChartPieSchulTyp = createDia(document.getElementById('myChartPie2'), 'Anzahl Schüler/SchulTyp', 'pie');
var ChartPieGeschlecht = createDia(document.getElementById('myChartPie3'), 'Anzahl Schüler/Geschlecht', 'pie');
var ChartPieNationalitaet = createDia(document.getElementById('myChartPie4'), 'Anzahl Schüler/Staatszugehörigkeit', 'pie');

var ChartBarSchuljahr = createDia(document.getElementById('myChartBar1'), 'Anzahl Schüler/Schuljahr', 'bar');
var ChartBarSchulTyp = createDia(document.getElementById('myChartBar2'), 'Anzahl Schüler/SchulTyp', 'bar');
var ChartBarGeschlecht = createDia(document.getElementById('myChartBar3'), 'Anzahl Schüler/Geschlecht', 'bar');
var ChartBarNationalitaet = createDia(document.getElementById('myChartBar4'), 'Anzahl Schüler/Staatszugehörigkeit', 'horizontalBar');

var ChartLine1 = createLineDia(document.getElementById('myChartLine1'), 'Verlauf der Anzahl Schüler', 'line');
//Tabelle
var Tabelle = document.getElementById("myTable");
//Neues Diagramm erstellen
function createDia(ctx, titel, typ) {
    console.log(titel);
    var newChart = new Chart(ctx, {
        type: typ,
        data: {
            labels: [],
            datasets: [{
                label: 'Schüler',
                data: [],
                backgroundColor: ChartBackgroundColor,
                borderColor: ChartBackgroundColor,
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: titel
            }
        }
    });
    return newChart;
}
function createLineDia(ctx, titel, typ) {
    console.log(titel);
    var newChart = new Chart(ctx, {
        type: typ,
        data: {
            labels: [],
            datasets: [{
                label: 'Schüler',
                data: [],
                backgroundColor: "#41ad49",
                pointBackgroundColor: ChartBackgroundColor,
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: titel
            }
        }
    });
    return newChart;
}
//Daten hinzufügen
function addData(chart, label, data) {
    chart.data.labels = label;
    chart.data.datasets[0].data = data;
    chart.update();
}
//Daten löschen
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    color += '70';
    console.log(color);
    return color;
}
document.getElementById('gridTable').style.display = 'none';
function NavButtonDia() {
    document.getElementById('gridTable').style.display = 'none';
    document.getElementById('ms1').style.display = 'block';
    document.getElementById('ms2').style.display = 'block';
    document.getElementById('ms3').style.display = 'block';
    document.getElementById('ms4').style.display = 'block';
    enableCharts();
}
function NavButtonTabelle() {
    disableCharts();
    document.getElementById('gridTable').style.display = 'grid';
    document.getElementById('ms1').style.display = 'none';
    document.getElementById('ms2').style.display = 'none';
    document.getElementById('ms3').style.display = 'none';
    document.getElementById('ms4').style.display = 'none';
}
disableCharts();
enableCharts();
function disableCharts() {
    document.getElementById('myChartPie1').style.display = 'none';
    document.getElementById('myChartPie2').style.display = 'none';
    document.getElementById('myChartPie3').style.display = 'none';
    document.getElementById('myChartPie4').style.display = 'none';
    document.getElementById('myChartBar1').style.display = 'none';
    document.getElementById('myChartBar2').style.display = 'none';
    document.getElementById('myChartBar3').style.display = 'none';
    document.getElementById('myChartBar4').style.display = 'none';
    document.getElementById('myChartLine1').style.display = 'none';
}
function enableCharts() {
    document.getElementById('myChartPie1').style.display = 'inline';
    document.getElementById('myChartPie2').style.display = 'inline';
    document.getElementById('myChartPie3').style.display = 'inline';
    document.getElementById('myChartPie4').style.display = 'inline';
    document.getElementById('myChartBar1').style.display = 'inline';
    document.getElementById('myChartBar2').style.display = 'inline';
    document.getElementById('myChartBar3').style.display = 'inline';
    document.getElementById('myChartBar4').style.display = 'inline';
    document.getElementById('myChartLine1').style.display = 'inline';
}

