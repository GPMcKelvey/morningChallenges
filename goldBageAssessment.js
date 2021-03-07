function validate(username) {
    // Write the code that goes here
    if (username.indexOf(' ') > 0){
        return false
    }
     if (username.indexOf('-') <= 1){
        return true
    }
     if (username.startsWith(' ')){
         return false
     } 
     if  (username.startsWith(Number)){
         return false
     } 
     if (username.startsWith('-')){
        return false

    }
     if (username.endsWith ('-')){
        return false
    }
     if (username.length > 5 && username.length < 17){
        return true
    } 

}

console.log(validate('Mike-Standish')); // Valid username
console.log(validate('Mike Standish')); // Invalid username





function appendRow() {
    // Write your code here.
    let tbody = document.getElementsByName("tbody")
    let newRow = document.createElement("tr")
    newRow.appendChild
  }
  
  // Example case. 
  document.body.innerHTML = `
  <table id="tbl" border="1">
    <tbody>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>`;
  
  appendRow();
  
  console.log(document.body.innerHTML);