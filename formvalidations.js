function validateFname()
{
	var fname = document.getElementById("fname").value;
	var ret = /^[a-zA-Z\s]{3,20}$/;

	if (ret.test(fname))//for valid name input
	{
		document.getElementById("message1").style.color = "green";
		document.getElementById("message1").innerHTML = "<strong>&nbsp;&nbsp;Valid</strong>";
		return true;
	}
	else
	{
		document.getElementById("message1").style.color = "red";
		document.getElementById("message1").innerHTML = "<strong>&nbsp;&nbsp;Invalid</strong>";
		return false;
	}
}

function validateLname()
{
	var lname = document.getElementById("lname").value;
	var ret = /^[a-zA-Z\s]{3,20}$/;

	if (ret.test(lname))//for valid name input
	{
		document.getElementById("message2").style.color = "green";
		document.getElementById("message2").innerHTML = "<strong>&nbsp;&nbsp;Valid</strong>";
		return true;
	}
	else
	{
		document.getElementById("message2").style.color = "red";
		document.getElementById("message2").innerHTML = "<strong>&nbsp;&nbsp;Invalid</strong>";
		return false;
	}
}

function validateGender()
{
	var x = 0;
	var s = "";
	var g = document.getElementsByName("gender");
	for(i = 0; i < g.length; i++) 
	{ 
                if(g[i].checked) 
                {
                	s = s+g[i].value;
                	x = x+1;
                }
    }

    if(x==0)
    {
    	document.getElementById("message3").style.color = "red";
		document.getElementById("message3").innerHTML = "<strong>&nbsp;&nbsp;You didn't choose your gender</strong>";
		return false;
    }
    else
    {
    	document.getElementById("message3").style.color = "green";
		document.getElementById("message3").innerHTML = "<strong>&nbsp;&nbsp;Your gender is </strong>"+s.bold();
		return true;
    }
         
}

function validatePhone()
{
	var phonenumber = document.getElementById("phone").value;
	var re3 = /^\d{4}-\d{3}-\d{3}$/;

	if(re3.test(phonenumber))
	{
		document.getElementById("message5").style.color = "green";
		document.getElementById("message5").innerHTML = "<strong>&nbsp;&nbsp;Valid Phone Number </strong>";
		return true;
	}
	else
	{
		document.getElementById("message5").style.color = "red";
		document.getElementById("message5").innerHTML = "<strong>&nbsp;&nbsp;Invalid Phone Number</strong>";
		return false;
	}
}

function calculateMRP()
{
	var x = 0;
	var c = document.getElementsByName("computer");
	for(i = 0; i < c.length; i++) 
	{ 
                if(c[i].checked) 
                {
                	if(c[i].value == "keyboard")
                		x = x+5000;
                	else if(c[i].value == "mouse")
                		x = x+5000;
                	else if(c[i].value == "monitor")
                		x = x+10000;
                }
    }

    if(x>0)
    {
    	document.getElementById("message6").style.color = "green";
		document.getElementById("message6").innerHTML = "<strong>&nbsp;&nbsp;Price is Rs </strong>"+x.toString().bold()+"<strong> without GST</strong>";
		return true;
    }
    else
    {
    	document.getElementById("message6").style.color = "red";
		document.getElementById("message6").innerHTML = "<strong>&nbsp;&nbsp;No item is purchased</strong>";
		return false;
    }
}

function receiptGeneration()
{
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var s = "";
	var g = document.getElementsByName("gender");
	for(i = 0; i < g.length; i++) 
	{ 
                if(g[i].checked) 
                {
                	s = s+g[i].value;
                }
    }
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var x = 0;
	var c = document.getElementsByName("computer");
	for(i = 0; i < c.length; i++) 
	{ 
                if(c[i].checked) 
                {
                	if(c[i].value == "keyboard")
                		x = x+5000;
                	else if(c[i].value == "mouse")
                		x = x+5000;
                	else if(c[i].value == "monitor")
                		x = x+10000;
                }
    }
    var carry = document.getElementsByName("options");
    s1 = "";
	for(i = 0; i < carry.length; i++) 
	{ 
                if(carry[i].checked) 
                {
                	s1 = s1+carry[i].value;
                }
    }

    var img="https://i.pinimg.com/originals/7a/0b/bf/7a0bbfbe15328a025a13f8ee07bf22ef.jpg"


    document.getElementById("receipt").innerHTML = "<h1>Transaction Details :</h1>"
    document.getElementById("receipt1").innerHTML = "<strong><h3>Customer's Name : "+fname.bold()+" "+lname.bold()+"</h3></strong>";
    document.getElementById("receipt2").innerHTML = "<strong>Gender : </strong>"+s.bold();
    document.getElementById("receipt3").innerHTML = "<strong>Email : </strong>"+email.bold();
    document.getElementById("receipt4").innerHTML = "<strong>Phone : </strong>"+phone.bold();
    document.getElementById("receipt5").innerHTML = "<strong>Cost of items without GST : Rs </strong>"+x.toString().bold();
    document.getElementById("receipt6").innerHTML = "<strong>Carrybag Requirement : </strong>"+s1.bold();

    var carrymoney = 0
    if(s1 == "yes")
    {
    	carrymoney = 20;

    }

    var GST = x*0.18;
    var finalamount = x+GST+carrymoney;

    document.getElementById("receipt7").innerHTML = "<h2>Final amount payable : Rs "+finalamount.toString().bold()+" </h2>( Amount before - Rs "+x.toString().bold()+", GST - Rs "+GST.toString().bold()+", Carrybag amount - Rs "+carrymoney.toString().bold()+" )";
    document.getElementById("receipt8").src = img;

}