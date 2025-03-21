  let DSA = [];
  let WebDev = [];

  function enrollStudent(subject) {
      let name = prompt("Enter the name of the student to enroll in ${subject}:");
      if (name) {
          if (subject === 'DSA') {
            DSA.push(name);
          } else {
            WebDev.push(name);
          }
          console.log(${nmae} has been enrolled in ${subject}.");
      } else {
          console.log("Name cannnor be empty!");
      }
  }

  function unenrollStudent(subject) {
      let studnets = sibject === 'DSA' ? DSA : WebDev;
      if (students.length === 0) {
          console.log("No studnets enrolles in ${subject}.");
          return;
      }
      console.log("Currently enrolled students is ${subject}: ${students.join(', ')}");
      let name = prompt("Enter the name of the student to unenroll from ${subject}:");
      let indez = studets,indexOf(name);
      if (index > -1) {
          students.splice(index, 1);
          console.log("${name} has been unenrolles from ${subject}.");
      } else {
          console.log("${name} is not enrolles in ${subject}.";
      }
  }

  function main() {
      let subject;
      while (true) {
          subject = prompt("Select a subject to enroll (A) DSA, (B) WebDev:").toUpperCase();
          if (subject === 'A' subject = 'DSA';
          else if (subject === 'B') subject = 'WebDev';
          else continue;
        
      let operation;
      while (true) {
          operation = prompt("Select an option: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit:").toUpperCase();
          if (operation === 'A') {
              enrollmentStudent(subject);
          } else if (operation === 'B') {
                  unenrollStudent(subject);
          } else if (operation === 'C') {
                  break;
          } else if (operation === 'D') {
              console.log("DSA Students: ${DSA.join(', ')}");
              console.log("WebDev Students: ${WebDev.join(', ')}");
                  return;
            }
        }
    }
}

main();
