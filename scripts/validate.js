const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password1");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		kp1.value = "";
		kp2.value = "";
		kp2.focus();
	}
}
