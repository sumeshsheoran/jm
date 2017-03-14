
var http = require("http");


'use strict';

module.exports = function(sms) {
    sms.sendSms = function (data, cb) {
        console.log(data);
    var option = {
  "method": "POST",
  "hostname": "smsgateway.me",
  "port": null,
  "path": "/api/v3/messages/send?email=sheoran.iitr%40gmail.com&password=pass123&device=39664&number="+data.number+"&message="+data.msg,
  "headers": {
    "cache-control": "no-cache"
  }
};

var req = http.request(option, function (res) {
  console.log(res.status);
  if(res.status>=300){

    cb(res.status,"error");
  }
  else{
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
  req.on('error', function(e) {
    cb(e,e.message);
        console.log('ERROR: ' + e.message);
    });
    cb(null,"sent");
  }
});

if(!req) cb(null,"Proxy error");
req.end();
    

  };

  sms.remoteMethod(
    'sendSms', {
      http: {
        verb: 'post'
      },
      accepts: {
        arg: 'data',
        type: 'object',
        http: {
          source: 'body'
        }
      },
      description: 'Send sms',
      returns: {
        type: 'object',
        root: true
      }
    }
  );
    

};

