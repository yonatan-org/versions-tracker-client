#!/bin/bash

python /usr/local/bin/ecs deploy prod-automation-cluster tracker-client --access-key-id ${AWS_ACCESS_KEY_ID}  --secret-access-key ${AWS_SECRET_ACCESS_KEY} --region $REGION --timeout 900 --rollback

if [ $? -ne 0 ]; then 
    echo "ECS deployment failed"
    curl -X POST -H 'Content-type: application/json' --data '{"text":"ECS deployment failed "}' https://hooks.slack.com/services/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
fi