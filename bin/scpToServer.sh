#!/usr/bin/env bash

id=`expr $1 - 1`

pubIp=`cat .devrc | grep serverip | grep -v '#' | awk -F '=' '{print $2}'`
pubPort=`cat .devrc | grep serverport | grep -v '#' | awk -F '=' '{print $2}'`
pubPassword=`cat .devrc | grep serverpassword | grep -v '#' | awk -F '=' '{print $2}'`
pubPath=`cat .devrc | grep serverpath | grep -v '#' | awk -F '=' '{print $2}'`

pid1=`ps ax | grep '$pubPath' | grep -v grep | awk '{print $1}'`

pid2=`ps ax | grep 'scpToServer.sh $id' | grep '$pubPath' | grep -v grep | awk '{print $1}'`

if [ -z '$pid1' ];then
  kill -9 $pid1
fi
if [ -z '$pid2' ];then
  kill -9 $pid2
fi
echo 'copy files to server'
from='static/*'
to='root@'$pubIp':/var/www/'$pubPath'/public/nsp'

sshpass -p $pubPassword rsync -avz -e "ssh -o StrictHostKeyChecking=no -p $pubPort" $from $to


echo 'done'
