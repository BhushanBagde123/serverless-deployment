const API_URL="PASTE_YOUR_API_GATEWAY_URL_HERE";

async function submitFeedback(){

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const message=document.getElementById("message").value;

await fetch(API_URL,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
message
})
});

alert("Feedback Submitted");

loadFeedback();

}

async function loadFeedback(){

const response=await fetch(API_URL);

const data=await response.json();

const list=document.getElementById("feedbackList");

list.innerHTML="";

data.forEach(item=>{

list.innerHTML+=`
<div class="feedback">
<h3>${item.name}</h3>
<p>${item.email}</p>
<p>${item.message}</p>
</div>
`;

});

}

loadFeedback();