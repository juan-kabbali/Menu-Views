function search_db() {
    var input, filter, container, databases, title, description, i;

    filter = document.getElementById("searchInput").value;
    filter = filter.toUpperCase();

    container = document.getElementById("dbsTable");
    databases = container.getElementsByClassName("cart");

    for (i = 0; i < databases.length; i++) {
        title = databases[i].getElementsByTagName("h2")[0].innerHTML.toUpperCase();
        description = databases[i].getElementsByClassName("info")[0].innerHTML.toUpperCase();
        
        if (title || description) {
            if (title.indexOf(filter) > -1 || description.indexOf(filter) > -1) {
                databases[i].style.display = "";
            } else {
                databases[i].style.display = "none";
            }
        }
    }
}