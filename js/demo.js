const steps = [
	['./screenshots/1.png', [3450, 220], 'Start by adding a connection'],
	['./screenshots/2.png', [2680, 800], 'Enter a Connection Name and click Add'],
	['./screenshots/3.png', [3190, 880], 'Authorize a connection'],
	['./screenshots/4.png', [2630, 810], 'Choose an environment and click Authorize'],
	['./screenshots/5.png', [935, 1100], 'Enter your Salesforce credentials and click Log In'],
	['./screenshots/6.png', [2560, 1230], 'Click Import to import Salesforce Object'], 
];
 
let stepCounter = 0;
const radius = 40; 

$(document).ready(function(){

    function animateCircle(circleRadius, ms, cb) {
        const coordinates = steps[stepCounter][1];
        $('.circle')
            .animate({
                top: coordinates[1] / 2 - circleRadius - (circleRadius - radius), 
                left: coordinates[0] / 2 - circleRadius - (circleRadius - radius), 
                width: circleRadius * 2,
                height: circleRadius * 2,
                borderRadius: circleRadius
        }, {
            complete: cb,
            duration: ms,
            step: function() {
                $('.circle').css("overflow","visible");
             }
        });

        const labelText = steps[stepCounter][2];
        $('.circle-label')
            .text(labelText)
            .animate({
                top: radius * 1.8 + (circleRadius - radius), 
                left: radius * 1.8 + (circleRadius - radius) 
            }, {
                duration: ms
		});
    }

    function updateCircle() {
        animateCircle(radius, 0);
    };

    const interval = setInterval(function() {
        animateCircle(radius + 20, 200, function() { 
            animateCircle(radius, 200) 
        })
    }, 1500);

    updateCircle();

    $('.circle').click(function() {
        stepCounter = (stepCounter + 1) % steps.length;
        const image = steps[stepCounter][0];
        $('.screenshot').attr('src', image);
        updateCircle();
    })
});