#!/bin/sh
# Rebuild assets for production including obfuscation.
NODE_ENV=production ./webpack.sh $1 $2 $3 $4 $5 $6 $7 $8 $9
