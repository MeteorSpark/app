# meteorspark:app

Exposes to the global namespace\'s `APP`, an event emitter based object for project organization

**Benefits of using meteorspark:app**

* Standardize the object structure in Meteor apps.
* A clean way to share objects among your project files in Coffee based
  projects (instead of using `share.` or @, the global name space).
* Keep the global namespace clean.
* Provides global modular communication layer based on node.js's Event Emitter.

## Structure

```javascript
APP = {
  helpers: {},
  collections: {},
  modules: {
    main: {}
  }
}
```

## Credits

Developed by <a href="http://www.meteorspark.com"><img src="http://www.meteorspark.com/logo/logo-github.png" title="MeteorSpark" alt="MeteorSpark"></a> [Professional Meteor Services](http://www.meteorspark.com).

## License

MIT

## Author

[Daniel Chcouri](http://theosp.github.io/)
