export class AuthService {
  private isAuth = false;

  login () {
    this.isAuth = true;
  }

  logout () {
    this.isAuth = false;
    window.localStorage.clear();
  }

  isLoggedIn () {
    return this.isAuth;
  }
}
