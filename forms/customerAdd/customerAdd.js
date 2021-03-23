customerAdd.onshow=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

        if (req.status == 200) { //transit trip worked. 
            results = JSON.parse(req.responseText)
            let message = ""
            for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
            txtaCustomerList.value = message
        }  
}

btnInsert.onclick=function(){
    let customerName = inptName.value
    let customerStreet = inptStreet.value
    let customerCity = inptCity.value
    let customerState = inptState.value
    let customerZipcode = inptZipcode.value
    let query = "INSERT INTO customer (`name`,`street`,`city`,`state`,`zipcode`) VALUES ('" + customerName + "', '" + customerStreet + "',  '" + customerCity + "',  '" + customerState + "',  '" + customerZipcode + "')"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
        if (req.status == 200) { 
            if (req.responseText == 500)    
                lblInsertMessage.value = "You have successfully added the customer!"
            else
                lblInsertMessage.value = "There was a problem with adding the customer to the database."
        } else 
            lblInsertMessage.value = "Error: " + req.status
}
