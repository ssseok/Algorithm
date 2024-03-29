# [Section 3 Daily Coding 🌟] power

### 문제 설명

<p>두 수를 입력받아 거듭제곱을 리턴해야 합니다.</p>

### 입력 / 인자 1 : base

 <ul>
    <li>number 타입의 자연수 (base >= 2)</li>
 </ul>

### 입력 / 인자 2 : exponent

 <ul>
    <li>number 타입의 정수 (exponent >= 0)</li>
 </ul>

### 출력

 <ul>
    <li>number 타입을 리턴해야 합니다.</li>
    <li>실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야 합니다.</li>
 </ul>

### 주의 사항

 <ul>
    <li>Math.pow, 거듭제곱 연산자 사용은 금지됩니다.</li>
    <li>시간복잡도 O(logN)을 만족해야 합니다.</li>
    <li>나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문입니다. 하지만 모든 연산이 끝난 뒤에 그 결과를 94,906,249로 나누려고 해서는 안 됩니다. 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.</li>
 </ul>
