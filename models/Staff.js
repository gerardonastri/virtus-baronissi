const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    personale: {
      type: [String],
    },
  },
  { timestamps: true }
);

// export default mongoose.models.Staff || mongoose.model("Staff", StaffSchema);
export default mongoose.models.Staff || mongoose.model("Staff", StaffSchema);
