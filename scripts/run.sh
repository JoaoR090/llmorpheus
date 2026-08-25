npm run build
LLMORPHEUS_LLM_API_ENDPOINT="http://127.0.0.1:8080/v1/chat/completions" \
LLMORPHEUS_LLM_AUTH_HEADERS='{"Content-Type": "application/json"}' \
npx -p node@20 node benchmark/createMutants.js \
--path 'clone_prs/tests-node-backend-tests-using-jest-typescript/src' \
--mutate * \
--model gemma-4-12b-qat \
--maxTokens 5000 \
--template 'templates/template-FlaskTest.hb'