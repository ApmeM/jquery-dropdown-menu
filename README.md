# jQuery menu plugin

## Introduction

jQuery menu plugin build a drop-down menu for regular ul/li tree-based structure.

As opposed to a regular drop-down menu if ul/li have 3 or more levels - they will be represented as groups

Also it contains a hack for Silverlight and ActiveX controls, that do not allow to overlap them by menu. To achive this 'iframe' was used.

## Demonstration

Demonstration abailable at http://apmem.github.com/jquery-dropdown-menu/

## browser support

Currently the following browsers were tested to work with this menu plugin:

* Firefox
* Opera
* Chrome
* IE 6-9

## Installation and usage

Script requred jquery.js to be included into the document before this script.

Also to have a quick start you can use `jquery.menu.css` styleshhet with some predefined styles.

Most of the script abilities based on these styles. The only script behavior is placing and expanding sub-menus and iframe.


After the script attached it can be used on document load:

    $(document).ready(function () {
        $("#MainMenu").menu();
    });

## Configuration options

Script contain a few configuration options:

* speed (default: 300) - jquery expand animate speed.
* delaytime (default 200) - time after mouseout before menu start collaping
* zIndex (default 0) - z-index style for iframe under menu

## Copyrights

Created by Artem Votincev (apmem.org)

Distributed under BSD license

