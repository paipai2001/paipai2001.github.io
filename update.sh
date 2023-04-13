#!/bin/bash
TIME = `date "+%Y-%m-%d %H:%M:%S"`
git add *
git commit -m "xpl提交于$TIME" *
git push --force ori main
