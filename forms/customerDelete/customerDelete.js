customerDelete.onshow=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

        if (req.status == 200) { //transit worked.
            allCustomerData = JSON.parse(req.responseText)  // parse data in an array
            let message = ""
               for (i = 0; i < allCustomerData.length; i++)
                   message = message + allCustomerData[i][1] + "\n"
               txtaCustomerData.value = message
        } else {
            // transit error
            lblSuccessMessage.value = `Error: ${req.status}`
        }  
}

btnSubmit.onclick=function(){
  let customerNameDel = inptCustomerName.value
    let found = false
    for (i = 0; i < allCustomerData.length; i++) {
        if (customerNameDel == allCustomerData[i][1]){
            found = true
            break 
        }
    }
    if (found == false) 
       lblSuccessMessage.textContent = "That customer name is not in the database."
    else if (found == true) {
      query = 'DELETE FROM customer WHERE name = "' + customerNameDel + '"'
      console.log(query)
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    
    if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                lblSuccessMessage.value = `You have successfully deleted the customer named ${customerNameDel}`
            else
                lblSuccessMessage.value = `There was a problem deleting ${customerNameDel} from the database.`
      else
        lblSuccessMessage.value = `Error: ${req.status}`
    } 
}