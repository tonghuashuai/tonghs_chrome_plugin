// Generated by CoffeeScript 1.11.0
(function() {
  var go;

  $(document).ready(function() {
    return setTimeout(go, 90000);
  });

  go = function() {
    if ($('#form1_link_add')) {
      return $.ajax({
        url: 'http://wiki.xrkmedia.com:9099/j/data',
        success: function(data) {
          var i, j, k, len, o, ref;
          console.log('start...');
          for (i = j = 0; j <= 10; i = ++j) {
            $('#form1_link_add').click();
          }
          ref = data.li;
          for (i = k = 0, len = ref.length; k < len; i = ++k) {
            o = ref[i];
            $("#form1_link" + (i + 1)).val(o.url);
          }
          $('#form1_email').val('test@126.com');
          console.log('填充完毕，准备提交');
          $('input[type=submit].js-submit').click();
          return console.log('提交');
        },
        error: function() {}
      });
    }
  };

}).call(this);
