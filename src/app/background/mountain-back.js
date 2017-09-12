function MountainBack() {
	this.sc = app.size.x / 1964;
	// this.shift = app.canvas.height - this.scale * 664;
	this.sh = 120;
}

// w=1964 px, h=1285 px
MountainBack.prototype = {
	r: function() {
		ctx.save();

		ctx.translate(0, this.sh);
		ctx.scale(this.sc, this.sc);

		ctx.strokeStyle="rgba(0,0,0,0)";
		ctx.miterLimit=4;
		ctx.fillStyle="#BED8D8";
		ctx.beginPath();
		m(1922,186);
		l(1920,182);
		l(1924,183);
		l(1918,169);
		l(1921,170);
		l(1915,158);
		l(1908,171);
		l(1911,170);
		l(1906,183);
		l(1909,182);
		l(1903,199);
		l(1900,201);
		l(1899,198);
		l(1903,199);
		l(1897,185);
		l(1900,186);
		l(1894,174);
		l(1887,187);
		l(1890,186);
		l(1885,199);
		l(1888,198);
		l(1882,214);
		l(1874,219);
		l(1847,201);
		l(1842,190);
		l(1846,191);
		l(1840,177);
		l(1843,178);
		l(1837,166);
		l(1830,179);
		l(1833,178);
		l(1829,189);
		l(1777,154);
		l(1729,188);
		l(1726,182);
		l(1730,183);
		l(1724,169);
		l(1727,170);
		l(1721,158);
		l(1714,171);
		l(1717,170);
		l(1713,180);
		l(1711,179);
		l(1708,172);
		l(1712,173);
		l(1706,159);
		l(1709,160);
		l(1703,148);
		l(1696,161);
		l(1699,160);
		l(1695,169);
		l(1644,134);
		l(1586,175);
		l(1584,169);
		l(1587,170);
		l(1581,158);
		l(1574,171);
		l(1577,170);
		l(1575,176);
		l(1570,165);
		l(1573,166);
		l(1567,154);
		l(1560,167);
		l(1563,166);
		l(1558,179);
		l(1561,178);
		l(1556,193);
		l(1553,187);
		l(1557,188);
		l(1551,174);
		l(1554,175);
		l(1548,163);
		l(1541,176);
		l(1544,175);
		l(1539,188);
		l(1542,187);
		l(1535,206);
		l(1532,198);
		l(1536,199);
		l(1530,185);
		l(1533,186);
		l(1527,174);
		l(1520,187);
		l(1523,186);
		l(1518,199);
		l(1521,198);
		l(1520,201);
		l(1510,195);
		l(1508,190);
		l(1512,191);
		l(1506,177);
		l(1509,178);
		l(1503,166);
		l(1496,179);
		l(1499,178);
		l(1496,185);
		l(1466,165);
		l(1411,204);
		l(1408,198);
		l(1412,199);
		l(1406,185);
		l(1409,186);
		l(1403,174);
		l(1396,187);
		l(1399,186);
		l(1394,199);
		l(1397,198);
		l(1389,219);
		l(1355,243);
		l(1246,134);
		l(1208,173);
		l(1182,147);
		l(1182,147);
		l(1168,114);
		l(1173,116);
		l(1165,96);
		l(1168,98);
		l(1160,80);
		l(1152,98);
		l(1156,96);
		l(1151,108);
		l(1143,89);
		l(1148,91);
		l(1140,71);
		l(1143,73);
		l(1135,55);
		l(1127,73);
		l(1131,71);
		l(1124,89);
		l(1123,88);
		l(1111,74);
		l(1110,74);
		l(1108,72);
		l(1104,73);
		l(1102,71);
		l(1105,69);
		l(1105,67);
		l(1102,67);
		l(1101,65);
		l(1101,65);
		l(1102,62);
		l(1100,60);
		l(1097,60);
		l(1092,57);
		l(1092,48);
		l(1088,50);
		l(1088,47);
		l(1083,47);
		l(1083,45);
		l(1081,45);
		l(1078,45);
		l(1068,52);
		l(1067,52);
		l(1064,52);
		l(1064,51);
		l(1060,52);
		l(1060,54);
		l(1058,57);
		l(1056,57);
		l(1056,50);
		l(1049,52);
		l(1046,57);
		l(1044,58);
		l(1044,68);
		l(1040,71);
		l(1040,71);
		l(1038,69);
		l(1034,72);
		l(1035,57);
		l(1042,55);
		l(1042,45);
		l(1050,42);
		l(1040,38);
		l(1008,0);
		l(1001,0);
		l(970,38);
		l(958,43);
		l(972,48);
		l(972,52);
		l(976,58);
		l(972,63);
		l(972,76);
		l(972,78);
		l(972,84);
		l(965,93);
		l(963,106);
		l(962,109);
		l(961,111);
		l(955,96);
		l(958,98);
		l(950,80);
		l(942,98);
		l(946,96);
		l(938,116);
		l(943,115);
		l(939,124);
		l(938,125);
		l(936,127);
		l(936,134);
		l(934,138);
		l(888,184);
		l(821,117);
		l(759,179);
		l(753,165);
		l(756,167);
		l(748,149);
		l(740,167);
		l(744,165);
		l(736,185);
		l(741,184);
		l(733,205);
		l(705,233);
		l(684,218);
		l(679,206);
		l(682,206);
		l(677,195);
		l(680,196);
		l(675,186);
		l(669,196);
		l(672,195);
		l(667,206);
		l(662,192);
		l(665,192);
		l(660,181);
		l(663,182);
		l(658,172);
		l(652,182);
		l(655,181);
		l(650,193);
		l(653,192);
		l(651,196);
		l(582,150);
		l(548,174);
		l(544,166);
		l(538,176);
		l(541,175);
		l(538,181);
		l(537,182);
		l(532,171);
		l(535,172);
		l(530,162);
		l(524,172);
		l(527,171);
		l(522,183);
		l(525,182);
		l(522,189);
		l(520,184);
		l(523,185);
		l(518,175);
		l(512,185);
		l(515,184);
		l(510,196);
		l(513,195);
		l(511,200);
		l(503,205);
		l(466,180);
		l(411,219);
		l(408,211);
		l(411,212);
		l(406,202);
		l(400,212);
		l(403,211);
		l(398,223);
		l(401,222);
		l(399,227);
		l(353,259);
		l(330,244);
		l(323,226);
		l(326,226);
		l(321,215);
		l(324,216);
		l(319,206);
		l(313,216);
		l(316,215);
		l(311,227);
		l(314,226);
		l(312,232);
		l(287,215);
		l(282,202);
		l(285,202);
		l(280,191);
		l(283,192);
		l(278,182);
		l(272,192);
		l(275,191);
		l(271,201);
		l(267,192);
		l(270,192);
		l(265,181);
		l(268,182);
		l(263,172);
		l(257,182);
		l(260,181);
		l(255,193);
		l(258,192);
		l(257,195);
		l(212,165);
		l(176,191);
		l(73,122);
		l(0,174);
		l(0,1285);
		l(1964,1284);
		l(1964,157);
		l(1922,186);
		cp();
		m(272,204);
		l(271,202);
		l(273,202);
		l(272,204);
		cp();
		m(535,183);
		l(534,182);
		l(536,182);
		l(535,183);
		cp();
		m(546,175);
		l(546,175);
		l(546,175);
		l(546,175);
		cp();
		m(669,208);
		l(668,208);
		l(668,207);
		l(670,206);
		l(669,208);
		cp();
		m(958,116);
		l(958,114);
		l(959,115);
		l(958,116);
		cp();
		m(1033,43);
		l(1040,45);
		l(1040,49);
		l(1033,47);
		l(1033,43);
		cp();
		m(1019,37);
		l(1020,42);
		l(1016,40);
		l(1016,36);
		l(1019,37);
		cp();
		m(991,33);
		l(999,30);
		l(999,36);
		l(991,38);
		l(991,33);
		cp();
		m(988,35);
		l(990,34);
		l(990,38);
		l(988,40);
		l(988,35);
		cp();
		m(984,37);
		l(987,35);
		l(987,40);
		l(984,41);
		l(984,37);
		cp();
		m(984,43);
		l(986,42);
		l(986,46);
		l(984,48);
		l(984,43);
		cp();
		m(979,39);
		l(982,38);
		l(982,43);
		l(979,43);
		l(979,39);
		cp();
		m(976,49);
		l(973,51);
		l(973,47);
		l(977,46);
		l(976,49);
		cp();
		m(978,44);
		l(975,45);
		l(975,41);
		l(978,40);
		l(978,44);
		cp();
		m(983,48);
		l(979,49);
		l(979,45);
		l(983,44);
		l(983,48);
		cp();
		m(990,79);
		l(984,81);
		l(984,71);
		l(990,69);
		l(990,79);
		cp();
		m(988,46);
		l(988,42);
		l(992,41);
		l(992,44);
		l(988,46);
		cp();
		m(993,44);
		l(993,40);
		l(1001,37);
		l(1001,42);
		l(993,44);
		cp();
		m(1002,30);
		l(1010,34);
		l(1010,39);
		l(1002,36);
		l(1002,30);
		cp();
		m(1003,40);
		l(1002,37);
		l(1010,40);
		l(1010,44);
		l(1003,40);
		cp();
		m(1014,36);
		l(1015,40);
		l(1012,39);
		l(1011,34);
		l(1014,36);
		cp();
		m(1018,47);
		l(1015,46);
		l(1015,45);
		l(1012,44);
		l(1012,40);
		l(1015,41);
		l(1015,45);
		l(1015,42);
		l(1018,43);
		l(1018,47);
		cp();
		m(1020,47);
		l(1020,43);
		l(1023,45);
		l(1023,48);
		l(1020,47);
		cp();
		m(1022,42);
		l(1021,38);
		l(1024,39);
		l(1024,43);
		l(1022,42);
		cp();
		m(1029,50);
		l(1026,49);
		l(1025,45);
		l(1029,47);
		l(1029,50);
		cp();
		m(1026,44);
		l(1026,39);
		l(1028,41);
		l(1029,45);
		l(1026,44);
		cp();
		m(1029,41);
		l(1032,42);
		l(1032,46);
		l(1029,45);
		l(1029,41);
		cp();
		m(1033,52);
		l(1033,51);
		l(1030,50);
		l(1030,47);
		l(1032,48);
		l(1033,52);
		l(1033,52);
		cp();
		m(1033,48);
		l(1040,51);
		l(1040,54);
		l(1033,52);
		l(1033,48);
		cp();
		m(1127,92);
		l(1125,90);
		l(1128,90);
		l(1127,92);
		cp();
		m(1537,209);
		l(1536,208);
		l(1538,208);
		l(1537,209);
		cp();
		m(1573,180);
		l(1572,178);
		l(1574,178);
		l(1573,180);
		cp();
		m(1575,183);
		l(1574,183);
		l(1574,182);
		l(1575,182);
		l(1575,183);
		cp();
		m(1831,190);
		l(1831,190);
		l(1831,190);
		l(1831,190);
		cp();
		ctx.fill();
		ctx.stroke();

		ctx.restore();
	}
};
