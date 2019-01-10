//instantiate github.js
const github = new GitHub();

//search input
const searchButton = document.getElementById('searchUser_button');

//search input event listener
searchButton.addEventListener('click', e => {
  //get input text
  var searchUser = document.getElementById('searchUser').value;
  //console.log(searchUser);

  //check if input text is empty
  if (searchUser !== '') {
    //make http call
    github.getUser(searchUser).then(data => {
      if (data.profile.message === 'Not Found') {
        //show alert
      } else {
        console.log(data);
      }
    });
  } else {
    console.log('search input empty');
    //clear profile
  }
});
