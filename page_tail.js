    <script type="text/javascript">
    $(function() {
    var converter = new Showdown.converter();
    $("#cnblogs_post_body").html(converter.makeHtml($.trim($("#cnblogs_post_body").html())));
    $("#cnblogs_post_body p").each(function() {
    var $$ = $(this);
    $$.html(converter.makeHtml($.trim($$.text())));
    });
    $("#cnblogs_post_body pre").each(function() {
      var language = $(this).attr("class");
       if(language != null && language.toLowerCase().indexOf("brush") < 0) {
      $(this).removeClass(language).addClass("brush:" + language + ";gutter:true;");
    }
    });
    if($.browser.msie && $.browser.version < 9.0 && $("#cnblogs_post_body").length > 0) {
    $("#cnblogs_post_body").prepend($("#myIEWarning").show());
    } else {
    $("#myIEWarning").hide();
    }
    });
    </script>
