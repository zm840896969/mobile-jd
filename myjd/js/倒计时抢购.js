window.onload = function() {
	setInterval(changTime, 500);

	function changTime() {
		document.getElementById("time").innerHTML = getTime();
		changeStyle();
	}

	function gR() {
		return Math.floor(Math.random() * 16);
	}

	

	function getTime() {
		var now = new Date().getTime();
		var end = new Date("2016/12/24").getTime();
		var temp = end - now;
		if (temp <= 0) {
			document.getElementById("first").innerHTML = "抢购活动已结束！！！！！";
			return "";
		} else {
			var temp2 = new Date();
			temp2.setTime(temp);
			var sec = Math.floor((temp) / 1000 % 60);
			var min = Math.floor(temp / (60 * 1000) % 60);
			var hou = Math.floor(temp / (60 * 60 * 1000) % 24);
			var day = Math.floor(temp / (24 * 60 * 60 * 1000));

			return day + "天 " + hou + "小时 " + min + "分钟 " + sec + "秒";
		}
	}
};