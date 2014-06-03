var http=require('http');
var querystring=require('querystring');

var contents = querystring.stringify({
	username:"-----------------------",
	password:"---------------------------",
	quickforward:"yes",
	handlekey:"ls"
});

console.log(contents);

var options={
	host:"www.backtrack.org.cn",
	path:"/member.php?mod=logging&action=login&loginsubmit=yes&infloat=yes&lssubmit=yes&inajax=1",
	method:"post",
	headers:{
		"Content-Type":"application/x-www-form-urlencoded",
		"Content-Length":contents.length,
		"Accept":"text/html,application/xml,application/json,application/javascrpt,*/*",
		"Accept-Language":"zh-CN",
		"Accept-Encoding":"gzip,deflate,sdch",
		"Cache-Control":"max-age=0",
		"Connection":"Keep-Alive",
		"Host":"www.backtrack.org.cn",
		"Referer":"www.backtrack.org.cn",
		"User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36"
	}
}

var req=http.request(options, function(res){
	res.setEncoding("utf8");
	var headers = res.headers;
	var cookies = headers["set-cookie"];
	console.log(cookies);
	console.log("http to bt statusCode:" + res.statusCode);
//	cookies.forEach(function(cookie){
//		console.log(cookie);
//	})
	res.on("data",function(data){
		console.log(data);
	})
})
req.write(contents);
req.end();
