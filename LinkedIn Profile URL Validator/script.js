
function isValidLinkedInURL(url) {
  
  const linkedInPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+$/;

  
  return linkedInPattern.test(url);
}

const url1 = "https://www.linkedin.com/in/johndoe";
const url2 = "http://www.linkedin.com/in/jane-smith";
const url3 = "https://www.linkedin.com/pub/jane-doe";
const url4 = "https://www.linkedin.com/company/example";

console.log(`URL 1 (${url1}): ${isValidLinkedInURL(url1) ? "Valid" : "Invalid"}`);
console.log(`URL 2 (${url2}): ${isValidLinkedInURL(url2) ? "Valid" : "Invalid"}`);
console.log(`URL 3 (${url3}): ${isValidLinkedInURL(url3) ? "Valid" : "Invalid"}`);
console.log(`URL 4 (${url4}): ${isValidLinkedInURL(url4) ? "Valid" : "Invalid"}`);
