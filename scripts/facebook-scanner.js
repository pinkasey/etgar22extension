/* Update interval (ms) */
var updateInterval = 1000

/* 
    This function surrounds the comments sections with a red border.
    It's useful because it loads jQuery (using manifest.json) and it
    points us in the right direction to parse the number of replies.
*/
var makePostsRed = function(predicate) {
  var commentsSections = $('.commentable_item')
  
  for (var i=0; i < commentsSections.length; i++) {
    var section = commentsSections[i]
    if (predicate(section)) {
      section.style.border = '8px solid red';
    }
  }
}

/*
    This function returns true if the DOM element or its children
    contains the string "מדריך"
*/
var noMadrichPredicate = function(element) {
    var string = element.outerHTML.toLowerCase();
    var substrings = [
        '[מדריך]',
        '[ךירדמ]',
        '[מדריכה]',
        '[הכירדמ]',
        '[מדריך/ה]',
        '[מדריכ/ה]',
        '[mentor]'
    ]
    for (var i=0; i<substrings.length; i++){
      if (string.indexOf(substrings[i]) !== -1) {
        return false
      }
    }
    return true
}

setInterval(function() { makePostsRed(noMadrichPredicate) },
    updateInterval)
