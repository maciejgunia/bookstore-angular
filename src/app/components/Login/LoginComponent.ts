import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from 'src/app/domain/User';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'login',
  templateUrl: './LoginComponent.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public activeUserId: string | undefined;

  constructor(public service: UserService) {}

  public setActiveUser(event: any) {
    this.service.activeUserId$.next(event?.target?.value);
  }

  public identify(_: number, item: User) {
    return item.id;
  }
}
