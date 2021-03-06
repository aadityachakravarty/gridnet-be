const fs = require('fs');
const dummy = {
  "settings": {
    "server": {
      "protocol": "",
      "host": ""
    },
    "verification": {
      "sms": false,
      "email": false
    },
    "origin": {
      "access": false,
      "type": ""
    }
  },

  "details": {
    "mail": {
      "host": "",
      "user": "",
      "pass": ""
    },
    "apis": {

    }
  },

  "setup": {
    "production": {
      "sign": "",
      "cryptoKey":"",
      "database": "",
      "cbLink":"http://localhost:8000/",
      "PORT": 8000,
      "salt": 20
    },
    "development": {
      "sign": "",
      "cryptoKey":"",
      "database": "",
      "cbLink":"http://localhost:9000/",
      "PORT": 9000,
      "salt": 10
    },
    "testing": {
      "sign": "",
      "cryptoKey":"",
      "database": "",
      "cbLink":"http://localhost:9500/",
      "PORT": 9500,
      "salt": 5
    }
  },

  "domains": {
    "whitelist": [
      "http://127.0.0.1:8000",
      "http://localhost:8000",
      "http://127.0.0.1:9000",
      "http://localhost:9000",
      "http://127.0.0.1:9500",
      "http://localhost:9500"
    ]
  }
}

fs.writeFile("./system/config.json", JSON.stringify(dummy), (err) => {
    if(err) {return console.log(err);}
    console.log("The file was saved!");
});
