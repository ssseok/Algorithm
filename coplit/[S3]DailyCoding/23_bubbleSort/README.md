# [Section 3 Daily Coding π] bubbleSort

### λ¬Έμ  μ€λͺ

<p>μ μλ₯Ό μμλ‘ κ°λ λ°°μ΄μ μλ ₯λ°μ μ€λ¦μ°¨μμΌλ‘ μ λ ¬νμ¬ λ¦¬ν΄ν΄μΌ ν©λλ€.</p>
<p>λ²λΈ μ λ ¬(bubble sort)μ μ¬λ¬ μ λ ¬ μκ³ λ¦¬μ¦(μ½μ μ λ ¬, ν΅ μ λ ¬, λ³ν© μ λ ¬, κΈ°μ μ λ ¬ λ±) μ€ κ°μ₯ κΈ°λ³Έμ μΈ μκ³ λ¦¬μ¦μλλ€.</p>
<p>λ²λΈ μ λ ¬ μκ³ λ¦¬μ¦μ μλμ κ°μ΅λλ€.</p>
<ul>
    <li>μ²« λ²μ§Έ μμκ° λ λ²μ§Έ μμλ³΄λ€ ν¬λ©΄, λ μμμ μμΉλ₯Ό λ°κΏλλ€. (swap)</li>
    <li>λ λ²μ§Έ μμμ μΈ λ²μ§Έ μμλ³΄λ€ ν¬λ©΄, λ μμμ μμΉλ₯Ό λ°κΏλλ€. (swap)</li>
    <li>1, 2λ₯Ό λ§μ§λ§κΉμ§ λ°λ³΅ν©λλ€. (λ§μ§λ§μμ λ λ²μ§Έ μμμ λ§μ§λ§ μμλ₯Ό λΉκ΅)</li>
    <li>1~3μ κ³Όμ μ ν λ² κ±°μΉκ² λλ©΄, κ°μ₯ ν° μμκ° λ°°μ΄μ λ§μ§λ§μΌλ‘ λ°λ €λ©λλ€.</li>
    <li>1~3μ κ³Όμ μ μ²« μμλΆν° λ€μ λ°λ³΅ν©λλ€.</li>
    <li>5λ₯Ό ν΅ν΄ λ λ²μ§Έλ‘ ν° μμκ° λ°°μ΄μ λ§μ§λ§ λ°λ‘ λ λ²μ§Έλ‘ λ°λ €λ©λλ€.</li>
    <li>1~3μ κ³Όμ μ μ΄ nλ²(λ°°μ΄μ ν¬κΈ°) λ°λ³΅ν©λλ€.</li>
 </ul>

### μλ ₯ / μΈμ 1 : arr

 <ul>
    <li>number νμμ μμλ‘ κ°λ λ°°μ΄</li>
    <li>arr[i]λ μ μ</li>
    <li>arr[i]μ κΈΈμ΄λ 1,000 μ΄ν</li>
 </ul>

### μΆλ ₯

 <ul>
    <li>number νμμ μμλ‘ κ°λ λ°°μ΄μ λ¦¬ν΄ν΄μΌ ν©λλ€.</li>
    <li>λ°°μ΄μ μμλ μ€λ¦μ°¨μμΌλ‘ μ λ ¬λμ΄μΌ ν©λλ€.</li>
    <li>arr[i] <= arr[j] (i < j)</li>
 </ul>

### μ£Όμ μ¬ν­

 <ul>
    <li>μμμ μ€λͺν μκ³ λ¦¬μ¦μ κ΅¬νν΄μΌ ν©λλ€.</li>
    <li>arr.sort μ¬μ©μ κΈμ§λ©λλ€.</li>
    <li>μλ ₯μΌλ‘ μ£Όμ΄μ§ λ°°μ΄μ μ€μ²©λμ§ μμ 1μ°¨μ λ°°μ΄μλλ€.</li>
 </ul>
