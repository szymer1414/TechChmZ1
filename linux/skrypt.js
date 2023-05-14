#!/bin/bash


d=$(date +"%Y-%m-%d")

author="Szymon Prygiel"
port=8080

echo "Server started at $d by $author on port $port"

exec "$@"

app.listen(8080, () => {
    console.log('Listening on port 8080');
});