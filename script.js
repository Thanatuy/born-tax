document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const income = parseFloat(document.getElementById('income').value);
    let tax = 0;

    // กำหนดเงื่อนไขการคำนวณภาษี (ประเทศไทย)
    if (income <= 150000) {
        tax = 0;
    } else if (income <= 300000) {
        tax = (income - 150000) * 0.05;
    } else if (income <= 500000) {
        tax = (income - 300000) * 0.1 + 150000 * 0.05;
    } else if (income <= 750000) {
        tax = (income - 500000) * 0.15 + 200000 * 0.1 + 150000 * 0.05;
    } else if (income <= 1000000) {
        tax = (income - 750000) * 0.2 + 250000 * 0.15 + 200000 * 0.1 + 150000 * 0.05;
    } else if (income <= 2000000) {
        tax = (income - 1000000) * 0.25 + 250000 * 0.2 + 250000 * 0.15 + 200000 * 0.1 + 150000 * 0.05;
    } else if (income <= 5000000) {
        tax = (income - 2000000) * 0.3 + 1000000 * 0.25 + 250000 * 0.2 + 250000 * 0.15 + 200000 * 0.1 + 150000 * 0.05;
    } else {
        tax = (income - 5000000) * 0.35 + 3000000 * 0.3 + 1000000 * 0.25 + 250000 * 0.2 + 250000 * 0.15 + 200000 * 0.1 + 150000 * 0.05;
    }

    // แสดงผลลัพธ์
    document.getElementById('result').innerText = tax.toFixed(2) + "บาท";
});

