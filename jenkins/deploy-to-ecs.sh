#!/bin/bash

IMAGE_TAG=$1

python /usr/local/bin/ecs deploy prod-automation-cluster tracker-client --tag $IMAGE_TAG --access-key-id ${AWS_ACCESS_KEY_ID}  --secret-access-key ${AWS_SECRET_ACCESS_KEY} --region us-west-2 --timeout 900 --rollback
