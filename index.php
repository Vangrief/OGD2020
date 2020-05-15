<!doctype html>
<!--
    Created on : 11.05.2020
    Author     : ich
-->

<html lang="de">

<head>

    <!-- Meta tags -->
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
    <meta content="Bootstrap V4.3.1 Template für IMS Frauenfeld" name="description">
    <meta content="Julian Vogt, Luca Hanimann" name="author">

    <!-- Title -->
    <title>OGD Lernende der Mittelschulen des Kantons Thurgau</title>

    <!-- Bootstrap CSS by CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" />

    <!-- Custom CSS -->
    <link href="css/bootstrap-custom.css" rel="stylesheet">

    <!-- Favicons created with realfavicongenerator.net -->
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

</head>

<body>
    <header>
        <img id="wappen" src="img/1200px-Wappen_Thurgau_matt.svg.png" alt="Wappen Thurgau" height="100">
        <h1 id="headerText">Lernende der Mittelschulen des Kantons Thurgau</h1>
        <div id="platzhalterHeaderRechts"></div>
    </header>
    <main id="main">
        <form class="filters">
            <div id="ms1" class="multiselect">
                <div class="selectBox" onclick="showCheckboxes()">
                    <select>
                        <option>Schuljahr</option>
                    </select>
                    <div class="overSelect"></div>
                </div>
                <div id="checkboxes" class="checkboxesClass">
                    <label class="label23" for="sA1"><input onchange="selectAllCB1()" type="checkbox" id="sA1" />Alles auswählen</label>
                    <label class="label23" for="0708"><input type="checkbox" id="0708" />2007/2008</label>
                    <label class="label23" for="0809"><input type="checkbox" id="0809" />2008/2009</label>
                    <label class="label23" for="0910"><input type="checkbox" id="0910" />2009/2010</label>
                    <label class="label23" for="1011"><input type="checkbox" id="1011" />2010/2011</label>
                    <label class="label23" for="1112"><input type="checkbox" id="1112" />2011/2012</label>
                    <label class="label23" for="1213"><input type="checkbox" id="1213" />2012/2013</label>
                    <label class="label23" for="1314"><input type="checkbox" id="1314" />2013/2014</label>
                    <label class="label23" for="1415"><input type="checkbox" id="1415" />2014/2015</label>
                    <label class="label23" for="1516"><input type="checkbox" id="1516" />2015/2016</label>
                    <label class="label23" for="1617"><input type="checkbox" id="1617" />2016/2017</label>
                    <label class="label23" for="1718"><input type="checkbox" id="1718" />2017/2018</label>
                    <label class="label23" for="1819"><input type="checkbox" id="1819" />2018/2019</label>
                </div>
            </div>
            <div id="ms2" class="multiselect">
                <div class="selectBox" onclick="showCheckboxes2()">
                    <select>
                        <option>Mittelschultyp</option>
                    </select>
                    <div class="overSelect"></div>
                </div>
                <div id="checkboxes2" class="checkboxesClass">
                    <label class="label23" for="sA2"><input onchange="selectAllCB2()" type="checkbox" id="sA2" />Alles auswählen</label>
                    <label class="label23" for="gym"><input type="checkbox" id="gym" />Gymnasium</label>
                    <label class="label23" for="fms"><input type="checkbox" id="fms" />Fachmittelschulen</label>
                    <label class="label23" for="pas"><input type="checkbox" id="pas" />Passerelle</label>
                    <label class="label23" for="hms"><input type="checkbox" id="hms" />Handelsmittelschulen</label>
                    <label class="label23" for="ims"><input type="checkbox" id="ims" />Informatikmittelschulen</label>
                </div>
            </div>
            <div id="ms3" class="multiselect">
                <div class="selectBox" onclick="showCheckboxes3()">
                    <select>
                        <option>Geschlecht</option>
                    </select>
                    <div class="overSelect"></div>
                </div>
                <div id="checkboxes3" class="checkboxesClass">
                    <label class="label23" for="sA3"><input onchange="selectAllCB3()" type="checkbox" id="sA3" />Alles auswählen</label>
                    <label class="label23" for="mars"><input type="checkbox" id="mars" />männlich</label>
                    <label class="label23" for="ven"><input type="checkbox" id="ven" />weiblich</label>
                </div>
            </div>
            <div id="ms4" class="multiselect">
                <div class="selectBox" onclick="showCheckboxes4()">
                    <select>
                        <option>Nationalität</option>
                    </select>
                    <div class="overSelect"></div>
                </div>
                <div id="checkboxes4" class="checkboxesClass">
                    <label class="label23" for="sA4"><input onchange="selectAllCB4()" type="checkbox" id="sA4" />Alles auswählen</label>
                    <label class="label23" for="ch"><input type="checkbox" id="ch" />Schweiz</label>
                    <label class="label23" for="af"><input type="checkbox" id="af" />Afghanistan</label>
                    <label class="label23" for="afr"><input type="checkbox" id="afr" />Afrika</label>
                    <label class="label23" for="eg"><input type="checkbox" id="eg" />Ägypten</label>
                    <label class="label23" for="al"><input type="checkbox" id="al" />Albanien</label>
                    <label class="label23" for="ar"><input type="checkbox" id="ar" />Argentinien</label>
                    <label class="label23" for="arm"><input type="checkbox" id="arm" />Armenien</label>
                    <label class="label23" for="as"><input type="checkbox" id="as" />Asien</label>
                    <label class="label23" for="et"><input type="checkbox" id="et" />Äthiopien</label>
                    <label class="label23" for="au"><input type="checkbox" id="au" />Australien</label>
                    <label class="label23" for="ba"><input type="checkbox" id="ba" />Bahamas</label>
                    <label class="label23" for="ban"><input type="checkbox" id="ban" />Bangladesh</label>
                    <label class="label23" for="be"><input type="checkbox" id="be" />Belgien</label>
                    <label class="label23" for="bo"><input type="checkbox" id="bo" />Bosnien-Herzegowina</label>
                    <label class="label23" for="br"><input type="checkbox" id="br" />Brasilien</label>
                    <label class="label23" for="bu"><input type="checkbox" id="bu" />Bulgarien</label>
                    <label class="label23" for="chi"><input type="checkbox" id="chi" />Chile</label>
                    <label class="label23" for="ci"><input type="checkbox" id="ci" />China</label>
                    <label class="label23" for="dä"><input type="checkbox" id="dä" />Dänemark</label>
                    <label class="label23" for="de"><input type="checkbox" id="de" />Deutschland</label>
                    <label class="label23" for="dom"><input type="checkbox" id="dom" />Dominikanische Republik</label>
                    <label class="label23" for="er"><input type="checkbox" id="er" />Eritrea</label>
                    <label class="label23" for="es"><input type="checkbox" id="es" />Estland</label>
                    <label class="label23" for="fi"><input type="checkbox" id="fi" />Finnland</label>
                    <label class="label23" for="fr"><input type="checkbox" id="fr" />Frankreich</label>
                    <label class="label23" for="gr"><input type="checkbox" id="gr" />Griechenland</label>
                    <label class="label23" for="gro"><input type="checkbox" id="gro" />Grossbritannien</label>
                    <label class="label23" for="gu"><input type="checkbox" id="gu" />Guatemala</label>
                    <label class="label23" for="ho"><input type="checkbox" id="ho" />Honduras</label>
                    <label class="label23" for="indi"><input type="checkbox" id="indi" />Indien</label>
                    <label class="label23" for="ind"><input type="checkbox" id="ind" />Indonesien</label>
                    <label class="label23" for="ir"><input type="checkbox" id="ir" />Irak</label>
                    <label class="label23" for="ira"><input type="checkbox" id="ira" />Iran</label>
                    <label class="label23" for="it"><input type="checkbox" id="it" />Italien</label>
                    <label class="label23" for="ja"><input type="checkbox" id="ja" />Japan</label>
                    <label class="label23" for="ka"><input type="checkbox" id="ka" />Kanada</label>
                    <label class="label23" for="kol"><input type="checkbox" id="kol" />Kolumbien</label>
                    <label class="label23" for="ko"><input type="checkbox" id="ko" />Kongo (Brazzaville)</label>
                    <label class="label23" for="kos"><input type="checkbox" id="kos" />Kosovo</label>
                    <label class="label23" for="kr"><input type="checkbox" id="kr" />Kroatien</label>
                    <label class="label23" for="le"><input type="checkbox" id="le" />Lettland</label>
                    <label class="label23" for="li"><input type="checkbox" id="li" />Liechtenstein</label>
                    <label class="label23" for="ma"><input type="checkbox" id="ma" />Malaysia</label>
                    <label class="label23" for="mar"><input type="checkbox" id="mar" />Marokko</label>
                    <label class="label23" for="mau"><input type="checkbox" id="mau" />Mauretanien</label>
                    <label class="label23" for="me"><input type="checkbox" id="me" />Mexiko</label>
                    <label class="label23" for="mi"><input type="checkbox" id="mi" />Mittel- und Südamerika</label>
                    <label class="label23" for="mo"><input type="checkbox" id="mo" />Mongolei</label>
                    <label class="label23" for="mon"><input type="checkbox" id="mon" />Montenegro</label>
                    <label class="label23" for="ne"><input type="checkbox" id="ne" />Neuseeland</label>
                    <label class="label23" for="ni"><input type="checkbox" id="ni" />Nicaragua</label>
                    <label class="label23" for="nig"><input type="checkbox" id="nig" />Nigeria</label>
                    <label class="label23" for="nw"><input type="checkbox" id="nw" />Nord-/Westeuropa</label>
                    <label class="label23" for="na"><input type="checkbox" id="na" />Nordamerika</label>
                    <label class="label23" for="nm"><input type="checkbox" id="nm" />Nordmazedonien</label>
                    <label class="label23" for="no"><input type="checkbox" id="no" />Norwegen</label>
                    <label class="label23" for="ös"><input type="checkbox" id="ös" />Österreich</label>
                    <label class="label23" for="pa"><input type="checkbox" id="pa" />Pakistan</label>
                    <label class="label23" for="par"><input type="checkbox" id="par" />Paraguay</label>
                    <label class="label23" for="po"><input type="checkbox" id="po" />Polen</label>
                    <label class="label23" for="por"><input type="checkbox" id="por" />Portugal</label>
                    <label class="label23" for="rum"><input type="checkbox" id="rum" />Rumänien</label>
                    <label class="label23" for="ru"><input type="checkbox" id="ru" />Russland</label>
                    <label class="label23" for="sw"><input type="checkbox" id="sw" />Schweden</label>
                    <label class="label23" for="se"><input type="checkbox" id="se" />Serbien</label>
                    <label class="label23" for="sl"><input type="checkbox" id="sl" />Slowakische Republik</label>
                    <label class="label23" for="slo"><input type="checkbox" id="slo" />Slowenien</label>
                    <label class="label23" for="so"><input type="checkbox" id="so" />Somalia</label>
                    <label class="label23" for="sp"><input type="checkbox" id="sp" />Spanien</label>
                    <label class="label23" for="srl"><input type="checkbox" id="srl" />Sri Lanka</label>
                    <label class="label23" for="sos"><input type="checkbox" id="sos" />Süd-/Osteuropa</label>
                    <label class="label23" for="sa"><input type="checkbox" id="sa" />Südafrika</label>
                    <label class="label23" for="sy"><input type="checkbox" id="sy" />Syrien</label>
                    <label class="label23" for="th"><input type="checkbox" id="th" />Thailand</label>
                    <label class="label23" for="tr"><input type="checkbox" id="tr" />Tschechische Republik</label>
                    <label class="label23" for="tu"><input type="checkbox" id="tu" />Tunesien</label>
                    <label class="label23" for="tk"><input type="checkbox" id="tk" />Türkei</label>
                    <label class="label23" for="uk"><input type="checkbox" id="uk" />Ukraine</label>
                    <label class="label23" for="un"><input type="checkbox" id="un" />Ungarn</label>
                    <label class="label23" for="us"><input type="checkbox" id="us" />Vereinigte Staaten</label>
                    <label class="label23" for="vi"><input type="checkbox" id="vi" />Vietnam</label>
                    <label class="label23" for="unk"><input type="checkbox" id="unk" />Staat unbekannt</label>

                </div>
            </div>
        </form>
        <button type="button" id="NavButtonLinks" class="NavButtons" onclick="NavButtonDia()">Diagramme</button>
        <button type="button" id="NavButtonRechts" class="NavButtons" onclick="NavButtonTabelle()">Tabelle</button>

        <canvas class="myChart2" id="myChartPie1"></canvas>
        <canvas class="myChart2" id="myChartPie2"></canvas>
        <canvas class="myChart2" id="myChartPie3"></canvas>
        <canvas class="myChart2" id="myChartPie4"></canvas>

        <canvas class="myChart2" id="myChartBar1"></canvas>
        <canvas class="myChart2" id="myChartBar2"></canvas>
        <canvas class="myChart2" id="myChartBar3"></canvas>
        <canvas class="myChart2" id="myChartBar4"></canvas>

        <canvas class="myChart2" id="myChartLine1"></canvas>

        <div class="gridTable" id="gridTable"></div>
    </main>
    <div id="platzhalterLinks"></div>
    <div id="platzhalterRechts"></div>
    <footer>
    </footer>


    <!-- Custom file first, then jQuery, then Popper.js, then jquery.validate.js, then Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/additional-methods.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/myscripts.js"></script>
</body>

</html>