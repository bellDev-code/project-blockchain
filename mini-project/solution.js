//음료 목록
//코카콜라 - 700원, 오렌지주스-1200, 커피-500, 물-700원
//보리차 - 1200원, 포카리-1000원, 뽀로로-1300원
//각가의 음료는 총 5개씩 있습니다.

//고객 지갑 - 10000원
//음료자판기 최초 잔도 - 1000원

//동전 투입 - 100원, 500원, 1000원

let total_vending_amount = 1000;
let total_customer_amount = 10000;
let total_input_amount = 0;

let drinkList = [
  {
    drinkId: "1",
    drinkName: "코카콜라",
    price: 700,
    stock: 5,
  },
  {
    drinkId: "2",
    drinkName: "오렌지주스",
    price: 1200,
    stock: 5,
  },
  {
    drinkId: "3",
    drinkName: "커피",
    price: 500,
    stock: 5,
  },
  {
    drinkId: "4",
    drinkName: "물",
    price: 700,
    stock: 5,
  },
  {
    drinkId: "5",
    drinkName: "보리차",
    price: 1200,
    stock: 5,
  },
  {
    drinkId: "6",
    drinkName: "포카리",
    price: 1000,
    stock: 5,
  },
  {
    drinkId: "7",
    drinkName: "뽀로로",
    price: 1300,
    stock: 5,
  },
];

function inputAmount(amount) {
  const output = document.getElementById("output");
  if (amount <= total_customer_amount) {
    total_input_amount += amount;
    total_customer_amount -= amount;
    total_vending_amount += amount;

    for (const drink of drinkList) {
      if (drink.price <= total_input_amount) {
        document.getElementById(
          "btnDrink" + drink.drinkId
        ).style.backgroundColor = "yellow";
      }
    }

    document.getElementById("total_input_amount").value = total_input_amount;
    document.getElementById("total_customer_amount").value =
      total_customer_amount;
    document.getElementById("total_vending_amount").value =
      total_vending_amount;

    output.insertAdjacentHTML(
      "beforeend",
      `<p>${amount}이 투입되었습니다.</p>`
    );
    output.insertAdjacentHTML(
      "beforeend",
      `<p>총 투입 금액은 ${total_input_amount}입니다.</p>`
    );
    output.insertAdjacentHTML(
      "beforeend",
      `<p>당신의 지갑에는 ${total_customer_amount}이 남아 있습니다.</p>`
    );
  } else {
    output.insertAdjacentHTML(
      "beforeend",
      `<p>내 지갑에 남아 있는 돈이 ${total_customer_amount} 입니다.</p>`
    );
    output.insertAdjacentHTML(
      "beforeend",
      `<p>${amount}를 투입할 수 없습니다.</p>`
    );
  }
  output.scrollTop = output.scrollHeight;
}

function requestDrink(drinkId) {
  let drink = drinkList.filter((d) => d.drinkId == drinkId)[0];
  if (drink.stock > 0) {
    if (total_input_amount >= drink.price) {
      let changes = total_input_amount - drink.price;
      if (total_vending_amount >= changes) {
        output.insertAdjacentHTML(
          "beforeend",
          `<p>${drink.drinkName} 음료가 나왔습니다. 잔돈 ${changes}이 나옵니다.</p>`
        );
        total_customer_amount += changes;
        drink.stock -= 1;
        total_input_amount = 0;
        total_vending_amount -= changes;

        document.getElementById("total_input_amount").value =
          total_input_amount;
        document.getElementById("total_customer_amount").value =
          total_customer_amount;
        document.getElementById("total_vending_amount").value =
          total_vending_amount;

        document.getElementById("drink_stock" + drinkId).innerText =
          drink.stock;

        output.insertAdjacentHTML(
          "beforeend",
          `<p>이제 당신 지갑에는 총 ${total_customer_amount} 있습니다.</p>`
        );

        for (var item of drinkList) {
          document.getElementById(
            "btnDrink" + item.drinkId
          ).style.backgroundColor = "initial";
        }
      } else {
        output.insertAdjacentHTML(
          "beforeend",
          `<p>음료자판기에 잔돈이 없어서 ${drink.drinkName} 음료를 구매할 수 없습니다.</p>`
        );
      }
    } else {
      output.insertAdjacentHTML(
        "beforeend",
        `<p>투입하신 금액은 총 ${total_input_amount}인데, 음료 가격은 ${drink.price}여서 구매할 수 없습니다.</p>`
      );
    }
  } else {
    output.insertAdjacentHTML(
      "beforeend",
      `<p>선택하신 음료 ${drink.drinkName}이 재고가 없습니다.</p>`
    );
  }
  output.scrollTop = output.scrollHeight;
}
