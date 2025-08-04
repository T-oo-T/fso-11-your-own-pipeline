#!/bin/bash

echo "Build script"

# add the commands here
npm ci
npm run build

echo "Build script finished successfully!"