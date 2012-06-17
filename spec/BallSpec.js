describe("A Ball", function(){
    var ball;

    beforeEach(function(){
	ball = new Ball();
    });
    
    it("should have a default position", function(){
	expect(ball).toBeAt({ x : 0, y : 0 });
    });

    it("should have a default velocity", function(){
	expect(ball).toHaveVelocity({ vx : 1, vy : 1 });
    });

    it("should have a correct postion after update", function(){
	var originalPosition = ball.get("position");
	var originalVelocity = ball.get("velocity");
	
	ball.update();
	
	expect(ball).toBeAt({
	    x : (originalPosition.x + originalVelocity.vx),
	    y : (originalPosition.y + originalVelocity.vy)
	});
	expect(ball).toHaveVelocity(originalVelocity);
    });
});