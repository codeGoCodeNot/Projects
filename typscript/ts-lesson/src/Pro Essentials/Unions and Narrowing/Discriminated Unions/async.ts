type User = { id: number; title: string };
type ApiResponse = [false, string] | [true, User[]];

const fetchData = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log("HTTP status:", response.status, response.statusText);
    if (!response.ok) {
      let text: string;
      text = await response.text();
      text = "<unable to read response body>";
      console.error("Non-Ok response body:", text);
      return [false, "An error occured!"];
    }

    const data = (await response.json()) as User[];
    const obj = data.find((data) => (data.id === 1 ? data.title : "N/A"));
    const string = obj?.title;
    console.log(string);

    return [true, data];
  } catch (error) {
    return [false, "An error occured!"];
  }
};

fetchData();
