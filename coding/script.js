function kenaRazia(date, data) {
    const ganjilGenapRute = [
      "Gajah Mada",
      "Hayam Wuruk",
      "Sisingamangaraja",
      "Panglima Polim",
      "Fatmawati",
      "Tomang Raya"
    ];
  
    const isGanjil = date % 2 !== 0;
  
    function getLastDigit(str) {
      let digits = "0123456789";
      for (let i = str.length - 1; i >= 0; i--) {
        if (digits.indexOf(str[i]) !== -1) {
          return parseInt(str[i]);
        }
      }
      return -1;
    }
  
    let result = [];
  
    for (let i = 0; i < data.length; i++) {
      let vehicle = data[i];
  
      if (vehicle.type === "Mobil") {
        let lastDigit = getLastDigit(vehicle.plat);
        let isPlatGanjil = lastDigit % 2 !== 0;
  
        let violationCount = 0;
  
        for (let j = 0; j < vehicle.rute.length; j++) {
          if (ganjilGenapRute.indexOf(vehicle.rute[j]) !== -1) {
            if (isGanjil !== isPlatGanjil) {
              violationCount++;
            }
          }
        }
  
        if (violationCount > 0) {
          result.push({ name: vehicle.name, tilang: violationCount });
        }
      }
    }
  
    return result;
  }
  
  function displayResults(results) {
    const tableBody = document.querySelector("#resultTable tbody");
    tableBody.innerHTML = "";
  
    results.forEach(result => {
      const row = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.textContent = result.name;
      row.appendChild(nameCell);
  
      const tilangCell = document.createElement("td");
      tilangCell.textContent = result.tilang;
      row.appendChild(tilangCell);
  
      tableBody.appendChild(row);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const date = 27;
    const data = [
      {
        name: "Denver",
        plat: "B 2791 KDS",
        type: "Mobil",
        rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
      },
      {
        name: "Toni",
        plat: "B 1212 JBB",
        type: "Mobil",
        rute: [
          "Pintu Besar Selatan",
          "Panglima Polim",
          "Depok",
          "Senen Raya",
          "Kemang"
        ]
      },
      {
        name: "Stark",
        plat: "B 444 XSX",
        type: "Motor",
        rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
      },
      {
        name: "Anna",
        plat: "B 678 DD",
        type: "Mobil",
        rute: [
          "Fatmawati",
          "Panglima Polim",
          "Depok",
          "Senen Raya",
          "Kemang",
          "Gajah Mada"
        ]
      }
    ];
  
    const results = kenaRazia(date, data);
    displayResults(results);
  });