function id(str) {
    return document.getElementById(str)
}
//getElementById를 일일이 사용하면 번거롭기 때문에 함수를 만들어서 사용하게 함

function getDate(beforeDate){
    let before = new Date(beforeDate); //날짜 및 시간 모두 가져옴
    let now = new Date()

    let nowTime = now.getTime() / 1000;
    let bTime = before.getTime() / 1000;

    let workDay = (nowTime - bTime) / (60 * 60 * 24);
    //초 * 분 * 시간(하루)
    return Math.floor(workDay);
}

let appendTarget = "";
let form = {}; //form에 들어갈 객체를 저장하는 곳
let postCnt = 0;

window.onload = function () { //js가 head안에 있기 때문에 실행 시켜주는 용도로 둠
    appendTarget = id("tbody");
    form = {
        name: id("name"),
        part: id("part"),
        level: id("level"),
        date: id("date"),
        email: id("email")
    };
}

function createData() {
    insertData(postCnt, form.name.value, form.part.value, form.level.value, form.date.value, form.email.value)
}

function insertData(cnt, name, part, level, date, email) {
    let workDay = getDate(date);
    let ubutton = `<button id="update_${cnt}">수정</button>`;
    let dbutton = `<button id="delete_${cnt}" onclick="deleteData(${cnt})">삭제</button>`;

    let trtd = `<tr id="tr_${cnt}">` +
        `<td>${cnt}</td>` +
        `<td>${name}</td>` +
        `<td>${part}</td>` +
        `<td>${level}</td>` +
        `<td>${date}</td>` +
        `<td>${workDay}일</td>` +
        `<td>${email}</td>` +
        `<td>${ubutton}</td>` +
        `<td>${dbutton}</td>` +
        `</tr>`;
        appendTarget.innerHTML = appendTarget.innerHTML + trtd;

        postCnt++;
}

function deleteData(cnt){
    id("tr_"+cnt).remove();
}