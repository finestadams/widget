#!/bin/bash

mv .env .env.bk

mv .env.production .env

yarn build:package

mv .env .env.production

mv .env.bk .env
