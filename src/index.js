    // Example Node.js Lambda function
    const fs = require('fs');

    exports.handler = async (event) => {
        let htmlContent;
        try {
            // Read the HTML file (assuming it's packaged with your Lambda)
            htmlContent = fs.readFileSync('index.html', 'utf8');
        } catch (error) {
            console.error('Error reading HTML file:', error);
            htmlContent = '<html><body><h1>Error loading page</h1></body></html>';
        }

        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/html',
            },
            body: htmlContent,
        };
        return response;
    };
