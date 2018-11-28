#!/bin/bash

BUILD_NUMBER=$1

docker build -t bluehotdog/versions_tracker_client:$BUILD_NUMBER .

docker push bluehotdog/versions_tracker_client:$BUILD_NUMBER