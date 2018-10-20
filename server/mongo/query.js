//use admin
db.createUser({
    user: "federico",
    pwd: "1q2w3e4r",
    roles: ['readWrite', "dbAdmin"]
});