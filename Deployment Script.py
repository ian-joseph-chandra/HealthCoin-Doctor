import os
import subprocess
import shutil

print('Running "ng build --prod"...')
subprocess.call("ng build --prod", shell=True)

print("Create 404.html...")
shutil.copy("dist/HealthCoin-Doctor/index.html", "dist/HealthCoin-Doctor/404.html")

print("Deploying to Firebase...")
subprocess.call("firebase deploy", shell=True)

x = input()