#!/bin/bash
npm i -g csvtojson
csvtojson --headers='["photoid","file","title","description","latitude","longitude","year"]' foto.csv  > fotos1.json
mongoimport -vv -d inventory -c aereos --type json --file fotos1.json --jsonArray
mongo setupDatabase.js
