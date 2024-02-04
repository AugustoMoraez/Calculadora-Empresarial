export const checkModalToken = () => {
    let dataJSON:string | null = localStorage.getItem("modalToken");
    
    let data = dataJSON !== null ? JSON.parse(dataJSON) : null;
    
    return data;
   
}
export default checkModalToken;