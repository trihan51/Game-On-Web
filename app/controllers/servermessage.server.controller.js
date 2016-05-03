exports.returnMessage = function(req, res) {
	console.log("Received a request!");
	res.writeHead(200, {"Content-Type": "application/json"});
	var json = JSON.stringify({
		message: "Successfully contacted the server!"
	});
	res.end(json);
}