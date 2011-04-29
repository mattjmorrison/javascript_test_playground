linux-start:
	java -jar JsTestDriver-1.2.2.jar --port 9876 --browser `which google-chrome`

mac-start:
	java -jar JsTestDriver-1.2.2.jar --port 9876 &

mac-all-tests:
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome http://localhost:9876/slave/1/RemoteConsoleRunnerquirks.html & 
	java -jar JsTestDriver-1.2.2.jar --tests all