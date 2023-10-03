# ⚠️ DEPRECATION NOTICE ⚠️

**Package Name:** [angular-material-rail-drawer](https://npmjs.com/package/angular-material-rail-drawer)

---

### 🚫 Reasons for Discontinuation:

1. **Legacy Support Only:** This package is designed to work only with Material Legacy (pre-version 17).
2. **No Support for Angular V17:** There are little to no plans to support Angular V17. The new syntax of Angular V17 is not favored, and it's believed that the changes are detrimental to the framework.

---

### 📣 Personal Note:

I personally dislike the new syntax introduced in Angular V17. I believe the direction Angular is taking with this version is not in the best interest of the framework. As a result, I have decided not to continue supporting or maintaining this package.

---

### 📌 Recommendations:

- If you are using an older version of Angular (pre-version 17), you may continue using this package. However, be aware that no further updates or support will be provided.
- For projects using Angular V17 and above, it's recommended to look for alternative packages or solutions.

---

# Angular Material Rail Drawer Plugin

Angular Material Navigation drawer — Adding support mode = “Rail” (mini variant behaviour)

Since 2016, the Angular community has been shouting out of a mini variant for material design.

## How to install

NPM:
`npm i angular-material-rail-drawer`
Yarn:
`yarn add angular-material-rail-drawer`

## How to use

Read example for more information

module.ts
`import { DrawerRailModule } from 'angular-material-rail-drawer';`

component.html
`<mat-sidenav mode="rail" opened="true">`

If `"strictTemplates": true` is activated in _tsconfig.json_, overwriting mode is not possible. In this case you can use the following selector:

component.html
`<mat-sidenav rail-mode opened="true">`

This extension adds on an existing `mode` the Material documentation remains the same.

## Extra API for rail variant

On top of all the standard Drawer API from google https://material.angular.io/components/sidenav/api. I've added 4 extra API so you have more control over the animation and size.

| Input          |              description               |        default         |
| -------------- | :------------------------------------: | :--------------------: |
| openAnimation  | Angular Animation settings for opening | sidebarOpen(maxWidth)  |
| closeAnimation | Angular Animation settings for closing | sidebarClose(minWidth) |
| closeWidth     |         min width (small view)         |         "60px"         |
| expandedWidth  |    max width for the expanded view     |        "200px"         |

extra note the default animation time is set to 100ms

_Notes:_
Angular material open state

`Close === mini` & `Opened === expanded`

## Useful links

Blog post:
https://medium.com/@LostDeveloper/angular-material-navigation-drawer-adding-support-mode-rail-mini-variant-behaviour-8f7b107700b3

Angular material mini variant github issue:
https://github.com/angular/components/issues/1728
