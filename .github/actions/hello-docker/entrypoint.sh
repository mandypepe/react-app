#!/bin/sh -e
echo "::debug::debug mesage"
echo "::warning::warning mesage"
echo "::error::error mesage"
echo "::add-mask::$1"
echo "hello  $1"
time=$(date)
echo "::set-output name=time::$time"
echo "::group::Some expendable logs"
echo "algo"
echo "algo"
echo "algo"
echo "::endgroup::"
echo "::set-env name= hello:: hello::"


