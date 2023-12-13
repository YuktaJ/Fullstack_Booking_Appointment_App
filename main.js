

//let link = "https://crudcrud.com/api/4d9decd9fb964842add102c3b5864f5b/bookingapp";


// async function refresh() {
//     try {
//         let res = await axios.get(link);
//         for (let i = 0; i < res.data.length; i++) {
//             userOnScreen(res.data[i]);
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

function refresh() {
    axios.get("http://localhost:3000/getUsers").then((res) => {
        for (let i = 0; i < res.data.all_users.length; i++) {
            userOnScreen(res.data.all_users[i]);
        }
    }).catch(err => {
        console.log(err);
    })
}

function yukta(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let obj = {
        name, email, phone
    }
    AddToStorage(obj);
}

async function AddToStorage(obj) {
    try {
        let res = await axios.post("http://localhost:3000/PostUser", obj);
        userOnScreen(res.data.user);
    }
    catch (err) {
        console.log(err);
    }
}

function userOnScreen(obj) {
    let childEle = document.createElement('li');
    let parentEle = document.getElementById('ul');
    childEle.textContent = `${obj.id} ${obj.name} ${obj.email} ${obj.phone}`;
    parentEle.appendChild(childEle);


    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    editBtn.appendChild(document.createTextNode("Edit"));
    deleteBtn.appendChild(document.createTextNode("Delete"));

    childEle.append(editBtn);
    childEle.append(deleteBtn);

    deleteBtn.onclick = () => {
        deleteUser(obj.id);
    }

    editBtn.onclick = () => {
        editUser(obj);
    }
}

async function deleteUser(id) {
    let parent = document.getElementById('ul');
    for (let i = 0; i < parent.children.length; i++) {
        let child = parent.children[i];
        if (child.textContent.includes(id)) {
            parent.removeChild(child);
        }
    }
    try {
        let result = await axios.delete("http://localhost:3000/deleteUser" + `/${id}`);
        console.log(result);
        console.log("DELETED");
    } catch (error) {
        console.log(error);
    }
}

function editUser(obj) {
    document.getElementById("name").value = obj.name;
    document.getElementById("phone").value = obj.phone;
    document.getElementById("email").value = obj.email;

    deleteUser(obj.id);
}

refresh();