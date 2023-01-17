console.log("app.js 파일")  // 이건 안 나옴... 왜?
alert("환영합니다");        // 요건 나옴...

/**
 * 같은 v8 엔진이지만 
 * 서버와 클라에서 사용하는 js는 다름
 * front와 back을 헷갈리면 안됨
 * console ~~ 는 node.js가,
 * alert ~~ 는 chrome이 처리
 */