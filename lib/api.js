export const sendContactForm = async(data)=> 
fetch('/api/contact',{
  method: "POST",
  body: JSON.stringify(data),
  headers:{
    "Content-Type": "application/json",
    Accept: "application/json"
  },
}).then((response) => {
  if(!response.ok) 
  {
    throw new Error("Failed to send message");
  }
  else
  {
    return response.json();
  }
});