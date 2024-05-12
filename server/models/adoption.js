const mongoose = require("mongoose");

const adoptionSchema = mongoose.Schema({
  name: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
    reuired: true,
  },
  address: {
    type: String,
    reuired: true,
  },
  phone: {
    type: Number,
    reuired: true,
  },
  type: {
    petparent: {
      type: String,
      possibleValues: ["yes", "no", "was"],
    },
  },
  interestedanimal :{
    type :Number,
    reuired :true ,
   },
});

const Adoption = mongoose.model("ADOPTION", adoptionSchema);
module.exports = Adoption;
