import { forwardRef, Inject, Directive, ElementRef, OnInit, OnDestroy, Host, Self, Optional, Renderer2, Input, AfterViewInit } from '@angular/core';
import { AnimationMetadata, AnimationBuilder } from '@angular/animations';

import { MatSidenav, MatDrawer, MatSidenavContainer, MatDrawerContainer } from '@angular/material/sidenav';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { miniConfig } from './default.config';
import { sidebarAnimationCloseGroup, sidebarAnimationOpenGroup  } from './animations.settings';
import {Directionality} from '@angular/cdk/bidi';
import { inject } from '@angular/core/testing';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'mat-sidenav[mode="rail"], mat-drawer[mode="rail"]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.mat-drawer-side]': 'true',
  }
})
export class MatDrawerRailDirective implements OnInit, OnDestroy, AfterViewInit {

  public onDestory: Subject<void> = new Subject();

  private drawer: MatSidenav | MatDrawer;
  private container: MatSidenavContainer | MatDrawerContainer;

  @Input()
  public openAnimation: AnimationMetadata | AnimationMetadata[];

  @Input()
  public closeAnimation: AnimationMetadata | AnimationMetadata[];

  @Input()
  public closeWidth: string = miniConfig.defaultMinWidth;

  @Input()
  public expandedWidth: string = miniConfig.defaultMaxWidth;

  constructor(
    private builder: AnimationBuilder,
    private el: ElementRef<HTMLElement>,
    private renderer2: Renderer2,
    @Host() @Self() @Optional() sidenav: MatSidenav,
    @Host() @Self() @Optional() drawer: MatDrawer,
    @Inject(forwardRef(() => MatSidenavContainer)) @Optional() matSideNavContainer: MatSidenavContainer,
    @Inject(forwardRef(() => MatDrawerContainer)) @Optional() matDrawerContainer: MatDrawerContainer,
    @Optional() private _dir: Directionality,
  ) {
    this.container = matSideNavContainer || matDrawerContainer;
    this.drawer = sidenav || drawer;
    this.container.hasBackdrop = false;
    this.drawer.autoFocus = false;
  }

  public ngOnInit(): void {
    this.closeAnimation = this.closeAnimation || sidebarAnimationCloseGroup(miniConfig.defaultDuration, this.closeWidth);
    this.openAnimation = this.openAnimation || sidebarAnimationOpenGroup(miniConfig.defaultDuration, this.expandedWidth);
    this.renderer2.setStyle(this.el.nativeElement.querySelector('.mat-drawer-inner-container'), 'overflow', 'hidden');
    this.drawer.closedStart.pipe(takeUntil(this.onDestory)).subscribe(() => {
       const containerContent = this.el.nativeElement.parentElement.querySelector('.mat-drawer-content');
       if (this.drawer.position != 'end' || this._dir && this._dir.value != 'rtl') {
          this.renderer2.setStyle(containerContent, 'marginLeft', this.closeWidth);
        } else {
          this.renderer2.setStyle(containerContent, 'marginRight', this.closeWidth);
        }
       const factory = this.builder.build(this.closeAnimation);
       const player = factory.create(this.el.nativeElement);
       player.play();
    });

    this.drawer._closedStream.pipe(takeUntil(this.onDestory)).subscribe(() => {
      this.renderer2.setStyle(this.el.nativeElement, 'visibility', 'visible');
    });

    this.drawer.openedStart.pipe(takeUntil(this.onDestory)).subscribe(() => {
      const containerContent = this.el.nativeElement.parentElement.querySelector('.mat-drawer-content');
      if (this.drawer.position != 'end' || this._dir && this._dir.value != 'rtl') {
          this.renderer2.setStyle(containerContent, 'marginLeft', this.expandedWidth);
        } else {
          this.renderer2.setStyle(containerContent, 'marginRight', this.expandedWidth);
        }
      const factory = this.builder.build(this.openAnimation);
      const player = factory.create(this.el.nativeElement);
      player.play();
    });


  }

  ngAfterViewInit() {
    if (this.drawer.opened) {
      const containerContent = this.el.nativeElement.parentElement.querySelector('.mat-drawer-content');
      if (this.drawer.position != 'end' || this._dir && this._dir.value != 'rtl') {
            this.renderer2.setStyle(containerContent, 'marginLeft',  this.closeWidth);
          } else {
            this.renderer2.setStyle(containerContent, 'marginRight',  this.closeWidth);
          }
    }

  }

  public ngOnDestroy(): void {
    this.onDestory.next();
    this.onDestory.complete();
  }
}
