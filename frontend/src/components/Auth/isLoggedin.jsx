const isLoggedin = () => {
    const token = localStorage.getItem('jwt');
    return !!token; 
  }
  export default isLoggedin;