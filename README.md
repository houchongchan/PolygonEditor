# Polygon Editor

run `./run.sh {APP_NAME}` 
to start running the app locally within a docker container. 

This is a proof of concept for replicate Polyline selection tool seen in many popular softwares like Photoshop and [Clip Paint Studio](https://support.clip-studio.com/en-us/faq/articles/20200023). 

Clicking on the Canvas generates markers at that location. Your initial click generates a marker and the following ones will have a straight line segment connected to the previous marker. Once the lastest marker reaches a certain vicinity of the initial marker, a polygon will be formed, masking the region.

See follow for an example:

### Prior to Connecting the Points
![image](https://github.com/houchongchan/PolygonEditor/assets/30061766/d350d597-a4d7-41bc-8215-971bce54fea1)

### After to Connecting the Points
![image](https://github.com/houchongchan/PolygonEditor/assets/30061766/37648001-7d9a-47e6-850a-9bfaaffd588b)

