var text = document.getElementById("para");
        var button = document.getElementById("btn");
        var originalText = text.innerText;
        var length = false;

        if (length == false) {
            text.innerText = originalText.slice(0, 100) + '...';
            length = true;
        }

        function change() {
            if (length == true) {
                button.innerText = "Read less"
                text.innerText = originalText.slice(0);
                length=false
            }
            else if (length == false){
                button.innerText = "Read More"
                text.innerText = originalText.slice(0,100) + '...';
                length=true
            }
        }