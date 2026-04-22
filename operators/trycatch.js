// JavaScript Try...Catch Statement example
try {
    // Code that might throw an error
    let result = JSON.parse('invalid json');
    console.log(result);
} catch (error) {
    // Handle the error
    console.error('Error caught:', error.message);
    console.error('Error type:', error.name);
}finally {
    console.log('This block will always execute, regardless of an error.');
}