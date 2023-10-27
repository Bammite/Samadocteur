const details = document.getElementById("details");
const modal = document.getElementById("modal");

details.addEventListener
(
    "click",
    function()
    {
        modal.style.display = "block";
    }
);

modal.addEventListener
(
    "click",
    function(e)
    {
        if(e.target === modal)
        {
            modal.style.display = "none";
        }
    }
);