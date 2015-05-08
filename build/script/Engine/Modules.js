ENGINE.Modules = {

  call: function(context, method, args) {

    for (var i = 0; i < context.modules.length; i++) {
      var module = context.modules[i];
      if (module.proxy) module.proxy(method, args);
      if (module[method]) module[method](args);
    }

  }


};