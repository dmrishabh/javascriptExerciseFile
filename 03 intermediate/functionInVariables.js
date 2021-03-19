/*
Define a function that can answer the role of auser
A user can be on following roles
admin - with all access
subadmin - gets access to create / delete course
 testprep - gets access to create / delete tests
 user - gets access to consume content
other - trial user

input - getUserRole(name, role)
*/

function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is ${role} with all access`;
            
        case "subadmin":
            return `${name} is  ${role} with  access to create and delete`;
            
        case "testprep":
            return `${name} is ${role}  with access to create / delete tests`;
        
        case "user":
            return `${name} is ${role}  with  access to consume content`;
            
       
    
        default:
            return `${name} is ${role}  is trail user`;
                }
}

var getrole = getUserRole("rishabh","testprep");

console.log(getrole);