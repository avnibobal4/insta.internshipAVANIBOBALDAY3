document.getElementById("contactForm").addEventListener("submit", function(event))
    {
        let name =document,getelementById("name").value;
        let email =document,getelementById("email").value;
        let message =document,getelementById("message").value;

        let errorMessage=document.getelementById("errorMessage");
        if(name===""||email===""||message==="")
            event.preventDefault();
            errorMessage.textContent="Please fill in all fields.";
        else
            errorMessage.textContent="";
        };