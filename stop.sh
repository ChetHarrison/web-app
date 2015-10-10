#!/bin/bash
echo Stopping servers at: $PWD
kill -9 $(lsof -i:9001 -t | awk '{print $1}')
kill -9 $(lsof -i:9002 -t | awk '{print $1}')
kill -9 $(lsof -i:9003 -t | awk '{print $1}')
kill -9 $(lsof -i:9004 -t | awk '{print $1}')
kill -9 $(lsof -i:9005 -t | awk '{print $1}')

