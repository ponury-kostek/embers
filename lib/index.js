const ebs = require("../native");
console.log(ebs.serialize({
	żółć: "lol",
	a: [
		1,
		true,
		"łódka",
		-12.34,
		null,
		undefined,
		false,
		{},
		[]
	]
}));