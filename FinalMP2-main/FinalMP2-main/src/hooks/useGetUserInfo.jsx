export const useGetUserInfo = () => {
   
    const userData = JSON.parse(localStorage.getItem("auth")) || {};
    
    const { name, profilePhoto, userID, email, isAuth } = userData;
  
    return { name, profilePhoto, userID, email, isAuth };
  };
  