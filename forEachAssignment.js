let family = ['Jeff', 'Charlotte', 'Dallas', 'Solene'];

let print = function(element) {
    console.log(`Hi ${element}, what do you want for dinner?`);
}

// create a for loop that accomplishes the same task as a forEach method
for (let i=0; i < family.length; i++) {
    console.log(print(family[i]));
}

// now use forEach to accomplish the same task
family.forEach(print);