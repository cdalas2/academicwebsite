#!/bin/bash
set -e

# Download and install Go if not present
if ! command -v go &> /dev/null; then
    echo "Installing Go..."
    curl -L https://go.dev/dl/go1.21.0.linux-amd64.tar.gz | tar -xz -C /tmp
    export PATH="/tmp/go/bin:$PATH"
    export GOPATH="/tmp/go-packages"
fi

# Download Hugo modules (don't upgrade)
echo "Downloading Hugo modules..."
hugo mod download

# Build site with caching
echo "Building site..."
hugo --gc --minify --cacheDir /tmp/.hugocache
