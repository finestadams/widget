#!/bin/bash

set -e

"$(npm bin)/tsc" --noEmit --watch & yarn start:dev