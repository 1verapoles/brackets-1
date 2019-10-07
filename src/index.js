module.exports = function check(str, bracketsConfig) {
 var stack = [];
 var openm = [];
var closem = [];
var same = [];
var closeIndex;
var openIndex;
var openIndex3;
for (i=0; i<bracketsConfig.length; i++) {
	openm[i] = bracketsConfig[i][0];
}

for (i=0; i<bracketsConfig.length; i++) {
	closem[i] = bracketsConfig[i][1];
}

for (i=0; i<openm.length; i++) {
	if (openm[i] === closem[i]) {
		same.push(openm[i]);
	}
}

for (i = 0; i < str.length; i++) {
       openIndex = openm.indexOf(str[i]);

       if (openIndex !== -1 && same.indexOf(str[i]) === -1) {
           stack.push(openIndex);
           console.log(stack);
           continue;
       }

      if (openIndex !== -1 && same.indexOf(str[i])!== -1 && stack.indexOf(openIndex)!== -1) {
           var z = stack.indexOf(openIndex);
           console.log(z);
          /* delete stack[z];*/
          stack.splice(z,1);
           console.log(stack);
           continue;
           }

if (openIndex !== -1 && same.indexOf(str[i])!== -1 && stack.indexOf(openIndex)=== -1) {
   stack.push(openIndex);
           continue;
       }
       
             
  closeIndex = closem.indexOf(str[i]);

       if (closeIndex !== -1 && same.indexOf(str[i]) === -1) {
           openIndex3 = stack.pop();
           if (closeIndex !== openIndex3) {
               return false;
           }
          }

if (closeIndex !== -1 && same.indexOf(str[i])!== -1 && stack.indexOf(closeIndex)!== -1) {
           var z = stack.indexOf(closeIndex);
           console.log(z);
           /*delete stack[z];*/
           stack.splice(z,1);
                     }
                      if (closeIndex !== -1 && same.indexOf(str[i])!== -1 && stack.indexOf(closeIndex)=== -1) {
           openIndex3 = stack.pop();
           if (closeIndex !== openIndex3) {
               return false;
           }
          }

 console.log(openm);
    console.log(closem);
    console.log(same);
    console.log(stack);
    }
  if (stack.length !== 0) {
        return false;
    }

    return true;
}
