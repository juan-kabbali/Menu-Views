function searchData() {
    var input, filter, contenido, panel, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    contenido = document.getElementById("tabs-container");
    panel = contenido.getElementsByTagName("div");
    for (i = 0; i < panel.length; i++) {
        title = panel[i].getElementsByTagName("h2")[0].textContent.toUpperCase();
        description = panel[i].getElementsByTagName("p")[0].textContent.toUpperCase();
        
        if (title || description) {
            if (title.indexOf(filter) > -1 || description.indexOf(filter) > -1) {
                panel[i].style.display = "";
            } else {
                panel[i].style.display = "none";
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

    $(".tab-pane").each(function() {
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

    $(".tab-pane").each(function() {
      var sort, el = $(this)
      sort = el.find('div').sort(el.hasClass('asc') ? dec_sort : asc_sort)
      el.toggleClass('asc')

      el.html(sort)
    })
  })
});