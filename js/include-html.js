function includeHtml() {
    var z, i, elmnt, file, xhttp;

    /* loop through collection of all HTML elements */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];

        /* search for elements with certain atrribute */
        file = elmnt.getAttribute("includeHtml");
        if (file) {

            /* make HTTP request using attribute value as file name */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    /* if (this.status == 404) {elmnt.innerHTML = "Page not found.";} */

                    /* remove attribute, and call this function once more */
                    elmnt.removeAttribute("includeHtml");
                    includeHtml();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();

            /* exit function */
            return;
        }
    }
}