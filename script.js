function generateFields() {
  let count = document.getElementById("subCount").value;
  let area = document.getElementById("marksArea");

  area.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    area.innerHTML += `
      <label>Marks for Subject ${i}</label>
      <input type='number' id='m${i}' />
    `;
  }
  document.getElementById("calcBtn").style.display = "block";
}

function calculateReport() {
  let name = document.getElementById("name").value;
  let cls = document.getElementById("cls").value;
  let roll = document.getElementById("roll").value;
  let count = document.getElementById("subCount").value;

  let total = 0;
  let failed = false;

  for (let i = 1; i <= count; i++) {
    let mark = parseFloat(document.getElementById(`m${i}`).value);
    total += mark;
    if (mark < 35) failed = true;
  }

  let avg = total / count;

  let grade = "";
  if (avg >= 90) grade = "A";
  else if (avg >= 75) grade = "B";
  else if (avg >= 50) grade = "C";
  else if (avg >= 35) grade = "D";
  else grade = "Fail";

  let result = failed ? "FAIL" : "PASS";

  document.getElementById("reportBox").style.display = "block";
  document.getElementById("reportBox").innerHTML = `
    <h3>Progress Report</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Class:</b> ${cls}</p>
    <p><b>Roll No:</b> ${roll}</p>
    <p><b>Total Marks:</b> ${total}</p>
    <p><b>Average:</b> ${avg.toFixed(2)}</p>
    <p><b>Grade:</b> ${grade}</p>
    <p><b>Result:</b> ${result}</p>
  `;
}
