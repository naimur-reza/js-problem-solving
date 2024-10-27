 

  const validateUserInput  = (userObject) => {
   const  {name, email, password} = userObject



    if(name.length < 3 || password.length < 6 || !email.includes("@") || !email.includes(".com")){
        return {
            isValid: false,
            errors: {
              name: 'Name must be at least 3 characters long.',
              email: 'Email must be a valid email address.',
              password: 'Password must be at least 6 characters long.'
            }
          }
    } else {
        return {success: true}
    }

  }
  const userInput = {
    name: 'Joe Tribbian',
    email: 'jo@example.com',
    password: '123sdfdf'
  };
  

  const isValid = validateUserInput(userInput)

  console.log(isValid)