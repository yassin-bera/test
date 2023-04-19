const url = 'https://randomuser.me/api/';
const title = document.querySelector('h1');
const userInfo = document.querySelector('.user__info');
const userImage = document.querySelector('.user__image');
const userPassword = document.querySelector('.fa-lock');
const userName = document.querySelector('.fa-user');
const userEmail = document.querySelector('.fa-envelope');
const userPhone = document.querySelector('.fa-phone');
const randomButton = document.querySelector('.random__user__button');
async function getDataFromApi() {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}
async function spilitData() {
    let userAllData = {
        name: '',
        email: '',
        phone: '',
        picture: '',
        password: '',

    };
    const response = await getDataFromApi().then((data) => {
    //    console.log(data.results[0]);
        userAllData.name = data.results[0].name.first + ' ' + data.results[0].name.last;
        userAllData.email = data.results[0].email;
        userAllData.phone = data.results[0].phone;
        userAllData.picture = data.results[0].picture.large;
        userAllData.password = data.results[0].login.password;
    });
    return userAllData;
}
    


let Alldata ;
randomButton.addEventListener('click', async() => {
        // console.log(spilitData());
        Alldata = await spilitData();
        console.log(Alldata);
        title.textContent = 'my name is'
        userInfo.textContent = Alldata.name;
        userImage.src = Alldata.picture;
});
userName.addEventListener('click', () => {
        title.textContent = 'my name is'
        userInfo.textContent = Alldata.name;
        userImage.src = Alldata.picture;
});
userEmail.addEventListener('click', () => {
        title.textContent = 'my email is'
        userInfo.textContent = Alldata.email;
        userImage.src = Alldata.picture;
});
userPhone.addEventListener('click', () => {
        title.textContent = 'my phone is'
        userInfo.textContent = Alldata.phone;
        userImage.src = Alldata.picture;
});
userPassword.addEventListener('click', () => {
        title.textContent = 'my password is'
        userInfo.textContent = Alldata.password;
        userImage.src = Alldata.picture;
});



