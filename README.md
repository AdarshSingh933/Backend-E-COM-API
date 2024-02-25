## API Documentation


## List All Transactions

Endpoint: /transactions

Method: GET

Description: Retrieves all transactions with optional search and pagination support.

Parameters:

page (optional): Page number for pagination (default: 1)

perPage (optional): Number of transactions per page (default: 10)

search (optional): Search text to match against product title, description, or price

Example:

Request: GET /transactions?page=1&perPage=10&search=apple

Response: List of transactions matching the search criteria


## Statistics

Endpoint: /statistics

Method: GET

Description: Retrieves statistics for the selected month.

Parameters:

month: Selected month (e.g., January, February)

Example:

Request: GET /statistics?month=January

Response: Total sale amount, number of sold items, and number of not sold items for January


## Bar Chart

Endpoint: /chart

Method: GET

Description: Retrieves data for a bar chart showing the number of items in price ranges for the selected month.

Parameters:

month: Selected month (e.g., January, February)

Example:

Request: GET /chart/bar?month=January

Response: Data for the bar chart showing the number of items in price ranges


## Pie Chart

Endpoint: /chart/pie-chart

Method: GET

Description: Retrieves data for a pie chart showing unique categories and the number of items in each category for the selected month.

Parameters:

month: Selected month (e.g., January, February)

Example:

Request: GET /chart/pie?month=January

Response: Data for the pie chart showing unique categories and the number of items in each category


## Combined API

Endpoint: /combineApi

Method: GET

Description: Fetches data from all three APIs (transactions, statistics, and charts), combines the responses, and sends a final response with the combined JSON.

Parameters: None

Example:

Request: GET /combineApi

Response: Combined data from transactions, statistics, and charts APIs


## How to Use

1.Install Postman or a similar tool for API testing.

2.Open Postman and import the provided collection.

3.Send requests to the endpoints mentioned above with the appropriate parameters to retrieve the desired data.
