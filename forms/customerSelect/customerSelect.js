let query = ""
let req = {}
let results = []
let netID = "sys74530"
let pw = "Annie011800!"



customerSelect.onshow=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

        if (req.status == 200) { //transit trip worked. 
            results = JSON.parse(req.responseText)
            if (results.length == 0)    
               lblMessage.value = "There are no customers in the database."
            else {        
               let message = ""
               for (i = 0; i < results.length; i++)
                   message = message + results[i][1] + "\n"
               txtaCustomers.value = message
            } // end else

        } else   // the transit didn't work - bad wifi? server turned off?
            lblMessage.value = "Error code: " + req.status
}



