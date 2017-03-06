// Executed from the browser, renders the group content in a more comfortible way :)

var now = (new Date().getTime());
var html = $$("#mainContainer .userContentWrapper").map(
    function (post) {
        var timestamp = $$(".timestampContent", post)[0];
        var date = new Date(parseInt(timestamp.parentNode.getAttribute("data-utime")) * 1000);
        var comments = $$(".UFIComment", post);
        var link = timestamp.parentNode.parentNode.href;
        var text = $$(".userContent", post)[0].innerText;
        return {date: date, comments : comments.length, text : text, link : link }
    })
    .sort(function(p1,p2) {
        return p1.date.getTime() < p2.date.getTime() ?  -1 : 1
    })
    .reverse()
    .map(function(p) {
        return "<tr><td>" + (Math.round((now - p.date.getTime()) / 60000)) + "</td><td>" + p.comments +
            "</td><td><a href='" + p.link + "'>Link</a></td><td>" + p.text + "</td></tr>"
    });
document.write("<table dir='rtl'><tr><th>דקות</th><th>תגובות</th><th>קישור</th><th>תוכן</th></tr>" + html.join("") + "</table>")
