//contact form for hire
function hire_me() {
	var CompanyN = document.forms["hire_form"]["CompanyN"].value;// get the value form CompanyN textfield of hire form of contact page and set the value in CompanyN variable
	var emailAd = document.forms["hire_form"]["emailAd"].value;
	var PhoneNo = document.forms["hire_form"]["PhoneNo"].value;
	var FullName = document.forms["hire_form"]["FullName"].value;
	var Message = document.forms["hire_form"]["message"].value;
	alert("Thank you "+FullName+" Sir, I am happy to heir me for your organization '"+CompanyN+"'.\n I will contact you or your organization as soon as possible.");//alert message after function is executed
}
//contact form for feedback
function feedback() {
	var FullName = document.forms["feedback_form"]["FullName"].value;// get the value form FullName textfield of feedback form of contact page and set the value in FullName variable
	var emailAd = document.forms["feedback_form"]["emailAd"].value;
	var Address = document.forms["feedback_form"]["Address"].value;
	var Message = document.forms["feedback_form"]["message"].value;
	alert("Thank you "+FullName+"! for your feedback.");//alert message after function is executed
}