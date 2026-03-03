// Search filter
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const typeFilter = document.getElementById("typeFilter");

searchInput.addEventListener("keyup", filterCards);
typeFilter.addEventListener("change", filterCards);

function filterCards(){
    const searchValue = searchInput.value.toLowerCase();
    const selectedType = typeFilter.value;

    cards.forEach(card=>{
        const title = card.querySelector("h3").innerText.toLowerCase();
        const type = card.getAttribute("data-type");

        const matchSearch = title.includes(searchValue);
        const matchType = selectedType === "all" || selectedType === type;

        if(matchSearch && matchType){
            card.style.display="block";
        } else {
            card.style.display="none";
        }
    });
}

// Pagination click effect
document.querySelectorAll(".page-btn").forEach(btn=>{
    btn.addEventListener("click", function(){
        document.querySelectorAll(".page-btn").forEach(b=>b.classList.remove("active"));
        this.classList.add("active");
    });
});

// Card click redirect example
cards.forEach(card=>{
    card.addEventListener("click", ()=>{
        window.location.href="propertydetails.html";
    });
});