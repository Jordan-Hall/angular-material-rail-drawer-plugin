import {
  group,
  query,
  animateChild,
  animate,
  style,
  AnimationStyleMetadata,
  AnimationGroupMetadata,
} from '@angular/animations';
import { miniConfig } from './default.config';

export function sidebarClose(
  minWidth: string = miniConfig.defaultMinWidth
): AnimationStyleMetadata {
  return style({
    width: minWidth,
    visibility: 'visible',
    transform: 'none',
    overflow: 'hidden',
  });
}

export function sidebarOpen(
  maxWidth: string = miniConfig.defaultMaxWidth
): AnimationStyleMetadata {
  return style({
    width: maxWidth,
    visibility: 'visible',
  });
}

export function sidebarAnimationOpenGroup(
  animationDuration: string = miniConfig.defaultDuration,
  maxWidth: string = miniConfig.defaultMaxWidth
): AnimationGroupMetadata {
  return group([
    query('@iconAnimation', animateChild(), { optional: true }),
    query('@labelAnimation', animateChild(), { optional: true }),
    animate(`${animationDuration} ease-in-out`, sidebarOpen(maxWidth)),
  ]);
}

export function sidebarAnimationCloseGroup(
  animationDuration: string = miniConfig.defaultDuration,
  minWidth: string = miniConfig.defaultMinWidth
): AnimationGroupMetadata {
  return group([
    query('@iconAnimation', animateChild(), { optional: true }),
    query('@labelAnimation', animateChild(), { optional: true }),
    animate(`${animationDuration} ease-in-out`, sidebarClose(minWidth)),
  ]);
}
