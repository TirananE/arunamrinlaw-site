#!/bin/bash

# Create necessary directories
mkdir -p public/assets/css
mkdir -p public/assets/js
mkdir -p public/assets/images
mkdir -p public/assets/bootstrap

# Copy CSS files
cp example/assets/css/* public/assets/css/
cp example/assets/bootstrap/* public/assets/bootstrap/

# Copy JS files
cp example/assets/js/* public/assets/js/

# Copy images
cp -r example/assets/images/* public/assets/images/
