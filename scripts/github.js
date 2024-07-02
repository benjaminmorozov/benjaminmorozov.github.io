jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for repositories...</span>");
    var target = this; 
      var list = $('<dl/>');
      target.empty().append(list);
     $.ajax({
        url: 'https://api.github.com/users/' + username + '/repos',
        crossDomain: true,
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': 'Bearer **TOKEN**',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).done(function(response) {
        $.each(response, function(i, item) {
            list.append('<dt><a href="'+ item.html_url +'">' + item.name + '</a></dt>');
            list.append('<dd>' + item.description + '</dd>');
         });
      });
      
};