let url4G = 'https://vqen.gg/gods/adm/lurk/streamers_today.txt';
let url4L = 'https://vqen.gg/legacy/adm/lurk2/streamers_today.txt';
setInterval(function(){
	date = new Date();
	IntTh = date.toLocaleString('pt-BR', {hour: '2-digit', hour12: false, minute: '2-digit', second : '2-digit', timeZone: 'America/Sao_Paulo' });
    IntTh3 = date.toLocaleString('pt-BR', {minute: '2-digit', second : '2-digit', timeZone: 'America/Sao_Paulo' });
   	document.getElementById("TimerHour").innerHTML = IntTh;
	
	switch (IntTh3) {
		case '00:00': location.reload(); break;
		case '50:00': /*case '40:00':*/ case '30:00': /*case '20:00':*/ case '10:00': Function4Viewer(); break;
	}
	switch (IntTh) {
		case '10:00:00': tnt = 0; F4G(); break;
		case '11:00:00': tnt = 1; F4G(); break;
		case '12:00:00': tnt = 2; F4G(); break;
		case '13:00:00': tnt = 3; F4G(); break;
		case '14:00:00': tnt = 4; F4G(); break;
		case '15:00:00': tnt = 5; F4G(); break;
		case '16:00:00': tnt = 6; F4G(); break;
		case '17:00:00': tnt = 7; F4G(); break;
		case '18:00:00': tnt = 8; F4G(); break;
		case '19:00:00': tnt = 9; F4G(); break;
		case '20:00:00': tnt = 10; F4G(); break;
		case '21:00:00': tnt = 11; F4G(); break;
		case '22:00:00': tnt = 12; F4G(); break;
		case '23:00:00': tnt = 13; F4G(); break;
		case '00:00:00': CloseWinG(); break;
		case '08:30:00': tmt = 0; F4L(); break;
		case '10:01:00': tmt = 1; F4L(); break;
		case '11:30:00': tmt = 2; F4L(); break;
		case '13:01:00': tmt = 3; F4L(); break;
		case '14:30:00': tmt = 4; F4L(); break;
		case '16:01:00': tmt = 5; F4L(); break;
		case '17:30:00': tmt = 6; F4L(); break;
		case '19:01:00': tmt = 7; F4L(); break;
		case '20:30:00': tmt = 8; F4L(); break;
		case '22:01:00': tmt = 9; F4L(); break;
		case '23:30:00': tmt = 10; F4L(); break;
		case '01:01:00': CloseWinL(); break;
	}
},1000);
function Function4Viewer() {
	date = new Date();
	IntTh = date.toLocaleString('pt-BR', {hour: '2-digit', hour12: false, minute: '2-digit', second : '2-digit', timeZone: 'America/Sao_Paulo' });
	let url4Coil = 'https://opensheet.elk.sh/1uUDTZycJjJQnBDbN7bnGMVXm1rcfmjWDGu7JsERWg6k/1';
	fetch(url4Coil).then((response) => response.json()).then(json => {
		for(var i= 0, l = json.length; i< l; i++) {
			if (document.getElementById("streamerDiv"+[i]) !== null){
			} else {
				var new_div = document.createElement("div");
				new_div.setAttribute("id", "streamerDiv"+[i]);
				document.getElementById('container').appendChild(new_div);
			}
		};
	});
	liveonf();
	openG();
	openL();
};
function liveonf() {
	let url4Coil = 'https://opensheet.elk.sh/1uUDTZycJjJQnBDbN7bnGMVXm1rcfmjWDGu7JsERWg6k/1';
	fetch(url4Coil).then((response) => response.json()).then(json => {
		for(var i= 0, l = json.length; i< l; i++) {
			if (json[i].Live === "TRUE" && json[i].Finalizada === "FALSE") {
				nametab = json[i].Streamer;
				nametab2 = json[i].Streamer;
				nametab3 = json[i].Streamer;
				W1n = "top=" + i*10 + ",height=360,width=960";
				openWin();
				function openWin() {
					nametab = window.open("https://www.twitch.tv/" + json[i].Streamer, nametab, W1n);
					nametab2 = document.getElementById('streamerDiv' + [i]);
					nametab2.innerHTML = '<li class="list-group2"><span class="badge2">' + nametab3 + '</span></li>';
				};
			};
			if (json[i].Live === "TRUE" && json[i].Finalizada === "TRUE" || json[i].Live === "FALSE" && json[i].Finalizada === "TRUE") {
				nametab = json[i].Streamer;
				nametab2 = json[i].Streamer;
				W1n = "top=" + i*10 + ",height=360,width=960";
				nametab = window.open("https://www.twitch.tv/" + json[i].Streamer, nametab, W1n);
				closeWin();
				function closeWin() {
					nametab.close();
					nametab2 = document.getElementById('streamerDiv' + [i]);
					nametab2.innerHTML = '';
				};
			};
		};
	});
};






