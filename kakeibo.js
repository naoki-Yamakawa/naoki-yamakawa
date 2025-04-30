let total = 0;

function addEntry() {
  const date = document.getElementById("date").value;
  const item = document.getElementById("item").value.trim();
  const amount = parseInt(document.getElementById("amount").value);

  if (!date || !item || isNaN(amount)) {
    alert("すべての項目を入力してください");
    return;
  }

  const list = document.getElementById("list");

  const li = document.createElement("li");
  li.innerHTML = `${date}｜${item}：${amount} 円 
    <button onclick="deleteEntry(this, ${amount})">削除</button>`;

  list.appendChild(li);

  total += amount;
  document.getElementById("total").textContent = total;

  // 入力クリア
  document.getElementById("date").value = "";
  document.getElementById("item").value = "";
  document.getElementById("amount").value = "";
}

function deleteEntry(btn, amount) {
  btn.parentElement.remove();
  total -= amount;
  document.getElementById("total").textContent = total;
}
