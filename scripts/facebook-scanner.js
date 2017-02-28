
/* 
    This function surrounds the comments sections with a red border.
    It's useful because it loads jQuery (using manifest.json) and it
    points us in the right direction to parse the number of replies.
*/
var makePostsRed = function() {
  var commentsSections = $  ('.commentable_item')
  
  for (var i=0; i < commentsSections.length; i++) {
    var section = commentsSections[i]
    section.style.border = '5px solid red';
  }
}

makePostsRed()
