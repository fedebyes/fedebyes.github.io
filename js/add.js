

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


var hello="Hello, my name is <br><span class=\"text-primary\">Federico  Bacci</span>";
var tag="<span id=\"type-it-sub\">"
var try1="I'm a software engeneer";
var try2="inear";
var try3="enere";
var try4="I solve computer problems"
var myTypeItInstance = new TypeIt('#type-it', {

  startDelay:2000,

  waitUntilVisible: true,
  lifeLike:true,
cursor:false
});


myTypeItInstance
.type(hello)
.pause(500)
.options({
  cursor:false
})
.go();


var delay=10000;

var myTypeItInstanceSub = new TypeIt('#type-it-sub', {

    lifeLike:true,
    cursor:false,
    deleteSpeed:100,
    startDelay:delay,
    loop: true,
    loopDelay:50000
});
myTypeItInstanceSub
.type(try1)
.pause(1000)
.delete(5)
.type(try2)
.pause(1000)
.delete(5)
.type(try3)
.pause(1000)
.delete(23)
.type(try4)
.options({
  startDelay:0
})
.go();
