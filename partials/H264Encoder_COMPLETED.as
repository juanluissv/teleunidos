package
{
	import flash.display.DisplayObject;
	import flash.display.Sprite;
	import flash.events.NetStatusEvent;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import flash.events.MouseEvent;
	import flash.media.Camera;
	import flash.media.Sound;
	import flash.media.H264Level;
	import flash.media.H264Profile;
	import flash.media.H264VideoStreamSettings;
	import flash.media.Video;
	import flash.net.NetConnection;
	import flash.net.NetStream;
	import flash.display.*;
    import flash.net.URLRequest;
	import flash.system.SecurityPanel;
    import flash.system.Security;
	import flash.media.Microphone;
	import flash.media.SoundCodec;

	
	[SWF( width="940", height="880" )]
	public class H264Encoder_COMPLETED extends Sprite
	{
		private var metaText:TextField = new TextField();
		private var vid_outDescription:TextField = new TextField();
		private var metaTextTitle:TextField = new TextField();
		
		//Define a NetConnection variable nc
		private var nc:NetConnection;
		//Define two NetStream variables, ns_in and ns_out
		private var ns_out:NetStream;
		//Define a Camera variable cam
		private var cam:Camera = Camera.getCamera();
		var live_mic:Microphone = Microphone.getMicrophone();

		//Define a Video variable named vid_out
		private var vid_out:Video;
	    var myLoader:Loader = new Loader;
	    var secondLoader:Loader = new Loader;
	    var thirdLoader:Loader = new Loader;
		var fourLoader:Loader = new Loader;
		var fiveLoader:Loader = new Loader;


		
		//Class constructor
		public function H264Encoder_COMPLETED()
		{	
			//Call initConnection()
			showinit();
		}
		
		private function showinit():void
		{
          myLoader.x = 50;
          myLoader.y = 0;
		 myLoader.load(new URLRequest("golive2.png"));
		addChild(myLoader);
		myLoader.addEventListener(MouseEvent.CLICK, initConnection);

		}
		
		//Called from class constructor, this function establishes a new NetConnection and listens for its status

		private function initConnection(e:MouseEvent):void
		{
			//Create a new NetConnection by instantiating nc
			nc = new NetConnection();
			//Add an EventListener to listen for onNetStatus()
			nc.addEventListener(NetStatusEvent.NET_STATUS, onNetStatus);
			//Connect to the live folder on the server
			nc.connect("rtmp://f107n4dl.blue-rtmp.onyxservers.com/livepkgr/test234?adbe-live-event=liveevent");
			//          rtmp://f107n4dl.blue-rtmp.onyxservers.com/livepkgr/test234?adbe-live-event=liveevent

			//nc.connect("rtmp://YOUR_SERVER_URL/live"); rtmp://0fdfa1.entrypoint.cloud.wowza.com/app-247e

			//Tell the NetConnection where the server should invoke callback methods
			nc.client = this;
			
			//Instantiate the vid_out variable, set its location in the UI, and add it to the stage
			vid_out = new Video();
			vid_out.x = 30; 
			vid_out.y = 10;
			addChild( vid_out );

		}
		
		//It's a best practice to always check for a successful NetConnection
		protected function onNetStatus(event:NetStatusEvent):void
		{
			//Trace the value of event.info.code
			trace( event.info.code );
			/*Check for a successful NetConnection, and if successful
			call publishCamera(), displayPublishingVideo(), and displayPlaybackVideo()*/
			
			if( event.info.code == "NetConnection.Connect.Success" )
			{ 
				publishCamera(); 
				displayPublishingVideo(); 
			}
			if ( event.info.code == "NetConnection.Connect.Failed" ) 
			{
          fourLoader.x = 84;
          fourLoader.y = 320;
		 fourLoader.load(new URLRequest("failed.png"));
		addChild(fourLoader);
			}
		}	
			
			
		
		//The encoding settings are set on the publishing stream
		protected function publishCamera():void
		{
		 if (!cam) {
		  removeChild(myLoader);
          fiveLoader.x = 10;
          fiveLoader.y = 20;
		 fiveLoader.load(new URLRequest("nocam.png"));
		addChild(fiveLoader);      
		}  
		  Security.showSettings(SecurityPanel.PRIVACY);

			//Instantiate the ns_out NetStream
			ns_out = new NetStream( nc );

			//Attach the camera to the outgoing NetStream
			ns_out.attachCamera( cam );
			ns_out.attachAudio(live_mic);

			//Define a local variable named h264Settings of type H264VideoStreamSettings
			var h264Settings:H264VideoStreamSettings = new H264VideoStreamSettings();
			//Set encoding profile and level on h264Settings
			h264Settings.setProfileLevel( H264Profile.BASELINE, H264Level.LEVEL_3_1 );
			//Set the bitrate and quality settings on the Camera object
			cam.setQuality( 90000, 90 );
			//Set the video's height, width, fps, and whether it should maintain its capture size
			cam.setMode( 320, 240, 30, true );
			//Set the keyframe interval
			cam.setKeyFrameInterval( 15 );
			//Set the outgoing video's compression settings based on h264Settings
			ns_out.videoStreamSettings = h264Settings;
			//Publish the outgoing stream
			ns_out.publish("bf1afdac");
			//Declare the metadata variable
			var metaData:Object = new Object();
			//Give the metadata object properties to reflect the stream's metadata
			metaData.codec = ns_out.videoStreamSettings.codec;
			metaData.profile =  h264Settings.profile;
			metaData.level = h264Settings.level;
			metaData.fps = cam.fps;
			metaData.bandwith = cam.bandwidth;
			metaData.height = cam.height;
			metaData.width = cam.width;
			metaData.keyFrameInterval = cam.keyFrameInterval;
			//Call send() on the ns_out NetStream
			
			
		}
		
		//Display the outgoing video stream in the UI
		protected function displayPublishingVideo():void
		{
			//Attach the incoming video stream to the vid_out component
			vid_out.attachCamera( cam );

							messages();
			removeChild(myLoader);


		}
		
		public function messages():void
		{
			
		secondLoader.x = 30
          secondLoader.y = 10;
		 secondLoader.load(new URLRequest("live.png"));
		addChild(secondLoader);
		
		thirdLoader.x = 50;
          thirdLoader.y = 255;
		 thirdLoader.load(new URLRequest("down.jpg"));
		addChild(thirdLoader);
		thirdLoader.addEventListener(MouseEvent.CLICK, removeConnection);
			
		}
		
		private function removeConnection(e:MouseEvent):void
		{
		removeChild(secondLoader);
		removeChild(thirdLoader);
			nc.close();
			vid_out.attachCamera(null);
			vid_out.visible = false;
			          myLoader.x = 50;
          myLoader.y = 0;
		 myLoader.load(new URLRequest("golive2.png"));
		addChild(myLoader);
		myLoader.addEventListener(MouseEvent.CLICK, initConnection);
			
			
			
		}
		
		
		
		
		//Necessary callback function that checks bandwith (remains empty in this case)
		public function onBWDone():void
		{
		}
		

	}
}