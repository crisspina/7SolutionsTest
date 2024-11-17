let dataList = [
  { type: "Fruit", name: "Apple" },
  { type: "Vegetable", name: "Broccoli" },
  { type: "Vegetable", name: "Mushroom" },
  { type: "Fruit", name: "Banana" },
  { type: "Vegetable", name: "Tomato" },
  { type: "Fruit", name: "Orange" },
  { type: "Fruit", name: "Mango" },
  { type: "Fruit", name: "Pineapple" },
  { type: "Vegetable", name: "Cucumber" },
  { type: "Fruit", name: "Watermelon" },
  { type: "Vegetable", name: "Carrot" },
];

const VEGETABLE_TYPE = "Vegetable";
const FRUIT_TYPE = "Fruit";

let vegetableList = [];
let fruitList = [];

function filterDataByType(element) {
  if (element.type === VEGETABLE_TYPE) {
    vegetableList.push(element);
    renderTable(vegetableList, "vegetableList");
  } else if (element.type === FRUIT_TYPE) {
    fruitList.push(element);
    renderTable(fruitList, "fruitList");
  }

  dataList = dataList.filter((el) => el.name !== element.name);
  renderList();

  setTimeout(() => {
    if (element.type === VEGETABLE_TYPE) {
      vegetableList = vegetableList.filter((el) => el.name !== element.name);
      renderTable(vegetableList, "vegetableList");
    } else if (element.type === FRUIT_TYPE) {
      fruitList = fruitList.filter((el) => el.name !== element.name);
      renderTable(fruitList, "fruitList");
    }

    dataList.push(element);
    renderList();
  }, 5000);
}

function renderList() {
  const dataListElement = document.getElementById("dataList");
  dataListElement.innerHTML = "";

  dataList.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.textContent = item.name;
    div.onclick = () => filterDataByType(item); 
    dataListElement.appendChild(div);
  });
}

function renderTable(list, elementId) {
  const tableBody = document.getElementById(elementId);
  tableBody.innerHTML = "";

  list.forEach((item) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = item.name;
    tr.appendChild(td);
    tableBody.appendChild(tr);
  });
}

renderList();
