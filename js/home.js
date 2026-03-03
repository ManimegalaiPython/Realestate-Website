document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let searchValue = document.getElementById("searchInput").value.trim();

    if(searchValue !== "") {
        window.location.href = "properties.html?search=" + encodeURIComponent(searchValue);
    }
});