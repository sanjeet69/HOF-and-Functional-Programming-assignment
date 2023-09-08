
function isValidURL(url) {

    const urlPattern = /^(https?:\/\/)[\w\d.]+[a-z]+$/i;
  
    
    return urlPattern.test(url);
  }
  
// url test
  const url1 = "http://www.example.com";
  const url2 = "https://www.example.com";
  const url3 = "ftp://example.com";
  const url4 = "https://example";
  const url5 = "http://123.45.67.89";
  
  console.log(`URL 1 (${url1}): ${isValidURL(url1) ? "Valid" : "Invalid"}`);
  console.log(`URL 2 (${url2}): ${isValidURL(url2) ? "Valid" : "Invalid"}`);
  console.log(`URL 3 (${url3}): ${isValidURL(url3) ? "Valid" : "Invalid"}`);
  console.log(`URL 4 (${url4}): ${isValidURL(url4) ? "Valid" : "Invalid"}`);
  console.log(`URL 5 (${url5}): ${isValidURL(url5) ? "Valid" : "Invalid"}`);
  