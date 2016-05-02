// creat our Crypto class
//it takes a string as an argument
var Student = function(fn, ln, email, sid){
	//store the string for use elsewhere
	this.first_name = fn;
	this.last_name = ln;
	this.email = email;
	this.sid = sid;
	this.courses = [];
};

Student.prototype.register = function(course) {
	this.courses.push(course);
	this.notify("You have been enrolled in " + course.name);
};

Student.prototype.notify = function(message) {
	message.send(this.email);
}

module.exports = Student; 

var jocelyn = new Student ("Jocelyn", "Parada", "jp@jmu.edu", "123456");
var isat252 = new Course("isat252","Programming", "Spring", "2016");
jocelyn.register(isat252);