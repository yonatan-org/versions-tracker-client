#!/bin/bash


python /usr/local/bin/ecs deploy prod-automation-cluster tracker-client --access-key-id ${AWS_ACCESS_KEY_ID}  --secret-access-key ${AWS_SECRET_ACCESS_KEY} --region us-west-2 --timeout 900 --rollback
