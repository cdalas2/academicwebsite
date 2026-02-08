#!/bin/bash
set -e

# Download and install Go if not present
if ! command -v go &> /dev/null; then
    echo "Installing Go..."
    curl -L https://go.dev/dl/go1.21.0.linux-amd64.tar.gz | tar -xz -C /tmp
    export PATH="/tmp/go/bin:$PATH"
    export GOPATH="/tmp/go-packages"
fi

# Download Hugo modules
echo "Downloading Hugo modules..."
hugo mod get

# Build site
echo "Building site..."
hugo --gc --minify
