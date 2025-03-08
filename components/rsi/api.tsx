export async function fetchData() {
    const api = "https://rsi-backend-us1f.onrender.com/api/data";
    const res = await fetch(api);
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const res_json = await res.json();
    return res_json;  
  }
  