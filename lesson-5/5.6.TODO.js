// listing5.6.js

/**
 * listing5.6.js
 * 간단한 라우팅 (p. 97)
 */

// 요청에 따른 라우트의 매핑 정의
const routeRespMap = {
    "/": "<h1>Home Page</h1><p>Welcome to my page!</p>",
    "/about": "<h1>About Page</h1><p>About me</p>",
    "/info": "<h1>Info Page</h1><p>Personal Info</p>",
    "/contact": "<h1>Contact Page</h1><p>Contact me!</p>",
};

const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    app = http.createServer();

// 요청 핸들러 등록
app.on('request', (req, res) => {
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html",
    });

    // 요청 라우트가 정의된 맵에 있는지 체크
    if (routeRespMap[req.url]) {
        res.end(routeRespMap[req.url]); // 지연 없이 바로 응답을 보내도록 수정
    } else {
        res.end("<h1>404</h1><p>Where are you?</p>"); // 404 응답을 지연 없이 바로 보내도록 수정
    }
});

// 서버 리스닝 및 콘솔 출력
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}
