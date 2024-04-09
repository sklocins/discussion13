document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("h1").style.color="purple";
	document.querySelector("h1").style.textAlign="center";

    // window.addEventListener("load", function() {
    //     console.log("Good job opening the window");
    //     video = document.getElementById("player1");
	// 	video.autoplay = false;
	// 	video.loop = false;
    // });

	document.querySelector("#toggle").addEventListener("click", function() {
		console.log(document.querySelector("#emailBox"))
		document.querySelector("#emailBox").classList.toggle("hidden")

		if (Checkbox.checked){
			console.log("Toggled!");
		}
		else{
			console.log("Not toggled!");
		}
    });

	// document.querySelector("#slider").addEventListener("input", function() {
    //     video.volume = this.value / 100;
    //     volume.textContent = this.value + "%";
	// 	console.log("Volume change to " + this.value);
    // });

	// document.querySelector("#vintage").addEventListener("click", function() {
	// 	video.classList.add("oldSchool")
	// 	console.log("Going oldSchool");
    // });

	// document.querySelector("#orig").addEventListener("click", function() {
	// 	video.classList.remove("oldSchool")
	// 	console.log("Back to original");
    // });
});