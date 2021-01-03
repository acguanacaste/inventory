#!/bin/bash
#Dump data from FileMake, when selecting the fields to export, choose to dump the table, not the current view
#rename to csv
#copy header line in an other text headersExport.csv file
#replace # by "num"
##Remove periods and symbols form header: [?|\.]
#delimit fields by " and separator , (replace , by  ",")
#en jetbrains, seleccionar la , hasta el próximo field, y reemplazar por ", " para dejarlo en una línea
headers='["Herbivore species","adult live wt g","Adult voucher fate","AMNH code","Another para","barcode length","barcode with N","blank1","Class","Collected group","Collected group trait","Collection Date","collector","continent","Country","date DNA sample","date stamp","Det Herb","Det Host","Det Hyperpara","Det Para","DHJ Plant Coll","DHJPARvoucher","DNA sample to","dump","East","Elevation","Entry","forewing length mm","Found as","fpdes","gelatin capsule to whom","Herbeclodate","Herbprepdate","Herbpupdate","Herbivore comment","Herbivore family","herbivore GenBank ACC","herbivore genus name","Herbivore sex","Herbivore subfamily","Herbivore tribe","Host family","Host species","HYPER BIN","hyperDHJPARvoucher","Hyperparasite family","Hyperparasite species","Hyperparasite subfamily","iden basis herb","iden basis host","iden basis para","immature parts","Kingdom","Latitude","LEP BIN","Locality","Longitude","micro","most recent date NJ tree identified","multiple","North","number within year","Order","other voucher number","PARA BIN","Parasite family","parasite genus name","Parasite order","Parasite species","Parasite subfamily","Parasite tribe","photo","Phylum","plant nickname","primary ecosystem","Province","pupal live wt g","Rearing outcome","Scanned photo","Search","secondary ecosystem","Sector","specimen deposited at","stage","Standard unit","Subtribe","time stamp","type","Voucher","When enter","Who enter data","year"]'
headers=$(cat headersExport.csv)
echo "$headers"|awk '{print tolower($0)}' > headers.csv
#trasnfor to camelCase by doing (this has to be run on a linux box, Mac OS's sed seems not to do the trick):
headCamel=$(cat headers.csv | sed -E 's/^[A-Z]/\l&/; s/\s([A-Za-z])/\u\1/g')
npm i -g csvtojson
csvtojson --headers="$headCamel" julio2020.csv  > julio2020.json
mongoimport -vv -d inventory -c lepidopteras --type json --file julio2020.json --jsonArray
mongo setupDatabase.js
