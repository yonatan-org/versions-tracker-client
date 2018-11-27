#!/bin/bash
IMAGE_DATE_TAG=$1

docker build -t bluehotdog/versions_tracker_client:$IMAGE_DATE_TAG .

docker push  bluehotdog/versions_tracker_client:$IMAGE_DATE_TAG