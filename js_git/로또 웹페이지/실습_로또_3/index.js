var playerLotto = [1,2,3,4,5,6];

var lotto = [0,0,0,0,0,0];

/* 첫번째 번호 처리 */
var r = Math.floor(Math.random() * 45 + 1); // 1~45 사이의 랜덤 번호 뽑기
lotto[0] = r;   // 뽑은거 첫번째 로또 칸에 적기
var temp = 0;   // 컴퓨터가 뽑은 임리 로또 번호를 저장 할 변수

/* 두번째 번호 처리 */
aaa:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    /* 중복검사 */
    for(var i=0;i<6;i++){
        if(lotto[i] == temp){
            continue aaa;       // 중복이면 컨티뉴 aaa 라벨 가서 처음부터 다시 하게 함.
        }
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lotto[1] = temp;    // 값 넣어주고    
    break;  // 반복문을 빠져나가기
}

/* 세번째 번호 처리 */
bbb:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    //중복검사
    for(var i=0;i<6;i++){
        if(lotto[i] == temp){
            continue bbb;       // 중복이면 컨티뉴 bbb 라벨 가서 처음부터 다시 하게 함.
        }
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lotto[2] = temp;    // 값 넣어주고
    break;  // 반복문을 빠져나가기
}

/* 네번째 번호 처리 */
ccc:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    //중복검사
    for(var i=0;i<6;i++){
        if(lotto[i] == temp){
            continue ccc;   // 중복이면 컨티뉴 ccc 라벨 가서 처음부터 다시 하게 함.
        }
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lotto[3] = temp;    // 값 넣어주고
    break;  // 반복문을 빠져나가기
}

/* 다섯번째 번호 처리 */
ddd:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    //중복검사
    for(var i=0;i<6;i++){
        if(lotto[i] == temp){
            continue ddd;   // 중복이면 컨티뉴 ddd 라벨 가서 처음부터 다시 하게 함.
        }
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lotto[4] = temp;    // 값 넣어주고
    break;  // 반복문을 빠져나가기
}

/* 여섯번째 번호 처리 */
eee:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    //중복검사
    for(var i=0;i<6;i++){
        if(lotto[i] == temp){
            continue eee;   // 중복이면 컨티뉴 eee 라벨 가서 처음부터 다시 하게 함.
        }
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lotto[5] = temp;    // 값 넣어주고
    break;  // 반복문을 빠져나가기
}

dw("당첨번호: ");
for(var i=0;i<lotto.length;i++){
    dw(lotto[i] + " ");
}
br();
dw("당신의 번호: ");
for(var i=0;i<6;i++){
    dw(playerLotto[i] + " ");
}
br();

/* 플레이어 로또와 컴퓨터 로또를 비교하여 등수 처리 */
var okCount = 0;
for(var i=0;i<6;i++){    
    for(var j=0;j<6;j++){
        if(lotto[i] == playerLotto[j]){ // 플레이어 로또 중 컴퓨터 로또와 일치하는게 있으면            
            okCount = okCount + 1;  // 당첨 카운트를 1 증가(맞춤 표시 1개 증가)
            break;
        }
    }
}
dw("맞춘 갯수:" + okCount); br();

/* 등수 화면 표시 */
switch(okCount){
    case 3:
        dw("5등입니다.");
        break;
    case 4:
        dw("4등입니다.");
        break;
    case 5:
        dw("3등입니다.");
        break;
    case 6:
        dw("1등입니다.");
        break;
    default:
        dw("꽝입니다.")
        break;
}
