type APIResponse = { data: { id: string } } | { error: string };

const handleResponse = (response: APIResponse) => {
  if ("data" in response) {
    console.log(response.data.id);
  } else {
    console.log(response.error);
  }
};

const successResponse: APIResponse = {
  data: {
    id: "123",
  },
};

const errorResponse = {
  error: "Something went wrong",
};

handleResponse(successResponse);
handleResponse(errorResponse);
