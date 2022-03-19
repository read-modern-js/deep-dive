const getDataFromBackend = async () => {
    const rest = await fetch("http://localhost:8000/users");
    console.log(rest); //Response 객체를 래핑한 Promise 객체
    console.log(rest instanceof Promise); // 왜 false? Response 하면 True.
    const data = await rest.json();
    console.log(data); //Data

  
    return data;
  };
/* const getDataFromBackend = () => {
    const rest = fetch("http://localhost:8000/users").then(()=>{
        console.log(rest);
        return rest.json() // 기다려주지 않는 방식
    }).catch(e=>{
        console.log(e)
    })
  }; */
const res = await getDataFromBackend();
const addData = async () => {
const data = await getDataFromBackend();

data.forEach((value) => {
    const div = document.createElement("div");
    div.classList.add("userContainer");
    div.innerHTML = `
        <h3>${value.name}</h3>
        <p>${value.role}</p>
    `;

    container.append(div);
});
};
const container = document.getElementById("container");
// the new variables
const openFormButton = document.getElementById("newUserButton");
const closeFormButton = document.getElementById("closeFormButton");
const addUserFormContainer = document.getElementById("addUserFormContainer");
openFormButton.addEventListener("click", () => {
    addUserFormContainer.style.display = "flex";
  });
  closeFormButton.addEventListener("click", () => {
    addUserFormContainer.style.display = "none";
  });
addData();