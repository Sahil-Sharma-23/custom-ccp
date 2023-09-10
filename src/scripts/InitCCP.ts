import 'amazon-connect-streams';

export default function InitializeCCP
  (ccpContainerDiv: HTMLElement, instanceURL: string, instanceRegion: string) {
  console.log("initilizing CCP...");  // DEBUG

  try {
    connect.core.initCCP(ccpContainerDiv, {
      ccpUrl: instanceURL,
      loginPopup: true,
      loginPopupAutoClose: true,
      loginOptions: {
        autoClose: true,
        height: 600,
        width: 400,
        top: 0,
        left: 0
      },
      region: instanceRegion,
      softphone: {
        allowFramedSoftphone: true,
        disableRingtone: false,
        ringtoneUrl: "./ringtone.mp3"
      },
      pageOptions: {
        enableAudioDeviceSettings: false,
        enablePhoneTypeSettings: true
      },
      ccpAckTimeout: 5000,
      ccpSynTimeout: 3000,
      ccpLoadTimeout: 10000
    });
    console.log(connect); // DEBUG
  } catch (err) {
    console.error("Couldn't connect to CCP", err);
  }
}
