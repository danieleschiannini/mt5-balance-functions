exports.handler = async function(event, context) {
  const balance = JSON.parse(event.body).balance;

  const sheetUrl = 'https://script.google.com/macros/s/AKfycbyjRWkAgc6ALhk5BCWvY1pJ15tmFpx2zw3ccGTbPfrcXzrQR4E3NP3x7pfcbFSW0sh5/exec'; // Sostituisci con il tuo URL Google Script

  const response = await fetch(sheetUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ balance: balance })
  });

  const result = await response.text();
  
  return {
    statusCode: 200,
    body: `Balance received and sent to Google Sheets: ${result}`
  };
};
