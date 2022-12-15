#!/bin/bash
# sends GET req to URL and display response body
curl -sfL "$1" -X GET -D ./headers -o ./body; if grep -q "200 OK" ./headers; then cat ./body; fi
