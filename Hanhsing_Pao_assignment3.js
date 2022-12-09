/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
const createitem = (type, textContent, className) => {
  const newItem = document.createElement(type);
  newItem.textContent = textContent;
  newItem.className = className;
  return newItem;
};

let table_Info = document.querySelector("#table");
let table_item = createitem("table", "", "tabstyle");
let tr_item = createitem("tr", "", "trstyle");

tableInfo.tableHeader.forEach((ele) => {
  let th_item = createitem("th", ele, "thstyle");
  tr_item.appendChild(th_item);
});
table_item.appendChild(tr_item);

tableInfo.tableContent.forEach((ele) => {
  let tr_item = createitem("tr", "", "trstyle");
  Object.values(ele).forEach((x) => {
    let td_item = createitem("td", x, "tdstyle");
    tr_item.appendChild(td_item);
  });
  table_item.appendChild(tr_item);
});
table_Info.appendChild(table_item);
/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let question2 = document.querySelector("#list");
const menu = createitem("ul", "", "menu");

const items = list.map((ele) => {
  return createitem("li", ele, "menu");
});
console.log(items);
menu.append(...items);
question2.appendChild(menu);

const menu2 = createitem("ol", "", "menu");
const item = list.map((ele) => {
  return createitem("li", ele, "menu");
});
console.log(item);
menu2.append(...item);
question2.appendChild(menu2);

/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let question3 = document.querySelector("#drop");
const dropmenu = createitem("select", "", "sestyle");

const dropitems = dropDownList.map((ele) => {
  return createitem("option", ele.content, "optstyle");
});
console.log(dropitems);
dropmenu.append(...dropitems);
question3.appendChild(dropmenu);
