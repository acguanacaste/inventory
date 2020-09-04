#!/usr/bin/env bash
#delimit fields by " and separator ,
##Remove periods and symbols form header: [?|\.]
#remove header from filemaker export
#tail -n +2 export20200224-2.csv  > headless.csv
#echo "Headles\n"
#cat headers.csv headless.csv >> importdata.csv
#echo "megred files\n"
#npm i -g csvtojson
#csvtojson importdata.csv  > importdata.json
#rm -rf headless.csv
#mongoimport -vv -d testimport -c lepidoptera --type json --file importdata.csv --headerline
#mongoimport -vv -d inventory -c lepidopteras --type json --file importdata.json --jsonArray


#june12.csv
npm i -g csvtojson
headers = '["lepBin","adultLiveWtG","adultVoucherFate","amnhCode","anotherPara","barcodeLength","barcodeWithN","blank1","class","collectedGroup","collectedGroupTrait","collectionDate","collector","continent","country","dateDnaSample","dateStamp","detHerb","detHost","detHyperpara","detPara","dhjPlantColl","dhjParVoucher","dnaSampleTo","dump","east","elevation","entry","forewingLengthMm","foundAs","fpdes","gelatinCapsuleToWhom","herbEcloDate","herbPrepDate","herbPupDate","herbivoreComment","herbivoreFamily","herbivoreGenBankAcc","herbivoreGenusName","herbivoreSex","herbivoreSpecies","herbivoreSubfamily","herbivoreTribe","hostFamily","hostSpecies","hyperBin","hyperDhjParVoucher","hyperparasiteFamily","hyperparasiteSpecies","hyperparasiteSubfamily","idenBasisHerb","idenBasisHost","idenBasisPara","immatureParts","kingdom","latitude","locality","longitude","mostRecentDateNjTreeIdentified","multiple","north","numberWithinYear","order","otherVoucherNumber","paraBin","parasiteFamily","parasiteGenusName","parasiteOrder","parasiteSpecies","parasiteSubfamily","parasiteTribe","photo","phylum","plantNickname","primaryEcosystem","province","pupalLiveWtG","rearingOutcome","scannedPhoto","search","secondaryEcosystem","sector","specimenDepositedAt","stage","standardUnit","subtribe","timeStamp","type","voucher","whenEnter","whoEnterData","year"]'
csvtojson --headers='["lepBin","adultLiveWtG","adultVoucherFate","amnhCode","anotherPara","barcodeLength","barcodeWithN","blank1","class","collectedGroup","collectedGroupTrait","collectionDate","collector","continent","country","dateDnaSample","dateStamp","detHerb","detHost","detHyperpara","detPara","dhjPlantColl","dhjParVoucher","dnaSampleTo","dump","east","elevation","entry","forewingLengthMm","foundAs","fpdes","gelatinCapsuleToWhom","herbEcloDate","herbPrepDate","herbPupDate","herbivoreComment","herbivoreFamily","herbivoreGenBankAcc","herbivoreGenusName","herbivoreSex","herbivoreSpecies","herbivoreSubfamily","herbivoreTribe","hostFamily","hostSpecies","hyperBin","hyperDhjParVoucher","hyperparasiteFamily","hyperparasiteSpecies","hyperparasiteSubfamily","idenBasisHerb","idenBasisHost","idenBasisPara","immatureParts","kingdom","latitude","locality","longitude","mostRecentDateNjTreeIdentified","multiple","north","numberWithinYear","order","otherVoucherNumber","paraBin","parasiteFamily","parasiteGenusName","parasiteOrder","parasiteSpecies","parasiteSubfamily","parasiteTribe","photo","phylum","plantNickname","primaryEcosystem","province","pupalLiveWtG","rearingOutcome","scannedPhoto","search","secondaryEcosystem","sector","specimenDepositedAt","stage","standardUnit","subtribe","timeStamp","type","voucher","whenEnter","whoEnterData","year"]' jun12.csv  > jun12.json
mongoimport -vv -d inventory -c lepidopteras --type json --file jun12.json --jsonArray
