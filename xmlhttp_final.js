const xhr = new XMLHttpRequest();

//요청을 보낼 준비
// xhr.open(요청 메서드, 요청URL);
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos"); //CRUD (Create, Read, Update, Delete), 'GET' 서버의 데이터를 조회하고 싶을때
console.log(`OPEND, ${xhr.readyState}`);

//readyState 프로퍼티의 값이 변경될 때마다 arrow fn 호출
xhr.onreadystatechange = () => {
  //데이터 응답 (로딩) 완료와 같음. ==onload
  if (xhr.readyState == 4 && xhr.status == 200) {
    // console.log(`LOADING, ${xhr.readyState}`);
    console.log(`response data: ${xhr.responseText}`);
  }
};

xhr.send();
