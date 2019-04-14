$(document).ready(function() {
	const fetch_temperature = () => {
		fetch('/temperature').then(response => response.text())
			.then(data => {
				console.log(data);
				$("#temperature").text(data);
			})
			.catch(e => console.log("Oops, error", e))
	};
	const fetch_humidity = () => {
		fetch('/humidity').then(response => response.text())
			.then(data => {
				console.log(data);
				$("#humidity").text(data);
			})
			.catch(e => console.log("Oops, error", e))
	}
	$("#light_on").click(() => {
		fetch('/on').then(response => response.text())
			.then(data => {
				$("#light_info").text(data);
				console.log(data);
			})
			.catch(e => console.log("Oops, error", e))
	})
	$("#light_off").click(() => {
		fetch('/off').then(response => response.text())
			.then(data => {
				$("#light_info").text(data);
				console.log(data);
			})
			.catch(e => console.log("Oops, error", e))
	})

	setInterval(() => {
		fetch_humidity();
		fetch_temperature();
	}, 2000)
});