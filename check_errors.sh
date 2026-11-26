#!/bin/bash
echo "=== Testing Server ==="
cd "$(dirname "$0")/server"
node -c index.js 2>&1
echo "Server syntax check exit code: $?"

echo ""
echo "=== Testing Client Build ==="
cd "$(dirname "$0")/client"
npx vite build 2>&1
echo "Client build exit code: $?"
