(function(){
    var myDiv = document.getElementById("myDiv"),

      show = function(){
        myDiv.style.display = "block";
        setTimeout(hide, 3000); // 3 seconds
      },

      hide = function(){
        myDiv.style.display = "none";
      };

    show();
  })();

