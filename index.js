const Application = require("./src/brain");

function application() {
  return new Application().write(
    {
      id: "667a666e747466766379",
      accountNumber: "409001949651",
      bankBranchName: "HANSALAYA BUILDING",
      accountType: "Current A/C",
      accountHolderName: "Mobitel Digital Services OPC Pvt Ltd",
    },
    "record"
  );
}

console.log(application());
