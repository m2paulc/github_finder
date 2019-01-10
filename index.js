//instantiate github.js
const github = new GitHub();
//instantiate UI
const ui = new UI();

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
        ui.showAlert('User Not Found', 'alert alert-danger');
      }
      else {
        //show profile
        //console.log(data);
        ui.showProfile(data.profile);
        //show repos
        ui.showRepos(data.repoData);
      }
    });
  }
  else {
    // console.log('search input empty');
    //clear profile
    ui.clearProfile();
  }
});
