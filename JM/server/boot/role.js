// module.exports = function(app) {
  // var User = app.models.admin;
  // var Role = app.models.Role;
  // var RoleMapping = app.models.RoleMapping;
  // var Team = app.models.Team;

 
    // // create project 1 and make john the owner
  
    // //create the admin role
	// User.create({
		// "id":"58a6d756fdfb06162cc3f1f9",
		// "username":"admin",
		// "email":"sumeshsheoran3@gmail.com",
		// "password":"admin"
	// }, function(err,user){
		
    // Role.create({
      // name: 'admin'
    // }, function(err, role) {
      // if (err) throw err;

      // console.log('Created role:', role);

      // //make bob an admin
      // role.principals.create({
        // principalType: RoleMapping.USER,
        // principalId: "58a6d756fdfb06162cc3f1f9"
      // }, function(err, principal) {
        // if (err) throw err;

        // console.log('Created principal:', principal);
      // });
    // });
 

// });
// };