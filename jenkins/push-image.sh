#!/bin/bash

IMAGE_TAG=$1

docker build -t bluehotdog/versions_tracker_client:$IMAGE_TAG .

docker push bluehotdog/versions_tracker_client:$IMAGE_TAG