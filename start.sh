#!/bin/bash
echo Starting servers at: $PWD
grunt connect:dev &
grunt connect:prod &
grunt connect:tests &
grunt connect:coverage &
grunt connect:docs &
grunt connect:analysis &

