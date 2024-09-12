// fetch("string representing a URL to a data source")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     // Use the data from the response to do DOM manipulation
//   });

/*
  Here we are calling `fetch()` and passing a URL to a data source as the
  argument. The function call returns a Promise object that represents what the data
  source sent back. It does *not* return the actual content. (More about this
  later.)
*/
fetch("string representing a URL to a data source")
  /*
    Next, we call the `then()` method on the Promise object returned by calling
    `fetch()`. `then()` takes one argument: a callback function. 
    (More on Promises later!)

    Inside the callback function, we do whatever processing we need on the
    object, in this case, converting it from JSON using the built-in `json()`
    method. (Another commonly-used method is `text()`, which will convert the
    response into plain text.) The `json()` method returns a Promise, which we
    return from our callback function.

    Note that we *have to return* the content that we've gotten out of the
    response and converted from JSON in order to use the data in the next then()
    method call.

    This first callback function is usually only one line: returning the 
    content from the response after converting it into the format we need.
  */
//   .then(function (response) {
//     return response.json();
//   })
  /*
    This time, the `then()` method is receiving the object that we returned from the
    first call to `then()` (our parsed JSON object). We capture the object in the
    parameter `data` and pass it into a second callback function, where we will
    write code to do DOM manipulation using the data returned from the server
  */
//   .then(function (data) {
//     // Use the actual data to do DOM manipulation
//   });

// Ex.1 - Open these hyperlinks and run this code in the chrome window

fetch("http://api.open-notify.org/astros.json")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => console.log(json));

// The .json method renders the response as a plain javascript object

// GET, POST, PATCH, DELETE
// This function demonstrates making a GET request
async function fetchData() {
    try {
        // Send a GET request to the specified URL
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'  // The HTTP method to be used for the request is GET
        });

        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            // Throw an error if the response was not OK
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the response body as JSON
        const data = await response.json();
        // Log the parsed JSON data to the console
        console.log('GET request data:', data);
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error('Error during GET request:', error);
    }
}

// This function demonstrates making a POST request
async function postData() {
    try {
        // Send a POST request to the specified URL
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',  // The HTTP method to be used for the request is POST
            headers: {
                'Content-Type': 'application/json'  // Indicate that the request body contains JSON data
            },
            // Convert the JavaScript object to a JSON string for the request body
            body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
        });

        // Check if the response status is OK
        if (!response.ok) {
            // Throw an error if the response was not OK
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the response body as JSON
        const data = await response.json();
        // Log the parsed JSON response data to the console
        console.log('POST request response:', data);
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error('Error during POST request:', error);
    }
}

// This function demonstrates making a PATCH request
async function patchData() {
    try {
        // Send a PATCH request to the specified URL
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',  // The HTTP method to be used for the request is PATCH
            headers: {
                'Content-Type': 'application/json'  // Indicate that the request body contains JSON data
            },
            // Convert the JavaScript object to a JSON string for the request body
            body: JSON.stringify({ title: 'Updated Title' })
        });

        // Check if the response status is OK
        if (!response.ok) {
            // Throw an error if the response was not OK
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the response body as JSON
        const data = await response.json();
        // Log the parsed JSON response data to the console
        console.log('PATCH request response:', data);
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error('Error during PATCH request:', error);
    }
}

// This function demonstrates making a DELETE request
async function deleteData() {
    try {
        // Send a DELETE request to the specified URL
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'  // The HTTP method to be used for the request is DELETE
        });

        // Check if the response status is OK
        if (!response.ok) {
            // Throw an error if the response was not OK
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Log a success message to the console indicating that the resource was deleted
        console.log('DELETE request successful');
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error('Error during DELETE request:', error);
    }
}

// Call each function to demonstrate their usage
fetchData();   // Make a GET request
postData();    // Make a POST request
patchData();   // Make a PATCH request
deleteData();  // Make a DELETE request
