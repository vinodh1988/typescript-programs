var Test = /** @class */ (function () {
    function Test(member) {
        this.member = member;
    }
    Test.prototype.setMember = function (member) {
        this.member = member;
    };
    Test.prototype.show = function () {
        console.log("Member ", this.member);
    };
    return Test;
}());
var temp = new Test(89);
temp.setMember(90);
var obj = new Test("Ram");
obj.setMember(35);
temp.show();
obj.show();
