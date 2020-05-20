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

This extension adds on an existing `mode` the Material documentation remains the same.


## Extra API for rail variant

On top of all the standard Drawer API from google https://material.angular.io/components/sidenav/api. I've added 4 extra API so you have more control over the animation and size.


| Input          |   description                           | default                |
|----------------|:---------------------------------------:|:----------------------:|
| openAnimation  |  Angular Animation settings for opening | sidebarOpen(maxWidth)  |
| closeAnimation |  Angular Animation settings for closing | sidebarClose(minWidth) |
| closeWidth     |  min width (small view)                 | "60px"                 |
| expandedWidth  |  max width for the expanded view        | "200px"                |

extra note the default anmination time is set to 100ms


*Notes:*
Angular material open state

`Close === mini` & `Opened === expanded`

## Useful links

Blog post:
https://medium.com/@LostDeveloper/angular-material-navigation-drawer-adding-support-mode-rail-mini-variant-behaviour-8f7b107700b3

Angular material mini variant github issue:
https://github.com/angular/components/issues/1728
