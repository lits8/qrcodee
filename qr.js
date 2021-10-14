qrData = document.getElementById('dataInput');
qrdob = document.getElementById('dob');
qrage = document.getElementById('age');
qradd = document.getElementById('add');
qrblank = document.getElementById('blank');

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});

const updateQrData = () => {
  newQrData = qrData.value;
  qrCode.update({
    data: newQrData
  });
};

const updateQrdob = () => {
  newQrData = qrData.value+qrdob.value;
  qrCode.update({
    data: newQrData
  });
};

const updateQrage = () => {
  newQrData = qrData.value+qrdob.value+qrage.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQradd = () => {
  newQrData = qrData.value+qrdob.value+qrage.value+qradd.value;
  qrCode.update({
    data: newQrData
  });
};

const updateQrblank = () => {
  newQrData = "Full Name: "+qrData.value+" "+"Date of Birth: "+qrdob.value+"  "+"Age: " +qrage.value+" "+"Address: "+qradd.value+"   "+"Gender: "+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};


const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));