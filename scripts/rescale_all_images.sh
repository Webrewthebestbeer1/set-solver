#!/bin/bash
set -euxo pipefail

sips -Z $1 *.JPG
