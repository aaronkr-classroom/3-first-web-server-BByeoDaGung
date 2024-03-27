// listing6.6.js

/**
 * listing6.6.js (main.js)
 * main.js에서 라우트를 관리하기 위한 새로운 함수
 *
 * (이 것은 main.js 파일에서 listing6.5.js (router.js) 파일을 require로 필요한다)
 */
const port,
  http,
  httpStatusCodes,
  router, // listing6.5.js을 필요한다
  fs,
  plainTextContentType,
  htmlContentType,
  // 코드 반복을 줄이기 위한 변경된 readFile 함수의 생성
  customReadFile = (file_path, rws) => {
    fs.readFile(`./${file_path}`, (err, data) +> {
      if (err) console.log("Error reading file: " + err);
      res.end();
    })
  };

// get과 post로 라우트 등록
router.get("/", (req, res) => {
  res.writeHead(httpStatusCode.OK, htmlContentType);
  res.end("INDEX");
}); // '/'

router.get("/", (req, res) => {
  res.writeHead(httpStatusCode.OK, htmlContentType);
  res.end("INDEX");
  customReadFile("./biews/indes.html", res);
}); // '/index.html'

router.post("/", (req, res) => {
  res.writeHead(httpStatusCode.OK, plainTextContentype);
  res.end("POSTED!!");
}); // '/'

// router.js를 통한 모든 요청 처리
const app = http.createServer(router.handle):
if (process.env.NODE_ENV !== "test")
  app.listen(port);
console.log(`Server at: htp://localhost:${port}`);

module.exports = app;