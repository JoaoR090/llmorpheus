npm run build
LLMORPHEUS_LLM_API_ENDPOINT="http://127.0.0.1:1234/v1/chat/completions" \
LLMORPHEUS_LLM_AUTH_HEADERS='{"Content-Type": "application/json"}' \
npx -p node@20 node benchmark/createMutants.js \
--path 'samples' \
--mutate index.ts \
--model gemma-4-12b-qat \
--maxTokens 2000 \
--template 'templates/template-basic.hb'