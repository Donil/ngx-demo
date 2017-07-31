import { Observable } from 'rxjs/Observable';

export interface CanComponentDiactivate {
  canDiactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
