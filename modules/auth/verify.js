const checkDetails = require(__base + 'models/user.js');

const verify = (req, res) => {
    let username = req.params.username;
    let type = req.params.type;
    let code = req.body.otp || req.params.code;

    checkDetails.findOne({"username":username}, (err, user) => {
      if (err) {
        res.json({
          success: false,
          msg: err.message
        });
      }
      else {
        if (!user) {
          res.json({ 
            success: false, 
            msg: 'Verification failed. User not found.' 
          });
        }
        else {
          if(user.code[type] == code) {
            let options = {};
            if(type === "phone") {
              options = {$set:{"verified.phone":true},$unset: {"code.phone": 1}};
            }
            else if(type === "email") {
              options = {$set:{"verified.email":true},$unset: {"code.email": 1}};
            }
            checkDetails.findOneAndUpdate({"username": username}, options, {new: true}, (err, doc) => {
              if(err){
                res.json({
                  success: false,
                  msg: err.message
                });
              }
              else {
                res.json({ 
                  success: true, 
                  msg: 'Code verified.'
                });
              }
            })
          }
          else {
            res.json({ 
              success: false, 
              msg: 'Verification failed. Wrong verification code.' 
            });
          }
        }
      }
    });
}

module.exports = verify;
