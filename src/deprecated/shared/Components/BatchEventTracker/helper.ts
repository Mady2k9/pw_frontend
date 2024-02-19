const helper = {
  isUserloggedIn: () => {
    let userLoggedIn = false;
    if (typeof window !== 'undefined') {
      const userData: any = localStorage.getItem('user');
      const user = userData ? JSON.parse(userData) : null;
      const userDetail = window.sessionStorage.getItem('isAuthenticated');

      if (user && user?.id) {
        userLoggedIn = true;
      } else if (userDetail) {
        userLoggedIn = JSON.parse(userDetail);
      }
    }
    return userLoggedIn;
  },
};

export default helper;
