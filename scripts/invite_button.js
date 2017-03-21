console.log(55);
$('abbr.timestamp').each(function(){
    console.log(this);
    var href = this.offsetParent.href;
    var parent = this.closest('[role="article"]');
    var $share = $(parent.querySelector('.share_action_link')).parent();
    var $invite = $('<span>').html('Invite Dietitian').click(function(){
        console.log('יאללה תתקשר לדיאטנית');
    });
    $share.after($invite);
});
