> ionic start pms tabs --type=angular


`node` `10.15.3`
`npm` `6.10.2`
`ionic` `5.2.1`


### cordova

```
ionic cordova plugin add cordova-sqlite-storage
```
```
ionic cordova platform add browser

ionic cordova run browser
```

### ios

```
> ionic cordova platform add ios

// if no ios device, run this

cd platforms/ios/cordova
npm install ios-sim@latest

> ionic cordova run ios -l -c --target="iPhone-XR"


> ionic cordova build ios --product --release

```

### android

```
> ionic cordova platform add android

`real device` and `simulator` device, simulator device should choose `virtual IP`

> ionic cordova run android -l -c

> ionic cordova build android --product --release

> jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA1 -keystore ningxiapms.keystore -signedjar ./release/android/pms-release-signed.apk ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ningxiapms.keystore
```
