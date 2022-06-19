exports.createPostValidator = (req, res, next) => {
    // title 
    req.check('title', "Write a title").notEmpty()
    req.check('title', 'Title must be between 4 to 150 characters').isLength({
        min: 4,
        max:150
    });

    // body 
    req.check('body', "Write a Body").notEmpty()
    req.check('body', 'Body must be between 4 to 2000 characters').isLength({
        min: 4,
        max:2000
    });

    // check for errors

    const errors = req.validationErrors()
    // if error, show the first one as they happen

    if(errors){
        const firstError = errors.map((error) =>   error.msg)[0];
        return res.status(400).json({error: firstError})
    }

    //proceed to next middleware
    next();
};

exports.userSignupValidator = (req, res, next) => {
  // name is not null and between 4 to 20
  req.check('name', 'Name is required').notEmpty();
  req.check('name', 'Name is required')
  .isLength({
    min: 2,
    max: 50
  })
  .withMessage('Name must contain minimum 2 characters')

  // email is not null, valid and normalized
  req.check('email', 'Email must be 3 to 50 chracters')
  .matches(/.+\@.+\..+/)
  .withMessage('Email must contain @')
  .isLength({
    min: 3,
    max: 50
  });

  // course is not null and between 4 to 20
  req.check('course', 'Course is required').notEmpty();

  // university is not null and between 4 to 20
  req.check('university', 'University is required').notEmpty();

  // contact is not null and between 4 to 20
  req.check('contact', 'Contact is required').notEmpty();
  req.check('contact').isLength({min:10, max:10})
  .withMessage('Invalid phone number')
  req.check('contact').isMobilePhone()
  .withMessage("Phone number should be numeric")

  // check password
  req.check('password', 'Password is required').notEmpty();
  req.check('password').isLength({min:6})
  .withMessage('Password must contain atleast 6 characters')
  .matches(/\d/) // d--> digit
  .withMessage('Password must contain a number');

  // check for errors
  const errors = req.validationErrors()
  // if error, show the first one as they happen

  if(errors){
      const firstError = errors.map((error) =>   error.msg)[0];
      return res.status(400).json({error: firstError})
  }

  //proceed to next middleware
  next();
}

exports.passwordResetValidator = (req, res, next) => {
    // check for password
    req.check("newPassword", "Password is required").notEmpty();
    req.check("newPassword")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 chars long")
        .matches(/\d/)
        .withMessage("must contain a number")
        .withMessage("Password must contain a number");
 
    // check for errors
    const errors = req.validationErrors();
    // if error show the first one as they happen
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    // proceed to next middleware or ...
    next();
};
