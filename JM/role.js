module.exports = function(app) {
  var User = app.models.admin;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Team = app.models.Team;

 
    // create project 1 and make john the owner
  users = [
    
    {username: 'admin',Name:'Sumit', Mobile:'9991956597', email: 'sheoran.iitr@gmail.com', id:"58a19eb82ef7d71f345f9cb8" password: 'admin'}
   
  ];
    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });
    });
 
};