'use strict';

module.exports = function(Consumer) {
    Consumer.deletebyMobile = function(data,cb){
        console.log(data);
        var num = data.number;
       num.forEach(function(mobile) {
    Consumer.destroyAll({
        "Mobile":mobile},function(err,obj){
            if(err){
               cb(err);
            }
            
           
        }
    );
     
});
cb(null,"deleted");
    }
     Consumer.remoteMethod(
    'deletebyMobile', {
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
      description: 'Delete by Mobile',
      returns: {
        type: 'object',
        root: true
      }
    }
  );
    

};
