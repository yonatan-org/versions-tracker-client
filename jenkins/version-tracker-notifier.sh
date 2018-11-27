COMMITER=$(git log -1 --pretty='%ae')
MESSAGE=$(git log -1 --pretty='%s')

curl -d '{
    "projectName" : "'"$2"'",
    "environment" : "production",
    "status" :  "'"$1"'",
    "commits" : [{
        "name" :  "'"${COMMITER}"'",
        "commitMessage" : "'"${MESSAGE}"'"
    }]
}' -H "Content-Type: application/json" -X POST http://tracker-api.getjaco.com/versions
