const data = {
  prenom: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: false
  },
  adresse: {
    type: String,
    required: false
  },
  dateNaissance: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  password:{
    type: String,
    required: false
  }
}
module.exports.data = data
