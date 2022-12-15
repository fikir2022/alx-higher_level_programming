!/bin/bash
#curl sends POST req to URL, display response body
curl -s -X POST -d "email=testo@gmail.com&subject=I will always be here for PLD" "$1
