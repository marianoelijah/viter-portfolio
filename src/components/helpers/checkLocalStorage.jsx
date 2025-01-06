export const checkLocalStorage = () => {
    let jollibeetoken = null;
  
    try {
      portfoliotoken = JSON.parse(localStorage.getItem("portfoliotoken"));
    } catch (error) {
      portfoliotoken = null;
    }
  
    return portfoliotoken;
  };