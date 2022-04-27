export async function fetchJson(method, url, target, parent) {
    console.log(parent.state);
  let result = await returnResult(method,url)
  parent.setState({result:result})
  console.log("Res: " + result + "  "+parent.state);
  return result;
}
async function returnResult(method, url){
    let result;
    const options = {
        method: method,
      };
      try{
      let response = await fetch(
        url + "&key=07eaf5a4bce8434b85cf5c1f9f03a302",
        options
      );
      result = await response.json();
      }catch (err){
          console.log(err);
      }
      return await result;
}