function searchData() {
    var input, filter, container, databases, title, description, i;

    filter = document.getElementById("myInput").value;
    filter = filter.toUpperCase();

    container = document.getElementById("dbsTable");
    databases = container.getElementsByClassName("cart");

    for (i = 0; i < databases.length; i++) {
        title = databases[i].getElementsByTagName("h2")[0].innerHTML.toUpperCase();
        description = databases[i].getElementsByTagName("p")[0].innerHTML.toUpperCase();
        
        if (title || description) {
            if (title.indexOf(filter) > -1 || description.indexOf(filter) > -1) {
                databases[i].style.display = "";
            } else {
                databases[i].style.display = "none";
            }
        }
    }
}

$(function() {
    $("#button-az").click(function() {

    function asc_sort(a, b) {
        $('#button-az i').removeClass("fa fa-sort-alpha-asc");
        $('#button-az i').addClass("fa fa-sort-alpha-desc");
      return ($(b).text()) < ($(a).text()) ? 1 : -1;
    }

    function dec_sort(a, b) {
        $('#button-az i').removeClass("fa fa-sort-alpha-desc");
        $('#button-az i').addClass("fa fa-sort-alpha-asc");
      return ($(b).text()) > ($(a).text()) ? 1 : -1;
    }

    $("#dbsTable").each(function() {
      var sort, el = $(this)
      sort = el.find('div').sort(el.hasClass('asc') ? dec_sort : asc_sort)
      el.toggleClass('asc')

      el.html(sort)
    })
  })

  $("#button-sort").click(function() {

    function asc_sort(a, b) {
      $('#button-sort i').removeClass("fa fa-sort-amount-asc");
      $('#button-sort i').addClass("fa fa-sort-amount-desc");
      return ($(b.id).html()) < ($(a.id).html()) ? 1 : -1;
    }

    function dec_sort(a, b) {
      $('#button-sort i').removeClass("fa fa-sort-amount-desc");
      $('#button-sort i').addClass("fa fa-sort-amount-asc");
      return ($(b.id).html()) > ($(a.id).html()) ? 1 : -1;
    }

    $("#dbsTable").each(function() {
      var sort, el = $(this)
      sort = el.find('div').sort(el.hasClass('asc') ? dec_sort : asc_sort)
      el.toggleClass('asc')

      el.html(sort)
    })
  })
});