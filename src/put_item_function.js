import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Items')

def lambda_handler(event, context):
    response = {
        'statusCode': 0,
        'body': ""
    }

    try:
        body = json.loads(event['body'])
        id = body['id']
        price = body['price']

        item = {
            'id': id,
            'price': price
        }

        table.put_item(Item=item)

        response['statusCode'] = 200
        response['body'] = json.dumps('Item inserted successfully!')

    except Exception as e:
        response['statusCode'] = 500
        response['body'] = json.dumps(str(e))

    return response
"""Note: This code snippet is a Python implementation of a Lambda function that interacts with an AWS DynamoDB table. It receives an event, extracts the id and price values from the request body, and inserts a new item into the Items table using the Boto3 library. The response includes the status code and a response body indicating the success or error message."""
