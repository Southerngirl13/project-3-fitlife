// module.exports = mongoose.model('UserSession', UserSessionSchema);
// module.exports = mongoose.model('User', UserSchema);

module.exports = {
    UserSessionSchema: require("./UserSession"),
    UserSchema: require("./User"),
    AssessmentSchema: require("./Assessment")
  };
  