function F4G() {
	Promise.all([fetch(url4G).then(x => x.text())]).then(([sampleResp]) => { var txt = sampleResp.split("\n"); s4G = txt[tnt]; openWinG()});
}
function F4L() {
	Promise.all([fetch(url4L).then(x => x.text())]).then(([sampleResp2]) => { var txt = sampleResp2.split("\n"); s4G = txt[tmt]; openWinL()});
}


function openWinG() {
	nametabG = 'F4G';
	W1nG = "top=50,height=360,width=960";
	nametabG = window.open("https://" + s4G, nametabG, W1nG);
	result = s4G.replace("twitch.tv/", "");
	document.getElementById('container2').innerHTML = '<li class="list-group2"><span class="badge2">Gods ' + result + '</span></li>';
};
function openWinL() {
	nametabL = 'F4L';
	W1nL = "top=50,left=500,height=360,width=960";
	nametabL = window.open("https://" + s4G, nametabL, W1nL);
	result = s4G.replace("twitch.tv/", "");
	document.getElementById('container3').innerHTML = '<li class="list-group2"><span class="badge2">Legacy ' + result + '</span></li>';
};
function CloseWinG() {
	nametabG = 'F4G';
	nametabG = window.open("https://www.twitch.tv/duckexza", nametabG, W1nG);
	closeWin();
	function closeWin() {
		nametabG.close();
		document.getElementById('container2').innerHTML = '';
	};
};
function CloseWinL() {
	nametabL	= 'F4L';
	nametabL = window.open("https://www.twitch.tv/duckexza", nametabL, W1nL);
	closeWin();
	function closeWin() {
		nametabL.close();
		document.getElementById('container2').innerHTML = '';
	};
};
function openG() {
    if (IntTh > '10:00:00' && '10:59:59' > IntTh) { tnt = 0; F4G() };
    if (IntTh > '11:00:00' && '11:59:59' > IntTh) { tnt = 1; F4G() };
    if (IntTh > '12:00:00' && '12:59:59' > IntTh) { tnt = 2; F4G() };
    if (IntTh > '13:00:00' && '13:59:59' > IntTh) { tnt = 3; F4G() };
    if (IntTh > '14:00:00' && '14:59:59' > IntTh) { tnt = 4; F4G() };
    if (IntTh > '15:00:00' && '15:59:59' > IntTh) { tnt = 5; F4G() };
    if (IntTh > '16:00:00' && '16:59:59' > IntTh) { tnt = 6; F4G() };
    if (IntTh > '17:00:00' && '17:59:59' > IntTh) { tnt = 7; F4G() };
    if (IntTh > '18:00:00' && '18:59:59' > IntTh) { tnt = 8; F4G() };
    if (IntTh > '19:00:00' && '19:59:59' > IntTh) { tnt = 9; F4G() };
    if (IntTh > '20:00:00' && '20:59:59' > IntTh) { tnt = 10; F4G() };
    if (IntTh > '21:00:00' && '21:59:59' > IntTh) { tnt = 10; F4G() };
    if (IntTh > '22:00:00' && '22:59:59' > IntTh) { tnt = 10; F4G() };
    if (IntTh > '23:00:00' && '23:59:59' > IntTh) { tnt = 10; F4G() };
}
function openL() {
    if (IntTh > '08:30:00' && '10:00:00' > IntTh) { tmt = 0; F4L() };
    if (IntTh > '10:00:00' && '11:30:00' > IntTh) { tmt = 1; F4L() };
    if (IntTh > '11:30:00' && '13:00:00' > IntTh) { tmt = 2; F4L() };
    if (IntTh > '13:00:00' && '14:30:00' > IntTh) { tmt = 3; F4L() };
    if (IntTh > '14:30:00' && '16:00:00' > IntTh) { tmt = 4; F4L() };
    if (IntTh > '16:00:00' && '17:30:00' > IntTh) { tmt = 5; F4L() };
    if (IntTh > '17:30:00' && '19:00:00' > IntTh) { tmt = 6; F4L() };
    if (IntTh > '19:00:00' && '20:30:00' > IntTh) { tmt = 7; F4L() };
    if (IntTh > '20:30:00' && '22:00:00' > IntTh) { tmt = 8; F4L() };
    if (IntTh > '22:00:00' && '23:30:00' > IntTh) { tmt = 9; F4L() };
    if (IntTh > '23:30:00' && '02:30:00' > IntTh) { tmt = 10; F4L() };
}