#Inventario de Biodiversidad

Este es el servidor para obtener datos de la base de base de datos del inventario de Lepidopteras de ACG, realizado por el Dr. Daniel Janzen, la Dra. Winnie Hallachs y el equipo de parataxónomos de ACG. 
Referencia: http://janzen.sas.upenn.edu/ 

Los datos parten de la base de datos en File Maker del Dr. Janzen. Se hace un dump en un `.mer` file (csv con ecabezados).    

En esta versión se extrájo los datos y se cambiaron los encabezados para que eliminar signos, eliminar espacios y hacer los encabezados camelCase.  

Se utiliza MongoDB para almacenar la base de datos. Una vez con mongo instalado, se convierte el csv a json e importa a mongo en usando el script en `mongo/import.sh`: 
```
csvtojson --headers='["lepBin","adultLiveWtG","adultVoucherFate","amnhCode","anotherPara","barcodeLength","barcodeWithN","blank1","class","collectedGroup","collectedGroupTrait","collectionDate","collector","continent","country","dateDnaSample","dateStamp","detHerb","detHost","detHyperpara","detPara","dhjPlantColl","dhjParVoucher","dnaSampleTo","dump","east","elevation","entry","forewingLengthMm","foundAs","fpdes","gelatinCapsuleToWhom","herbEcloDate","herbPrepDate","herbPupDate","herbivoreComment","herbivoreFamily","herbivoreGenBankAcc","herbivoreGenusName","herbivoreSex","herbivoreSpecies","herbivoreSubfamily","herbivoreTribe","hostFamily","hostSpecies","hyperBin","hyperDhjParVoucher","hyperparasiteFamily","hyperparasiteSpecies","hyperparasiteSubfamily","idenBasisHerb","idenBasisHost","idenBasisPara","immatureParts","kingdom","latitude","locality","longitude","mostRecentDateNjTreeIdentified","multiple","north","numberWithinYear","order","otherVoucherNumber","paraBin","parasiteFamily","parasiteGenusName","parasiteOrder","parasiteSpecies","parasiteSubfamily","parasiteTribe","photo","phylum","plantNickname","primaryEcosystem","province","pupalLiveWtG","rearingOutcome","scannedPhoto","search","secondaryEcosystem","sector","specimenDepositedAt","stage","standardUnit","subtribe","timeStamp","type","voucher","whenEnter","whoEnterData","year"]' jun12.csv  > jun12.json
mongoimport -vv -d inventory -c lepidopteras --type json --file jun12.json --jsonArray 
```

Se debe de establecer en en archivo `.env` la variable de ambiente `NODE_ENV=[production|development|test|etc]` .En el directorio `config` se debe de copiar el archivo `default.json` a `[NODE_ENV].json`, cambiar los valores de acuerdo del ambiente.   

De momento existen estos `GET` endpoints que se usan para el mapa de páginas de especies 

```
/api/families      
/api/species/[espciesName[,speciesName]*]     
/api/vocuher/[voucher-number]
```


el schema del modelo lo generé con: 

`generate-schema -m oneSchema.json > schema`
