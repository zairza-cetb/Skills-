createUserWithEmailAndPassword(auth, user.enterEmail, user.enterPassword)
      .then((response) => {
        //authenticate user
        auth.currentUser.getIdToken(true).then((idToken) => {
          AuthUserPost(idToken);
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });