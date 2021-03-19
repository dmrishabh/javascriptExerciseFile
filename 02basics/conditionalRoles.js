// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create / delete course
// testprep - gets access to create / delete tests
// user - gets access to consume content 

var user ="testprep";

switch (user) {
    case "admin": console.log("You've full access");
        break;
    
    case "subadmin": console.log("You've access to create / delete course");
        break;
    
    case "testprep": console.log("You've access to create / delete tests");
        break;
    
    case "user": console.log("You've access to consume content");
        break;
    
    default: console.log("Trial user");
        break;
}