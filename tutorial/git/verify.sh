#!/bin/bash

gpg -K --keyid-format SHORT | grep $(git config --global user.signingkey)