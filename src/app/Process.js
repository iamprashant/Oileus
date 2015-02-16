/**
 * Example of Oileus process.
 * @author Ritesh Shrivastav<ritesh@codingdash.com>
 */

/**
 * Example info structure is:
 * {status, message}
 */
oileus.process("myDynamicBox", function(info) {
	if(info.status === "success") {
		//code to display the message
		alert(info.message);
	} else {
		alert("Something went wrong!");
	}
});