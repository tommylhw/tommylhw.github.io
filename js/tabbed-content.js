window.onload = (event) => {
  OpenSection('About');
};

function OpenSection(topicName) {
  var i;
  var topicID = document.getElementsByClassName('topic-section');

  for (i = 0; i < topicID.length; i++) {
    topicID[i].style.display = "none";
  }

  document.getElementById(topicName).style.display = "block";

}