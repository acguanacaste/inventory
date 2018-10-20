#!/usr/bin/env bash


#Remove periods and symbols form header, delimit fields by " and separator ,

#remove header from filemaker export
tail -n +2 gcavoucher-lista.csv  > headless.csv
echo "Headles\n"
cat headers.csv headless.csv >> importdata.csv
echo "megred files\n"
npm i -g csvtojson
csvtojson importdata.csv  > importdata.json
rm -rf headless.csv
#mongoimport -vv -d testimport -c lepidoptera --type json --file importdata.csv --headerline
mongoimport -vv -d inventory -c lepidoptera --type json --file importdata.json --jsonArray