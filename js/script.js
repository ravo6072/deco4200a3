// Side bar toggle -------------------------------------------
function show() {
    document.getElementById('sidebar').classList.toggle('active');
  }

  function showDiv() {
    var x = document.getElementById('template');
    var y = document.getElementById('OGpage');
   if
   (x.style.display === "none") {
     x.style.display = "block";
     y.style.display ="none";
   } else {
     x.style.display = "none";
     y.style.display = "block";
   }
}

//Alert notifcations --------------------------------------------

$('#save-icon').click(function(){
    $('.alert').css("display", "block").addClass("show");
    $('.alert').removeClass("hide");
    $('.alert').addClass("showAlert");
    setTimeout(function(){
// $('.alert').addClass("hide");
    $('.alert').fadeOut();
  },2000);
  });
  $('.close-btn').click(function(){
      $('.alert').fadeOut();
    // $('.alert').removeClass("show").css("display", "none");
    // $('.alert').addClass("hide");
  });

// Entry Page ---------------------------------------------------


var Saved = [];

function mySave() {
  var myContent = document.getElementById("myTextarea").value;
  localStorage.setItem("myContent", myContent);

  Saved.push(myContent);
  textSaved(myContent);

}

function myClear() {
  document.getElementById("myForm").reset();
}


function loadText() {
  var myContent = localStorage.getItem("myContent");
  document.getElementById("myTextarea").value = Saved[0];
}

function loadText2() {
  var myContent = localStorage.getItem("myContent");
  document.getElementById("myTextarea").value = Saved[1];
}

function loadText3() {
  var myContent = localStorage.getItem("myContent");
  document.getElementById("myTextarea").value = Saved[2];
}



function textSaved(savedContent) {

  if (Saved.length === 1) {
        $("#text1").text("Entry #1 has been saved.");
  }


  if (Saved.length === 2) {
    $("#text2").text("Entry #2 has been saved.");
  }


  if (Saved.length === 3) {
      $("#text3").text("Entry #3 has been saved.");
  }

}


//info page 


$("#info-icon").click(function() {
  $("#testimonials-carousel").css("display", "block");
});

function openModal() {
  document.getElementById("myblackscreen").style.display = "block";
}

function closeModal() {
  document.getElementById("myblackscreen").style.display = "none";
}

// searching articles

const textareaEl = document.getElementById("myTextarea");
const saveBtn = document.getElementById("save-icon");

const TERMS = ["symptoms of covid", "covid symptoms", "coughing", "covid-19 cases", "covid cases", "covid positive", 
"confirmed case", "corona virus", "quarantine", "social distancing", "self-isolate", "covid", "covid negative", "masks",
"tested", "tracing", "spread", "pandemic", "contact tracing", "drive through testing", "isolation", "face mask", 
"close contact"];
const articlesList = document.getElementById("articles");

const searchArticles = async (term) => {
  term = term.replace(" ", "%20");
  
  const url = `https://www.reddit.com/r/news/search.json?restrict_sr=true&sort=top&t=all&limit=3&q=
`+term;
  
  
  const data = await (await fetch(url)).json();
  
  
  console.log(data.data.children[0].data.title);
  var li = document.createElement("li");
  var entry = data.data.children[0].data.title;
  var titleLink = "https://www.reddit.com/r/news/search?restrict_sr=true&sort=top&t=all&limit=3&q="+term
  var link = document.createElement("a");
  link.setAttribute("href", titleLink);
  link.innerHTML = entry;
  li.appendChild(link);
  
  articlesList.appendChild(li);
  
  
  data.articles.forEach((article) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = article.url;
    a.target = "_blank";
    a.textContent = article.title;
    li.appendChild(a);
    articlesList.appendChild(li);
  });
};

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

saveBtn.onclick = () => {
  const entry = textareaEl.value;
  TERMS.forEach((term) => {
    if (entry.includes(term)) {
      searchArticles(term);
    }
  });
  togglePopup()
};


