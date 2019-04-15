$(document).ready(function() {
	const fetch_temperature = () => {
		fetch('/temperature').then(response => response.json())
			.then(data => {
				console.log(data.val);
				$("#temperature").text(data.val);
			})
			.catch(e => console.log("Oops, error", e))
	};
	const fetch_humidity = () => {
		fetch('/humidity').then(response => response.json())
			.then(data => {
				console.log(data.val);
				$("#humidity").text(data.val);
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