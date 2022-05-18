let a = ['김','이','박','최','장','서','구','하','마'];
let b = ['지','준','아','미','조','하','리','기'];
let c = ['랑','민','선','란','윤','서','라','지','아'];

let part = ['IT팀','사업팀','영업팀','관리팀','운영팀','인증팀'];
let level = ['인턴','사원','주임','대리','과장','차장','부장'];
let host = ['naver', 'gmail' , 'kakao', 'daum'];
let address = ['co.kr','com','net'];

function getRandom(){
    let username = a[Math.floor(Math.random()*a.length)]+b[Math.floor(Math.random()*b.length)]+c[Math.floor(Math.random()*c.length)];
    let year = Math.floor(Math.random()*3)+19;
    let instc_Month = Math.floor(Math.random()*11)+1;
    let month = instc_Month < 10 ? '0'+ instc_Month : instc_Month;
    let instc_Day = Math.floor(Math.random()*29)+1;
    let day = instc_Day < 10 ? '0'+ instc_Day : instc_Day;

    let date = "20"+year+"-"+month+"-"+day;

    let email ="";

    for(let i = 0; i <= 3+Math.floor(Math.random()*4); i ++){
        email += String.fromCharCode( 97+(Math.floor(Math.random()*25)));
    }
    email += "@";
    email += host[Math.floor(Math.random()*3)]+".";
    email += address[Math.floor(Math.random()*2)];


    form.name.value  = username;
    form.part.value  = part[Math.floor(Math.random()*part.length)];
    form.level.value = level[Math.floor(Math.random()*level.length)];
    form.date.value  = date;
    form.email.value = email;
    createData();
    /*
    insertData(
        postCnt
        ,username
        ,part[Math.floor(Math.random()*part.length)] //part
        ,level[Math.floor(Math.random()*level.length)] //level
        ,-1
        ,date
        ,email
        ,'y'
        )
    */
}