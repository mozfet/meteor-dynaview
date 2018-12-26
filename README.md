# Meteor DynaView
Single page application web application behaviour for Meteor with dynamic rendered views and modals. Designed to work with MaterializeCSS.

## Install
```
$ meteor add mozfet:dynaview
```

## Usage
Inside a top level MaterialzeCSS container:
```html
{{> DynaView}}
```

elsewhere, where dvData is a object returned from a template helper
```html
{{#DynaViewLauncher dvTemplate="t1" dvData=d1}}
  <a href="#!" class="js-dynaview-launcher">DynaView1</a>
{{/DynaViewLauncher}}
```
