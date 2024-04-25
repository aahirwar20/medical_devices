const sendData = (data)=>{
    fetch('/your-api-endpoint', {
        method: 'POST',
        body: data,
      })
      .then(response => response.json())
      .then(data => {
        console.log('Upload response:', data);
        // Handle successful upload response (e.g., display message)
      })
      .catch(error => {
        console.error('Upload error:', error);
        // Handle upload error (e.g., display error message)
      });
}

export default sendData;
