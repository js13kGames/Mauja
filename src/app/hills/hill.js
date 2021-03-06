function Hill(last) {
	var distanceRange = [1500, 3000],
		vDiff = parseInt(300 + (500 * Math.random())),
		hDiff = distanceRange[0] + Math.floor(Math.random() * (distanceRange[1] - distanceRange[0]));

	this.from = last.to.get();
	this.to = new Vector(this.from.x + hDiff, this.from.y + vDiff);

	this.c1 = this.from.get().add(this.from.get().sub(last.c2).normalize().mult(.45 * hDiff));
	this.c2 = this.to.get().sub(new Vector(hDiff * (.3 + Math.random() * .2), 0));

	this.bound();

	this.addDecoration();
}

Hill.prototype = {
	addDecoration: function() {
		var i = 20, existHouse = Math.random() < .3, houseIndex = 0;

		if (existHouse) {
			houseIndex = 1 + parseInt(20 * Math.random());
			app.decoration.add(app.hills.points[app.hills.points.length - houseIndex].position.get(), true);
		}

		while (i > 1) {
			if (Math.random() < .2) {
				app.decoration.add(app.hills.points[app.hills.points.length - i].position.get());
			}
			i--;
			if (houseIndex === i) {
				i = houseIndex - 5;
			}
		}
	},
	bound: function() {
		var i, accuracy = 20, points = app.hills.points, point;

		for (i = 1; i <= accuracy; i++) {
			point = {};
			point.position = distance(this, (1 / accuracy) * i);
			point.normal = point.position.normal(points[points.length - 1].position);
			points.push(point);
		}
	},
	render: function() {
		ctx.save();
		bp();
		m(this.from.x - 1, this.from.y);
		ctx.bezierCurveTo(this.c1.x, this.c1.y, this.c2.x, this.c2.y, this.to.x, this.to.y);
		l(this.to.x, this.to.y + 2000);
		l(this.from.x - 1, this.from.y + 2000);
		l(this.from.x - 1, this.from.y);
		ctx.fillStyle = '#E8EFEE';
		ctx.fill();
		ctx.restore();
	},
	renderNight: function() {
		ctx.save();
		ctx.globalAlpha = night;
		bp();
		m(this.from.x - 1, this.from.y);
		ctx.bezierCurveTo(this.c1.x, this.c1.y, this.c2.x, this.c2.y, this.to.x, this.to.y);
		l(this.to.x, this.to.y + 2000);
		l(this.from.x - 1, this.from.y + 2000);
		l(this.from.x - 1, this.from.y);
		ctx.fillStyle = 'rgb(21, 30, 30)';
		ctx.fill();
		ctx.restore();
	}
};
