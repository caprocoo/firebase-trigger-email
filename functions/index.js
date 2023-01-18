const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   // functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.test= functions
    .https.onRequest((request, response) => {
        response.send("Hello World!");
    });

// 추가 된 greet 함수
exports.greet = functions.https.onRequest((request, response) => {
    const { name } = request.body;
    response.send(`Hello ${name}`);
});

// 회원가입
admin.firestore().collection('send-email').add({
    to: ['meta.smtb@gmail.com'],
    message: {
        subject: '회원가입',
        text: 'This is the plaintext section of the email body.',
        html: '<div style=\'width: 80%\'> ' +
            '<h1>이메일 인증코드</h1><br>' +
            '<div style=\'font-size: 14px;\'>' +
            '<b>JIAT 상용차 고속 자율주행 종합 평가 포털</b>에 가입하신것을 환영합니다.</div>' +
            '<div style=\'font-size: 14px;\'>아래의 <b>인증코드</b>를 입력하시면 가입이 정상적으로 완료됩니다.</div>' +
            '<div style=\'background-color: #F9F9F9; height: 55px;\'>' +
            '<h1 style=\'padding: 10px; margin-top: 2%;\'>  @{{key}}  <h1></div>' +
            '<hr style=\'margin-top: 30px\'> <div style=\'color: lightslategrey;\'>본 메일은 발신전용이며, 문의에 대한 회신은 처리되지 않습니다.</div>' +
            '<div style=\'color: lightslategrey;\'>(재)자동차융합기술원 | 주소 : (54158) 전라북도 군산시 동장산2길 6 | 문의 : 063-472-2300(대표전화), 063-472-2359(홈페이지 담당자) | 이메일 : jiat@jiat.re.kr</div></div>'
    }
}).then(() => console.log('Queued email for delivery!'));

// 비밀번호 찾기
admin.firestore().collection('send-email').add({
    to: ['meta.smtb@gmail.com'],
    message: {
        subject: '비밀번호 찾기',
        text: 'This is the plaintext section of the email body.',
        html: '<div style=\'width: 80%\'>' +
        '<h1>이메일 인증코드</h1><br>' +
        '<div style=\'font-size: 14px;\'>아래의 <b>인증코드</b>를 입력하시면 <b>비밀번호 찾기</b>가 정상적으로 완료됩니다.</div>' +
        '<div style=\'background-color: #F9F9F9; height: 55px;\'><h1 style=\'padding: 10px; margin-top: 2%;\'> + key + <h1></div>' +
        '<hr style=\'margin-top: 30px\'>' +
        '<div style=\'color: lightslategrey;\'>본 메일은 발신전용이며, 문의에 대한 회신은 처리되지 않습니다.</div>' +
        '<div style=\'color: lightslategrey;\'>(재)자동차융합기술원 | 주소 : (54158) 전라북도 군산시 동장산2길 6 | 문의 : 063-472-2300(대표전화), 063-472-2359(홈페이지 담당자) | 이메일 : jiat@jiat.re.kr</div>' +
        '</div>'
    }
}).then(() => console.log('Queued email for delivery!'));

// 아이디 찾기
admin.firestore().collection('send-email').add({
    to: ['meta.smtb@gmail.com'],
    message: {
        subject: '아이디 찾기',
        text: 'This is the plaintext section of the email body.',
        html: '<div style=\'width: 80%\'>' +
            '<h1>이메일 인증코드</h1><br>' +
            '<div style=\'font-size: 14px;\'>아래의 <b>인증코드</b>를 입력하시면 <b>아이디 찾기</b>가 정상적으로 완료됩니다.</div>' +
            '<div style=\'background-color: #F9F9F9; height: 55px;\'><h1 style=\'padding: 10px; margin-top: 2%;\'> + key + <h1></div>' +
            '<hr style=\'margin-top: 30px\'>' +
            '<div style=\'color: lightslategrey;\'>본 메일은 발신전용이며, 문의에 대한 회신은 처리되지 않습니다.</div>' +
            '<div style=\'color: lightslategrey;\'>(재)자동차융합기술원 | 주소 : (54158) 전라북도 군산시 동장산2길 6 | 문의 : 063-472-2300(대표전화), 063-472-2359(홈페이지 담당자) | 이메일 : jiat@jiat.re.kr</div>' +
            '</div>'
    }
}).then(() => console.log('Queued email for delivery!'));